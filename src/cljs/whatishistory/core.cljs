(ns whatishistory.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

(enable-console-print!)

;; -------------------------
;; Parse Utilities

; (def definition (js/Parse.Object.extend "Definition"))

; (def query (js/Parse.Query. definition))
;
; (.find query #js {:success (fn [result] (js/console.log result))
;                   :error #(js/console.log %2)})

; ((js/Parse.Cloud.run "getDefnCount"
;                      ""
;                      #js {:success (fn [result] (js/console.log result))
;                           :error #(js/console.log %2)})))

(def defn-atom (reagent/atom {:text "" :author ""}))

(defn get-defn [idx]
  (js/Parse.Cloud.run
   "getDefn"
   #js {:id idx}
   #js {:success
         (fn [result]
          (let [new-val {:text (.get result "definition")
                         :author (.get result "author")}]
            (reset! defn-atom new-val)))
        :error #(js/console.log %2)}))

(defn get-rand-defn []
  (js/Parse.Cloud.run
   "getDefnCount"
   ""
   #js {:success
        (fn [result]
          (get-defn (rand-int result)))
        :error #(js/console.log %2)}))

;; -------------------------
;; Components

(defn definition [defn-atom]
  (fn [defn-atom]
    (if-not (= (get @defn-atom :text) "")
      [:section {:class "row"}
       [:p {:class "ten columns"} (get @defn-atom :text)
        [:span {:class "author"}" -- " (get @defn-atom :author)]]])))

(defn footer []
  [:footer
   [:span {:class "footer-text"}
    "Created by Ethan Miller ("
    [:a {:href "http://google.com"} "@ezmiller"]
    "). Questions? Please "
    [:a {:href "mailto:info@whatishistory.net"}
     "get in touch"] "."]])

;; -------------------------
;; Views

(defn home-page []
  (fn []
    (get-rand-defn)
    [:div {:class "container home"}
     [:header [:h2 {:class "title"} "What is history?"]]
     [definition defn-atom]
     [footer]]))

(defn about-page []
  [:div [:h2 "About whatishistory"]
   [:div [:a {:href "/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (mount-root))

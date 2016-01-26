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

(defn defn-form-content []
  [:form {:class "defnForm"}
   [:div {:class "fieldsWrap"}
    [:input {:type "text"
             :class "authorInput"
             :placeholder "Your Name (Optional)"}]
    [:a {:class "button formToggle"} "Add Another Author's Definition"]
    [:br]
    [:input {:type "email"
             :class "emailInput"
             :placeholder "Enter Your Email"}]
    [:input {:type "email"
             :class "emailConfirm"
             :placeholder "Enter Your Email"}]
    [:span {:class "emailIsConfirmed no"}]
    [:textarea {:class "defnInput twelve columns"
                :placeholder "Please compose your definition here..."}]
    [:div {:class "btnWrap"}
     [:button {:class "button-primary defnSubmit"} "Submit"]]]])

(defn defn-form []
  [defn-form-content])

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
     [:header [:h2 {:class "title"} "What is History?"]]
     [definition defn-atom]
     [:a {:href "/defineit"} "Contribute Your Own Definition"]
     [footer]]))

(defn defineit-page []
  (fn []
    [:div {:class "container defineit"}
     [:header [:h2 {:class "title"} "What is History?"]]
     [:p "The study of history has received many extended and
          authoritative analyses and definitions. The aim of
          this site is different: to assemble a very large
          corpus of definitions of the subject of history and
          its study by a wide range of people, and to make this
          data publicly available for computational analysis and
          re-representation."]
     [:p [:b "Instructions:"] " Simply take a stab at defining history as
          you understand it at the moment. Please don't spent too
          much time. Ten minutes should be sufficient. It is also
          okay to cite another author who you feel expresses things
          clearly."]
     [defn-form]]))

; (defn about-page []
;   [:div [:h2 "About whatishistory"]
;    [:div [:a {:href "/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/defineit" []
  (session/put! :current-page #'defineit-page))

; (secretary/defroute "/about" []
;   (session/put! :current-page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (mount-root))

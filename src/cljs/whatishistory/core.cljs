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

(def app-atom (reagent/atom {}))

(def ^:const parse-defn-class "Definition")

; (defmacro handler-fn
;   ([& body]
;     `(fn [~'event] ~@body nil)))  ; always return nil

(defn parse-init []
  (js/Parse.initialize
   "JSfVAQ9Qo25p2Zdyqk1KeIxt3lGXmpX0AM9TGp5Q"
   "btvf1ywruhW5b3opO6WkrzeCp73jOsRETZ0diJ5B"))

(defn generate-user-token []
  (let [rand-str (str (js/Date.now) (rand 100000))
        token (-> rand-str js/CryptoJS.SHA1 .toString)]
    (str token)))

(defn save-anonymous-user []
    (let [user (js/Parse.User.)
        token (generate-user-token)]
      (.set user "username" token)
      (.set user "password" token)
      (def usr-promise (.signUp user))
      (.then usr-promise (fn [usr]
                           (js/console.log "saving user")
                           (.set usr "ip" (js/getIP))
                           (.save usr)
                           (swap! app-atom assoc :curr-user usr)))))

(defn set-user [app-atom]
  (let [curr-user (js/Parse.User.current)]
    (if (nil? curr-user) 
      (save-anonymous-user)
      (swap! app-atom assoc :curr-user curr-user))
    (js/console.log "user: " (get @app-atom :curr-user))))

(defn save-defn [app-atom]
  (let [Definition (js/Parse.Object.extend "Definition")
        new-defn (Definition.)]
    (.setACL new-defn (js/Parse.ACL. (.current js/Parse.User)))
    (def new-defn-promise (.save new-defn #js {
                         :definedby (get @app-atom :curr-user)
                         :definition (get @app-atom :definition)
                         :author (condp = (get @app-atom :author)
                                   nil "Anonymous"
                                   ""  "Anonymous"
                                   (get @app-atom :author))
                         :email (get @app-atom :email)
                         :definitionSubject "history"
                         :mehuman "1"}))
    (.then new-defn-promise #(js/console.log "defn saved!"))
    (.fail new-defn-promise #(js/alert "Something went wrong :/. Please try again."))))

(defn get-defn [idx]
  (js/Parse.Cloud.run
   "getDefn"
   #js {:id idx}
   #js {:success
         (fn [result]
          (let [new-val {:text (.get result "definition")
                         :author (.get result "author")}]
            (reset! app-atom new-val)))
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

(defn defn-form-content [app-atom]
  [:form {:class "defnForm"}
   [:div {:class "fieldsWrap"}
    [:input {:type "text"
             :class "authorInput"
             :placeholder "Your Name (Optional)"
             :on-change (fn [evt]
                          (swap! app-atom assoc :author evt.target.value))}]
    [:a {:class "button formToggle"} "Add Another Author's Definition"]
    [:br]
    [:input {:type "email"
             :class "emailInput"
             :placeholder "Enter Your Email"
             :on-change (fn [evt]
                          (swap! app-atom assoc :email evt.target.value))}]
    [:input {:type "email"
             :class "emailConfirm"
             :placeholder "Enter Your Email"}]
    [:span {:class "emailIsConfirmed no"}]
    [:textarea {:class "defnInput twelve columns"
                :placeholder "Please compose your definition here..."
                :on-change (fn [evt]
                            (swap! app-atom assoc :definition evt.target.value))}]
    [:div {:class "btnWrap"}
     [:button {:class "button-primary defnSubmit"
               :on-click (fn [evt]
                          (.preventDefault evt)
                          (save-defn app-atom))} "Submit"]]]])

(defn defn-form [app-atom]
  [defn-form-content app-atom])

(defn definition [app-atom]
  (fn [app-atom]
    (if-not (= (get @app-atom :text) "")
      [:section {:class "row"}
       [:p {:class "ten columns"} (get @app-atom :text)
        [:span {:class "author"}" -- " (get @app-atom :author)]]])))

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
     [definition app-atom]
     [:a {:href "/defineit"} "Contribute Your Own Definition"]
     [footer]]))

(defn defineit-page []
  (parse-init)
  (set-user app-atom) 
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
     [defn-form app-atom]]))

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

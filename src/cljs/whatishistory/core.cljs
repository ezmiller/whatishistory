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
(def countries-list js/window.countries)
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
                           (.set usr "ip" (js/getIP))
                           (.save usr)
                           (swap! app-atom assoc :curr-user usr)))))

(defn set-user [app-atom]
  (let [curr-user (js/Parse.User.current)]
    (if (nil? curr-user)
      (save-anonymous-user)
      (swap! app-atom assoc :curr-user curr-user))
    (js/console.log "user: " (get @app-atom :curr-user))))


(defn login-user [app-atom]
  (let [user (js/Parse.User.)
        email (get @app-atom :email)
        pass (get @app-atom :password)]
    (.setUsername user email)
    (.setPassword user pass)
    (.logIn user)))

(defn request-reset-link [evt]
  (let [email (get @app-atom :email)]
    (.preventDefault evt)
    (def reset-request (.requestPasswordReset js/Parse.User email))
    (.fail reset-request #(console.error %1))))

(defn data-valid [defn-data frm-mode]
  (let [nil-fields (filterv #(nil? (second %)) defn-data)]
    (if-not (> (count nil-fields) 0)
      true
      (do
        (js/alert "Please complete the form.")
        false))))

(defn save-email [app-atom]
  (let [curr-user (js/Parse.User.current)
        email (get @app-atom :email)]
    (if-not (nil? curr-user)
      (do
        (.setEmail curr-user email)
        (.setUsername curr-user email)
        (def save-promise (.save curr-user))
        (.fail save-promise
          (fn [err]
            (if (or (= err.code 203) (= err.code 202))
              (swap! app-atom assoc :show-login true))
            (js/console.error err)))
        (.then save-promise (.save curr-user)))
      (throw (js/Error. "Oop! There's no current user.")))))

(defn email-confirmed [app-atom do-alert]
  (let [a (get @app-atom :email)
        b (get @app-atom :email-confirm)
        curr-email (.get (get @app-atom :curr-user) "email")
        email-provided (> (count a) 0)
        email-confirmed (= a b)]
    (if-not (or (not email-provided) (not email-confirmed))
      true
      (condp = do-alert
        false false
        true
          (do
            (cond
              (not email-provided)
                (js/alert "Please enter your email address.")
              (and email-provided (not email-confirmed))
                (js/Parse.initializelert "Please confirm your email address."))
            false)))))

(defn save-defn [app-atom]
  (let [Definition (js/Parse.Object.extend "Definition")
        frm-mode (get @app-atom :defn-form-mode)
        new-defn (Definition.)]
    (.setACL new-defn (js/Parse.ACL. (.current js/Parse.User)))
    (def defn-data {:definedBy (get @app-atom :curr-user)
                    :definition (get @app-atom :definition)
                    :author (condp = (get @app-atom :author)
                              nil "Anonymous"
                              ""  "Anonymous"
                              (get @app-atom :author))
                    :defnDate (if (= frm-mode "default")
                                (js/Date.)
                                (js/Date. (get @app-atom :year)))
                    :definitionSubject "history"
                    :mehuman "1"})
    (if (= frm-mode "anothers")
      (def defn_data (assoc defn-data :year (get @app-atom :year))))
    (if (and (email-confirmed app-atom true) (data-valid defn-data frm-mode))
      (do
         (def new-defn-promise (.save new-defn (clj->js defn-data)))
         (.then new-defn-promise (fn [defn]
                              (js/console.log "definition saved: " defn)
                              (swap! app-atom assoc :defn-obj defn)))
         (.fail new-defn-promise (fn [err]
                                   (js/console.error err.message)
                                   (js/alert "Something went wrong :/. Please try again.")))))))


(defn save-xtra-info [app-atom]
  (let [acl (js/Parse.ACL.)
        curr-user (js/Parse.User.current)
        defn-obj (get @app-atom :defn-obj)
        profession (get @app-atom :profession)
        country (get @app-atom :country)]
    (if-not (nil? defn-obj)
      (do
        (.setPublicReadAccess acl false)
        (.setPublicWriteAccess acl false)
        (.setACL defn-obj acl)
        (.set defn-obj "authorProfession" profession)
        (.set defn-obj "authorCountry" country)
        (def save-defn-promise (.save defn-obj))
        (.then save-defn-promise (fn [evt]
                                   (js/console.log "saved xtra data")
                                   (set! js/window.location.href "/thankyou")))
        (.fail save-defn-promise (fn [err]
                                 (js/console.error err)))))))

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

(defn login-modal [app-atom]
  [:div {:class "modal login"}
   [:div {:class "modal-content"}
    [:span {:class "close"
            :on-click
              (fn [evt]
                (swap! app-atom assoc :email)
                (swap! app-atom assoc :email-confirm)
                (swap! app-atom assoc :show-login false))} "x"]
    [:h2 "Login"]
    [:p "It is wonderful that you are contributing another definition to our collection.
         So that we can link your definitions together, please login."]
    [:input {:type "password"
             :id "password"
             :placeholder "Enter Password"
             :on-change
              (fn [evt]
                (swap! app-atom assoc :password evt.target.value))}]
    [:input {:type "submit"
              :id "submit"
              :on-click
                (fn [evt]
                  (def logout-promise (js/Parse.User.logOut))
                  (.then logout-promise
                    (fn [evt]
                      (def login-promise (login-user app-atom))
                      (.then login-promise
                        (fn [usr]
                          (swap! app-atom assoc :curr-user usr)
                          (swap! app-atom assoc :show-login false)))
                      (.fail login-promise #(console.error %1)))))}]
    [:br]
    [:span "Don't have a password yet? Click "
     [:a {:href "" :on-click request-reset-link} "here"]
     " to request that a password reset link be sent to your email."]]])

(defn yes-click [evt]
  (save-email app-atom)
  (swap! app-atom assoc :show-change-email false))

(defn no-click [evt]
  (def email-on-record (.get (get @app-atom :curr-user) "email"))
  (swap! app-atom assoc :email email-on-record)
  (swap! app-atom assoc :email-confirm email-on-record)
  (swap! app-atom assoc :show-change-email false))

(defn change-email-modal [app-atom]
  [:div {:class "modal change-email"}
   [:div {:class "modal-content"}
    [:span {:class "close"
            :on-click
              (fn [evt]
                (swap! app-atom assoc :email-confirm "") 
                (swap! app-atom assoc :show-change-email false))} "x"]
    [:h2 "Change Email?"]
    [:p "You are trying to confirm an email that is different than the one currently
         associated with you. Do you want us to change the email that we have on record?"]
    [:button {:on-click yes-click} "Yes"]
    [:button {:on-click no-click} "No"]]])

(defn defn-form-instructions []
  [:div
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
             clearly."]])

(defn email-confirm [app-atom]
  [:div
    [:input {:type "email"
               :class "emailInput"
               :placeholder "Enter Your Email"
               :value (get @app-atom :email)
               :on-change
                (fn [evt]
                  (swap! app-atom assoc :email evt.target.value))}]
    [:input {:type "email"
               :class "emailConfirm"
               :placeholder "Enter Your Email"
               :value (get @app-atom :email-confirm)
               :on-change
                 (fn [evt]
                    (swap! app-atom assoc :email-confirm evt.target.value))}]
    [:span {:class "emailConfirm"}
    (if (email-confirmed app-atom false)
      (do
        (def confirmed (get @app-atom :email))
        (def curr-email (.get (get @app-atom :curr-user) "email"))
        (if (nil? curr-email)
          (save-email app-atom))
        (if (and (not (= curr-email confirmed)) (not (nil? confirmed)))
          (swap! app-atom assoc :show-change-email true))
        [:span {:class "check"} "\u2714"])
      [:span {:class "x-mark"} "\u2718"])]])

(defn defn-form-content [app-atom]
  [:form {:class "defnForm"}
   [defn-form-instructions]
   [:div {:class "fieldsWrap"}
    [:input {:type "text"
             :class "authorInput"
             :placeholder "Your Name (Optional)"
             :on-change (fn [evt]
                          (swap! app-atom assoc :author evt.target.value))}]
    [:a {:class "button formToggle"
         :on-click #(swap! app-atom assoc :defn-form-mode "anothers")} "Add Another Author's Definition"]
    [:br]
    [email-confirm app-atom]
    [:textarea {:class "defnInput twelve columns"
                :placeholder "Please compose your definition here..."
                :on-change (fn [evt]
                            (swap! app-atom assoc :definition evt.target.value))}]
    [:div {:class "btnWrap"}
     [:button {:class "button-primary defnSubmit"
               :on-click (fn [evt]
                          (.preventDefault evt)
                          (save-defn app-atom))} "Submit"]]]])

(defn anothers-defn-form-content [app-atom]
  [:form {:class "anothersDefnForm"}
   [defn-form-instructions]
   [:div {:class "fieldsWrap"}
    [:input {:type "text"
             :class "authorInput"
             :placeholder "Author's Name"
             :on-change (fn [evt]
                          (swap! app-atom assoc :author evt.target.value))}]
    [:input {:type "text"
             :class "yearInput"
             :max-length 4
             :placeholder "Enter Year (YYYY)"
             :on-change (fn [evt]
                          (js/console.log (@app-atom :year))
                          (swap! app-atom assoc :year (js/parseInt evt.target.value)))}]
    [:a {:class "button formToggle"
         :on-click #(swap! app-atom assoc :defn-form-mode "default")} "Add Your Own Definition"]
    [:br]
    [email-confirm app-atom]
    [:textarea {:class "defnInput twelve columns"
                :placeholder "Please compose your definition here..."
                :on-change (fn [evt]
                            (swap! app-atom assoc :definition evt.target.value))}]
    [:div {:class "btnWrap"}
     [:button {:class "button-primary defnSubmit"
               :on-click (fn [evt]
                          (.preventDefault evt)
                          (save-defn app-atom)
                          (js/document.location.href "/thankyou"))} "Submit"]]]])


(defn xtra-info-form-content [app-atom]
    [:form {:class "xtraInfoForm"}
     [:p "Your contribution is greatly appreciated. If you are willing, it would
          enrich the information being gathered here if you could provide some 
          additional contextual information."]
     [:div
      [:label {:for "profession"} "What is your profession?"]
      [:input {:type "text"
               :id "profession"
               :placeholder "Your Profession"
               :on-change (fn [evt]
                            (swap! app-atom assoc :profession evt.target.value))}]
      [:label {:for "country"} "Where are you at the moment?"]
      [:select {:on-change (fn [evt]
                            (swap! app-atom assoc :definition evt.target.value))}
       (for [country js/window.countries]
         [:option {:key (hash country)} country])]
      [:div
       [:button {:class "button-primary submit"
                 :on-click (fn [evt]
                             (.preventDefault evt)
                             (save-xtra-info app-atom))} "Submit"]]]])

(defn anothers-xtra-info-form-content [app-atom]
  [:form {:class "anothersXtraInfoForm"}
   [:p "Your contribution is greatly appreciated. If you are willing, it would
          enrich the information being gathered here if you could provide some 
          additional contextual information."]
     [:div
      [:label {:for "profession"} "What is the author's profession?"]
      [:input {:type "text"
               :id "profession"
               :placeholder "Profession"
               :on-change (fn [evt]
                            (swap! app-atom assoc :profession evt.target.value))}]
      [:label {:for "country"} "Where was the auth when she/he penned this definition?"]
      [:select {:on-change (fn [evt]
                            (swap! app-atom assoc :definition evt.target.value))}
       (for [country js/window.countries]
         [:option {:key (hash country)} country])]
      [:div
       [:button {:class "button-primary submit"
                 :on-click (fn [evt]
                             (.preventDefault evt)
                             (save-xtra-info app-atom))} "Submit"]]]])

(defn defn-form [app-atom]
  (if (nil? (get @app-atom :defn-form-mode))
    (swap! app-atom assoc :defn-form-mode "default"))
  (let [mode (get @app-atom :defn-form-mode)]
    (if (= mode "default")
      [defn-form-content app-atom]
      [anothers-defn-form-content app-atom])))

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
  (reset! app-atom {})
  (set-user app-atom) 
  (fn []
    [:div {:class "container defineit"}
     [:header [:h2 {:class "title"} "What is History?"]]
     (if (get @app-atom :show-login) [login-modal app-atom])
     (if (get @app-atom :show-change-email) [change-email-modal app-atom])
     (if (nil? (get @app-atom :defn-obj))
       [defn-form app-atom]
       (condp = (get @app-atom :defn-form-mode)
         "default" [xtra-info-form-content app-atom]
         "anothers" [anothers-xtra-info-form-content app-atom]))]))

(defn thankyou-page []
  (fn []
    [:div {:class "container thankyou"}
     [:p "Thank you!"]]))

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

(secretary/defroute "/thankyou" []
  (session/put! :current-page #'thankyou-page))

;; (secretary/defroute "/login" []
;;   (session/put! :current-page #'login-page))

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

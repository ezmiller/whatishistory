(ns whatishistory.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [hiccup.core :refer [html]]
            [hiccup.page :refer [include-js include-css]]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.middleware.reload :refer [wrap-reload]]
            [environ.core :refer [env]]))

(def mount-target
  [:div#app])

(def loading-page
  (html
   [:html
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     (include-css (if (env :dev) "css/normalize.css" "css/normalize.min.css"))
     (include-css (if (env :dev) "css/site.css" "css/site.min.css"))]
    [:body
     mount-target
     [:script {:type "text/javascript"} "var userip; function getIP() { return myip }"]
     (include-js "//l2.io/ip.js?var=myip")
     (include-js "//www.parsecdn.com/js/parse-1.6.7.min.js")
     (include-js "js/parse.js")
     (include-js "//cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/core-min.js")
     (include-js "///cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/sha1-min.js")
     (include-js "js/app.js")
     (include-js "js/countries.js")]]))


(defroutes routes
  (GET "/" [] loading-page)
  (GET "/about" [] loading-page)
  (GET "/defineit" [] loading-page)
  (GET "/thankyou" [] loading-page)

  (resources "/")
  (not-found "Not Found"))

(def app
  (let [handler (wrap-defaults #'routes site-defaults)]
    (if (env :dev) (-> handler wrap-exceptions wrap-reload) handler)))

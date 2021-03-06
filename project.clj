(defproject whatishistory "0.9"
  :description "A site for collecting definitions of history."
  :url "http://whatishistory.net"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [ring-server "0.4.0"]
                 [reagent "0.5.1"]
                 [reagent-forms "0.5.13"]
                 [reagent-utils "0.1.5"]
                 [ring "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [prone "0.8.2"]
                 [compojure "1.4.0"]
                 [hiccup "1.0.5"]
                 [environ "1.0.1"]
                 [org.clojure/clojurescript "1.7.170" :scope "provided"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.1.5"]
                 [clj-time "0.11.0"]]

  :plugins [[lein-environ "1.0.1"]
            [lein-cljsbuild "1.1.1"]
            [lein-asset-minifier "0.3.0"]]

  :ring {:handler whatishistory.handler/app
         :uberwar-name "whatishistory.war"}

  :min-lein-version "2.5.0"

  :uberjar-name "whatishistory.jar"

  :main whatishistory.server

  :clean-targets ^{:protect false} [:target-path
                                    [:cljsbuild :builds :app :compiler :output-dir]
                                    [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
   {"resources/public/css/normalize.min.css" "resources/public/css/normalize.css"
   "resources/public/css/site.min.css" "resources/public/css/site.css"
   "resources/public/js/parse.min.js" "resources/public/js/parse.js"}}

  :cljsbuild {:builds {:app {:source-paths ["src/cljs" "src/cljc"]
                             :compiler {:output-to "target/cljsbuild/public/js/app.js"
                                        :output-dir "target/cljsbuild/public/js/out"
                                        :asset-path   "js/out"
                                        :optimizations :none
                                        :pretty-print  true}}}}

  :profiles {:dev
              {:repl-options {:init-ns whatishistory.repl}
               :dependencies [[ring/ring-mock "0.3.0"]
                              [ring/ring-devel "1.4.0"]
                              [lein-figwheel "0.5.0"]
                              [org.clojure/tools.nrepl "0.2.12"]
                              [com.cemerick/piggieback "0.1.5"]
                              [pjstadig/humane-test-output "0.7.0"]]
               :source-paths ["env/dev/clj"]
               :plugins [[lein-figwheel "0.5.0"]]
               :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]
               :figwheel {:http-server-root "public"
                          :server-port 3449
                          :nrepl-port 7002
                          :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"
                                             ]
                          :css-dirs ["resources/public/css"]
                          :js-dirs ["resources/public/js"]
                          :ring-handler whatishistory.handler/app}
               :env {:dev true}
               :cljsbuild {:builds
                           {:app {:source-paths ["env/dev/cljs"]
                                  :compiler {:main "whatishistory.dev"
                                  :source-map true}}}}}

              :uberjar {:hooks [minify-assets.plugin/hooks]
                        :prep-tasks ["compile" ["cljsbuild" "once"]]
                        :env {:production true}
                        :aot :all
                        :omit-source true
                        :cljsbuild {:jar true
                                    :builds {:app
                                             {:source-paths ["env/prod/cljs"]
                                              :compiler
                                              {:optimizations :whitespace
                                               :pretty-print false}}}}}})

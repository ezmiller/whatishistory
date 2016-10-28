(ns whatishistory.prod
  (:require [whatishistory.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)

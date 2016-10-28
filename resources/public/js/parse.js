Parse.initialize(
  "JSfVAQ9Qo25p2Zdyqk1KeIxt3lGXmpX0AM9TGp5Q",
  "btvf1ywruhW5b3opO6WkrzeCp73jOsRETZ0diJ5B"
);

var loadRandomDefn = function() {
  getDefnCount().then(function(defnCount) {
    var rand;
    if (defnCount === 0 || defnCount === false) {
      return;
    }
    rand = getRandomInt(0, defnCount);
    console.log('rand: ', rand);
    getDefn(rand).then(function(defn) {
      console.log('defn: ', defn.get('definition'));
      return {
        text: defn.get('definition'),
        author: defn.get('author')
      };
    });
  }).fail(function(err) {
    return false;
  });
};

var getDefn = function(randInt) {
  return Parse.Cloud.run('getDefn', {id: randInt})
    .then(function(result) {
      return result;
    })
    .fail(function(err) {
      console.error(err);
    });
}

var getDefnCount = function() {
  return Parse.Cloud.run('getDefnCount').then(function(number) {
    console.log('number: ', number);
    return number;
  }).fail(function(err) {
    return false;
  });
};

/**
 * Gets random number, inclusive min and
 * exclusive max.
 */
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
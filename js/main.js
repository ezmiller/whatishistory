var nameparser = require('humanname');

(function() {
  'use strict';

  // Parse Object Constants.
  var DEFINITION = 'Definition';

  window.onload = function() {
    init();
  };

  function init() {

    Parse.initialize(
      "JSfVAQ9Qo25p2Zdyqk1KeIxt3lGXmpX0AM9TGp5Q",
      "btvf1ywruhW5b3opO6WkrzeCp73jOsRETZ0diJ5B"
    );

    var elem;
    if ($('body').hasClass('defineit')) {
      elem = document.getElementsByClassName('defnSubmit');
      $.each(elem, function(i,el) {
        el.addEventListener('click', saveDefn);
      });
      elem = document.getElementsByClassName('formToggle');
      $.each(elem, function(i,el) {
        el.addEventListener('click', toggleFormClick);
      });
      setUpHumanTest();
    }
    if ($('body').hasClass('followup')) {
      var followupMode = getParameterByName('mode');
      $('.followupForm.' + followupMode).toggle();
      elem = document.getElementsByClassName('submit');
      $.each(elem, function(i,el) {
        el.addEventListener('click', saveXtraData);
      });
      $('.ctrySelect').select2({
        placeholder: followupMode === 'default' ?
            'Your Location' : "Author's Location"
      });
    }

    if ($('body').hasClass('home')) {
      elem = document.getElementsByClassName('randomDefn')[0];
      loadRandomDefn(elem);
    }

    var currUser = Parse.User.current();
    // console.log('currUser:' , currUser);
    if (currUser === null) {
      saveAnonymousUser();
    }

  }

  function getDefnFormMode() {
    return $('form:visible').hasClass('anothersDefn') ?
        'anothers' : 'default';
  }

  function toggleFormClick(e) {
    e.preventDefault();
    var forms = document.getElementsByTagName('form');
    $.map(forms, function(frm) {
      $(frm).toggle();
    });
  }

  function loadRandomDefn(targetElem) {
    getDefnCount().then(function(defnCount) {
      var rand;
      if (defnCount === 0) {
        return;
      }
      rand = getRandomInt(0, defnCount);
      getDefn(rand).then(function(defn) {
        targetElem.innerHTML =
          '"' + defn.get('definition') + '" -- ' + defn.get('author');
      });
    }).fail(function(err) {
      console.error(err);
    });
  }

  function getDefn(randInt) {
    return Parse.Cloud.run('getDefn', {id: randInt})
      .then(function(result) {
        return result;
      })
      .fail(function(err) {
        console.error(err);
      });
  }

  function getDefnCount() {
    return Parse.Cloud.run('getDefnCount').then(function(number) {
      return number;
    }).fail(function(err) {
      console.error(err);
    });
  }

  function saveDefn(e) {
    var newDefn, Definition, acl, currUser,
        author, year, defnText, frmMode, frmIdx;
    e.preventDefault();
    frmMode = getDefnFormMode();
    frmIdx = frmMode === 'default' ? 0 : 1;
    Definition = Parse.Object.extend(DEFINITION);
    newDefn = new Definition();
    currUser = Parse.User.current();
    defnText = document.getElementsByClassName('defnInput')[frmIdx].value;
    author = document.getElementsByClassName('authorInput')[frmIdx].value;
    year = document.getElementsByClassName('yearInput')[0].value;
    year = (frmMode === 'anothers') ? new Date('1/1/'+year) : new Date();
    if (author === '')
      author = 'Anonymous';
    if (frmMode == 'anothers' && nameIsValid(author) === false) {
      alert('The name you entered is invalid. Please try again.');
      return;
    }
    newDefn.setACL(new Parse.ACL(Parse.User.current()));
    newDefn.save({
      'definedBy': currUser,
      'author': author,
      'definition': defnText,
      'definitionSubject': 'history',
      'mehuman': document.getElementById('mehuman').value,
      'defnDate': year
    }).then(function(data) {
      if (!data) {
        return;
      }
      document.location = '/followup?mode=' + frmMode + '&id=' + data.id;
    }).fail(function(x) {
      console.log(x);
      alert('Sorry, there seems to be a problem. Please try again later.');
    });
  }

  function saveXtraData(e) {
    console.log("savextradata");
    var Definition, acl, id, defn, name,
        profession, ctry, ctrySelect;
    e.preventDefault();
    id = getParameterByName('id');
    if (!id) {
      return;
    }
    profession = document.getElementById('profession').value.trim();
    ctrySelect = document.getElementById('country');
    ctry = ctrySelect.options[ctrySelect.selectedIndex].value;
    Definition = Parse.Object.extend(DEFINITION);
    defn = new Definition();
    defn.set('id', getParameterByName('id'));
    acl = new Parse.ACL();
    acl.setPublicReadAccess(false);
    acl.setPublicWriteAccess(false);
    defn.setACL(acl);
    if (profession.length > 0) defn.set('authorProfession', profession);
    if (ctry.length > 0) defn.set('authorCountry', ctry);
    defn.save().then(function() {
      document.location = '/thankyou';
    }).fail(function(x) {
      console.error(x);
    });
  }

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function saveAnonymousUser() {
    var user, num, hash, token;
    if (storageAvailable('localStorage') === false) {
      return;
    }
    if (!Date.now) {
      Date.now = function() { return new Date().getTime(); };
    }
    try {
      num = Date.now() + getRandomInt(1000,1000000);
      hash = CryptoJS.SHA1(myip.toString() + num.toString());
    }
    catch (e) {
      console.error('Trouble generating hash: ', e);
    }
    user = new Parse.User();
    token = hash.toString(CryptoJS.enc.Hex);
    user.set("username", token);
    user.set("password", token);
    user.signUp(null, {
      success: function(usr) {
        usr.set('ip', myip);
        usr.save();
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  function anonymousUserExists() {
    return false;
  }

  function nameIsValid(name) {
    var parsed = nameparser.parse(name);
    if (parsed.firstName === '' || parsed.lastName === '')
      return false;
    return true;
  }


  function storageAvailable(type) {
    try {
      var storage = window[type],
      x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  }

  function setUpHumanTest() {
    var myforms = document.getElementsByTagName("form") ;
    for (var i=0; i<myforms.length; i++) {
      myforms[i].addEventListener("focus", markAsHuman);
      myforms[i].addEventListener("click", markAsHuman);
    }
  }

  function markAsHuman() {
    document.getElementById("mehuman").value = "1";
  }

  /**
   * Gets random number, inclusive min and
   * exclusive max.
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

})();

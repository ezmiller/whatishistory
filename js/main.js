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
		if ($('body').hasClass('home')) {
			elem = document.getElementById('defnSubmit');
			elem.addEventListener('click', saveDefn);
		}
		if ($('body').hasClass('followup')) {
			elem = document.getElementById('submit');
			elem.addEventListener('click', saveXtraData);
			$('.ctrySelect').select2({
				placeholder: 'Your Location'
			});
		}
		setUpHumanTest();

		var currUser = Parse.User.current();
		if (currUser === null) {
			saveAnonymousUser();
		}

	}

	function saveDefn(e) {
		var newDefn, Definition, acl;
		e.preventDefault();
		Definition = Parse.Object.extend(DEFINITION);
		newDefn = new Definition();
		var currUser = Parse.User.current();
		newDefn.setACL(new Parse.ACL(Parse.User.current()));
		newDefn.save({
			'definedBy': currUser,
			'definition': document.getElementsByClassName('defnInput')[0].value,
			'definitionSubject': 'history',
			'mehuman': document.getElementById('mehuman').value
		}).then(function(data) {
			if (!data) {
				return;
			}
			document.location = '/followup?id=' + data.id;
		}).fail(function(x) {
			alert('Sorry, there seems to be a problem. Please try again later.');
		});
	}

	function saveXtraData(e) {
		var Definition, acl, id, defn, name,
				profession, ctry, ctrySelect;
		e.preventDefault();
		id = getDefnId();
		if (!id) {
			return;
		}
		name = document.getElementById('name').value.trim();
		profession = document.getElementById('profession').value.trim();
		ctrySelect = document.getElementById('country');
		ctry = ctrySelect.options[ctrySelect.selectedIndex].value;
		Definition = Parse.Object.extend(DEFINITION);
		defn = new Definition();
		defn.set('id', getDefnId());
		acl = new Parse.ACL();
		acl.setPublicReadAccess(false);
		acl.setPublicWriteAccess(false);
		defn.setACL(acl);
		if (name.length > 0) defn.set('author', name);
		if (profession.length > 0) defn.set('authorProfession', profession);
		if (ctry.length > 0) defn.set('authorCountry', ctry);
		defn.save().then(function() {
			document.location = '/thankyou';
		});
	}

	function getDefnId() {
		if (location.search.length > 0) {
			return location.search.split('=')[1];
		}
		else return false;
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


	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

})();

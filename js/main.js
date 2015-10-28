(function() {
	'use strict';

	window.onload = function() {
		init();
	};

	function init() {
		Parse.initialize(
			"JSfVAQ9Qo25p2Zdyqk1KeIxt3lGXmpX0AM9TGp5Q",
			"btvf1ywruhW5b3opO6WkrzeCp73jOsRETZ0diJ5B"
		);
		var elem = document.getElementById('defnSubmit');
		if ($('body').hasClass('home')) {
			elem.addEventListener('click', saveDefn);
		}
		if ($('body').hasClass('followup')) {
			elem.addEventListener('click', saveXtraData);
			$('.ctrySelect').select2({
				placeholder: 'Your Country'
			});
		}
		if (Parse.User.current().authenticated() === false) {
			saveAnonymousUser(); }
	}

	// function fetchRecentDefn() {
	// 	var query, Definition, sixMonthsAgo;

	// 	var subtractMonths = function(date, months) {
	// 		date.setMonth(date.getMonth - months);
	// 		return date;
	// 	};
	// 	sixMonthsAgo = subtractMonths(new Date(), 6);

	// 	Definition = Parse.Object.extend('Definition');
	// 	query = new Parse.Query(Definition);
	// 	query.equalTo("definedBy", Parse.User.current());
	// 	query.greaterThan('createdAt', sixMonthsAgo);
	// 	query.find().then(function(result) {
	// 		var elem = document.getElementsByClassName('defnInput')[0];
	// 		elem.innerHtml = result[0].
	// 	});
	// }

	function saveDefn(e) {
		var newDefn, Definition, acl;
		e.preventDefault();
		Definition = Parse.Object.extend("Definition");
		newDefn = new Definition();
		var currUser = Parse.User.current();
		newDefn.setACL(new Parse.ACL(Parse.User.current()));
		newDefn.save({
			'definedBy': currUser,
			'definition': document.getElementsByClassName('defnInput')[0].value,
			'definitionSubject': 'history'
		}).then(function(data) {
			var id = data.id;
			document.location = '/followup?id=' + id;
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
		Definition = Parse.Object.extend("Definition");
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
			console.log('saved');
		});
	}

	function getDefnId() {
		if (location.search.length > 0) {
			return location.search.split('=')[1];
		}
		else return false;
	}

	function saveAnonymousUser() {
		var u, num, hash;
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
		var user = new Parse.User();
		user.set("username", u);
		user.set("password", hash.toString(CryptoJS.enc.Hex));
		user.signUp(null, {
			success: function(user) {
				console.log('signed up');
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

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

})();

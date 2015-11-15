Parse.Cloud.beforeSave('Definition', function(req,resp) {
	var defn = req.object;
	// Human check.
	var isHuman = parseInt(defn.get('mehuman'), 10);
	isHuman = (isHuman === 1) ? true : false;
	console.log('isHuman:', isHuman);
	if (!isHuman) {
		resp.error("User seems to be a bot.");
	}
	else {
		resp.success();
	}
});

Parse.Cloud.define('getDefn', function(req, resp) {
	var id = req.params.id;

	Parse.Cloud.useMasterKey();

	Definition = Parse.Object.extend('Definition');
	query = new Parse.Query(Definition);
	query.find().then(function(result) {
		resp.success(result[id]);
	});

});

Parse.Cloud.define('getDefnCount', function(req, resp) {
	var Definition, query, defn;

	Parse.Cloud.useMasterKey();

	Definition = Parse.Object.extend('Definition');
	query = new Parse.Query(Definition);
	query.count().then(function(number) {
		console.log(resp.success(number));
	});

});

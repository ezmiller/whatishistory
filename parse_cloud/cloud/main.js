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

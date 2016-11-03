deploy:
	lein uberjar
	rsync -avz --verbose --progress target/*.jar root@138.197.8.60:/var/www/whatishistory/app/
	ssh root@138.197.8.60 'sudo service supervisor restart'

deploy:
	lein do clean, uberjar
	rsync -avz --verbose --progress target/*.jar whatishistory:/var/www/whatishistory/app/
	supervisorctl -s http://138.197.8.60:9001 -u deploy -p fSFZtmFae8 restart whatishistory

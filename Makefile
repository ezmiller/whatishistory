serve:
	python -m SimpleHTTPServer

deploy:
	rm bundle.js
	webpack -d -p
	rsync -avz --progress --delete-excluded --exclude-from 'exclude_list.txt' ./ whatishistory:live/

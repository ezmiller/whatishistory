deploy:
	rm bundle.js
	webpack -d
	rsync -avz --progress --delete-excluded --exclude-from 'exclude_list.txt' ./ whatishistory:live/

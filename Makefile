deploy:
	rsync -avz --progress --delete-after --exclude "parse_cloud" --exclude ".DS_Store" ./ whatishistory:live/

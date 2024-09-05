gt:
	git add .
	git commit -m "commit"
	git push

dev:
	git pull
	yarn
	npm i
	yarn dev
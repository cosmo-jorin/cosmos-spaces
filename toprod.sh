rm -r dist
npm run webpack-prod
./totar.sh
scp ../antoniogf.tar agf0710@antoniogf.com:~/antoniogf-web
rm ../antoniogf.tar

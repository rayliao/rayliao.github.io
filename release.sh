# release 
# build production files

echo 'building ...'
npm run build 

echo 'adding to git'
git add dist && git commit -m "chore(dist): Initial dist subtree commit"

echo 'split to gh-pages branch'
git subtree split --prefix dist -b gh-pages

echo 'push to master...'
git push -f origin gh-pages:master

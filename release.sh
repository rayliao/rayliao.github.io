# release 
# build production files

echo 'building ...'
yarn build 

echo 'adding to git'
git add public -f && git commit -m "chore(public): Initial public subtree commit"

echo 'split to gh-pages branch'
git subtree split --prefix public -b gh-pages

echo 'push to master...'
git push -f origin gh-pages:master

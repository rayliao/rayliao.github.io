# release 
# build production files

echo 'building ...'
yarn build 

echo 'adding to git'
git add build -f && git commit -m "chore(build): Initial build subtree commit"

echo 'del branch before split'
git branch -D gh-release

echo 'split to gh-release branch'
git subtree split --prefix build -b gh-release

echo 'push to master...'
git push -f origin gh-release:master

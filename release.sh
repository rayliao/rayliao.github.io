# release 
# build production files

echo 'cleaning...'
gatsby clean

echo 'building ...'
yarn build 

echo 'adding to git'
git add public -f && git commit -m "chore(public): Initial public subtree commit"

echo 'del branch before split'
git branch -D gh-release

echo 'split to gh-release branch'
git subtree split --prefix public -b gh-release

echo 'push to master...'
git push -f origin gh-release:master

# release 
# build production files

echo 'building ...'
npm run build 

echo 'adding to git'
git add dist && git commit -m "chore(dist): Initial dist subtree commit"

git subtree push --prefix dist origin master 

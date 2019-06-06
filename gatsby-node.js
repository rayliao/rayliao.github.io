exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: '/no-data/',
    component: require.resolve('./src/templates/noData.tsx'),
  })
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/yuri/'
    : '/'
}
// for deploy: git subtree push --prefix dist origin gh-pages
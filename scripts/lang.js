const fs = require('fs')
const glob = require('glob')
const parser = require('typescript-react-intl').default
const chalk = require('chalk')
const Opencc = require('opencc')
const log = console.log
const targets = ['zh', 'en', 'ja', 'ko', 'fr']
/**
 * runner
 * @param {*} pattern 文件过滤正则
 * @param {*} cb 回调函数
 */
function runner(pattern, cb) {
  let results = []
  pattern = pattern || 'src/**/*.@(tsx|ts)'
  glob(pattern, function(err, files) {
    if (err) {
      throw new Error(err)
    }

    files.forEach(f => {
      const contents = fs.readFileSync(f).toString()
      const res = parser(contents, { tagNames: ['FormattedMessage'] })
      results = results.concat(res)
    })

    cb && cb(results)
  })
}

runner(null, res => {
  let locale = {}

  res.forEach(r => {
    locale[r.id] = r.defaultMessage
  })

  log(chalk.green('从源码提取react-intl定义的多语言文件...'))
  const c = JSON.stringify(locale, null, 2)
  targets.forEach(l => {
    fs.writeFileSync(`src/lang/${l}.tsx`, `export default ${c}\r`)
  })
  log(chalk.red('...提取zh完成'))

  log(chalk.green('\n开始简体转换繁体...'))
  const opencc = new Opencc()
  const tw = opencc.convertSync(c)
  fs.writeFileSync('src/lang/tw.tsx', `export default ${tw}\r`)
  log(chalk.red('...繁体转换完成'))
})

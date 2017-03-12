/**
 * CV Page
 * @class Cv
 */
class Cv {
  constructor(o) {
    this.styleText = this.getStyles()
  }
  init() {
    console.log('yeah cv')
    console.log(this.styleText)
    this.writeTo(this.styleText[0], 1, 1)
  }

  /**
   * 循环写入
   * @param {*写入的内容} message
   * @param {*起始位置} index
   * @param {*每次写入的长度} charsPerInterval
   */
  async writeTo(message, index, charsPerInterval) {
    let chars = message.slice(index, index + charsPerInterval)
    index += charsPerInterval
    $('#style-text').append(chars)

    return writeTo(message, index, charsPerInterval)
  }

  /**
   * 获取样式
   */
  async getStyles() {
    let arr = await Promise.all([0, 1, 2, 3].map(i => fetch(`../scripts/css/styles${i}.css`)))
    arr = await Promise.all(arr.map(url => url.text()))
    return arr
  }
}

export default (options) => {
  new Cv(options).init()
}

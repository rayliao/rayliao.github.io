/**
 * CV Page
 * @class Cv
 */
class Cv {
  constructor(o) {
    this.styleText = []
    this.speed = 16
    this.paused = false
  }

  async init() {
    await this.getStyles()
    await this.writeTo(this.styleText[0], 1, this.speed, 1)
  }

  /**
   * 循环写入
   * @param {*写入的内容} message
   * @param {*起始位置} index
   * @param {*速度} interval
   * @param {*每次写入的长度} charsPerInterval
   */
  async writeTo(message, index, interval, charsPerInterval) {
    let chars = message.slice(index, index + charsPerInterval)
    index += charsPerInterval
    $('#style-text').append(chars)

    if(index < message.length) {
      let thisInterval = interval

      await this.delay(thisInterval)
      // do {
        
      // } while(this.paused)
    }

    return this.writeTo(message, index, interval, charsPerInterval)
  }

  /**
   * 获取样式
   */
  async getStyles() {
    const arrs = [0, 1, 2, 3].map(async i => {
      const response = await fetch(`../scripts/css/styles${i}.css`)
      return response.text()
    })

    for (const arr of arrs) {
      this.styleText.push(await arr)
    }
    // let arr = await Promise.all([0, 1, 2, 3].map(i => fetch(`../scripts/css/styles${i}.css`)))
    // this.styleText = await Promise.all(arr.map(url => url.text()))
  }

  /**
   * 延迟执行
   * @param {*延迟时间：毫秒} ms 
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export default (options) => {
  new Cv(options).init()
}

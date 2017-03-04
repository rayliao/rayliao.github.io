class Home {
    init() {
        console.log('home init')
    }
}

export default () => {
    new Home.init()
}

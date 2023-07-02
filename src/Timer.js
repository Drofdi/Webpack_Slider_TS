export default class Timer{
    constructor(logics){
        this.logics = logics
        this.timer = this.timer.bind(this)
        this.destroyTimer = this.destroyTimer.bind(this)
    }

    timer(){
        this.interval = setInterval(logics.nextSlide, 5000)
    }

    destroyTimer(){
        clearInterval(this.interval)
    }
}
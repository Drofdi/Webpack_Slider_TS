export default class ImgSlider{
    constructor(selectors,logics){
    this.selectors = selectors
    this.logics = logics
    this.setEvents = this.setEvents.bind(this)
    this.setEvents()
}
    setEvents(){
        this.selectors.mainSlider.addEventListener('pointerdown', this.logics.pointerDown)
        this.selectors.mainSlider.addEventListener('pointermove', this.logics.pointerMove)
        this.selectors.mainSlider.addEventListener('pointerup',this.logics.pointerUp)
        this.selectors.buttonBack.addEventListener('click', this.logics.backSlideButton)
        this.selectors.buttonNext.addEventListener('click', this.logics.nextSlideButton)
        this.selectors.headBut.addEventListener('click', this.logics.headButton)
    }
} 




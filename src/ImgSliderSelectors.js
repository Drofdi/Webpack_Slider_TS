export default class ImgSliderSelectors{
    constructor(){
        this.headBut = querySelectors.headButton
        this.headInput = querySelectors.headInput
        this.mainSlider = querySelectors.mainSlider
        this.mainImgLine = querySelectors.mainImgLine
        this.imgS = querySelectors.sliderImg
        this.buttonBack = querySelectors.buttonBack
        this.buttonNext = querySelectors.buttonNext
    }
}

export const querySelectors = {
       headButton : document.querySelector('.headButton'),
       headInput : document.querySelector('.headInput'),
       mainSlider : document.querySelector('.mainSlider'),
       mainImgLine : document.querySelector('.mainImgLine'),
       sliderImg : document.querySelectorAll('.sliderImg'),
       buttonBack : document.querySelector('.back'),
       buttonNext : document.querySelector('.next'),
}
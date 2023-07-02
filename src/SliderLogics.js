export default class Sliderlogics{
    constructor(selectors,timer){
    this.selectors = selectors
    this.timer = timer
    this.x1 = 0
    this.x2 = 0
    this.offset = 0
    this.numberOfPictures = 1
    this.isMouseOn
    this.interval

    this.headButton = this.headButton.bind(this)
    this.pointerDown = this.pointerDown.bind(this)
    this.pointerMove = this.pointerMove.bind(this)
    this.pointerUp = this.pointerUp.bind(this)
    this.backSlide = this.backSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
    this.backSlideButton = this.backSlideButton.bind(this)
    this.nextSlideButton = this.nextSlideButton.bind(this)
    }

    headButton(){
        this.numberOfPictures = this.selectors.headInput.value
        if (this.numberOfPictures < 1 || this.numberOfPictures > 3){
            throw new Error("Введите значение от 1 до 3")
        }
        if (this.numberOfPictures == 1){
            this.offset = 0
            this.selectors.mainImgLine.style.left = 0 + '%'
            for(let img of this.selectors.imgS){
                img.style.width = 100 + '%'  
            }
        }    
        if (this.numberOfPictures == 2){
            this.offset = 0
            this.selectors.mainImgLine.style.left = 0 + '%'
            for(let img of this.selectors.imgS){
                img.style.width = 50 + '%' 
            }
        }
        if (this.numberOfPictures == 3){
            this.offset = 0
            this.selectors.mainImgLine.style.left = 0 + '%'
            for(let img of this.selectors.imgS){
                img.style.width = 33.333 + '%'
            }
        }  
    }

    pointerDown(event){
        this.isMouseOn = true
        this.x1 = event.screenX
        this.selectors.mainSlider.addEventListener('pointermove', this.pointerMove)
    }

    pointerUp(){
        this.selectors.mainSlider.removeEventListener('pointermove', this.pointerMove)
    }

    pointerMove(event){
        this.x2 = event.screenX
        if(this.isMouseOn){
        if (this.x1 > this.x2){
            this.nextSlide()
            this.isMouseOn = false
            this.timer.destroyTimer()
            this.timer.timer()
        } else if (this.x2 > this.x1){
            this.backSlide()
            this.isMouseOn = false
            this.timer.destroyTimer()
            this.timer.timer()
        }
    }
    }

    backSlideButton(){
        this.backSlide()
        this.timer.destroyTimer()
        this.timer.timer()
    }

    nextSlideButton(){
        this.nextSlide()
        this.timer.destroyTimer()
        this.timer.timer()
    }


    backSlide(){
        if (this.numberOfPictures == 1){
            this.offset -= 100
                if (this.offset < 0){
                    this.offset = 100 * (this.selectors.imgS.length - 1)
                }
                this.selectors.mainImgLine.style.left = -this.offset + '%'
            }   
            if (this.numberOfPictures == 2){
                this.offset -= 50
                if (this.offset < 0){
                    this.offset = 50 * (this.selectors.imgS.length - 2)
                }
                this.selectors.mainImgLine.style.left = -this.offset + '%'
            }
            if (this.numberOfPictures == 3){
                this.offset -= 33.33
                if (this.offset < 0){
                    this.offset = 33.33 * (this.selectors.imgS.length - 3)
                }
                this.selectors.mainImgLine.style.left = -this.offset + '%'
            }
    }

    nextSlide(){
        if (this.numberOfPictures == 1){
            this.offset += 100
            if (this.offset > 100 * (this.selectors.imgS.length - 1)){
                this.offset = 0
            }
            this.selectors.mainImgLine.style.left = -this.offset + '%'
        }
        if (this.numberOfPictures == 2){
            this.offset += 50
            if (this.offset > 50 * (this.selectors.imgS.length - 2)){
                this.offset = 0
            }
            this.selectors.mainImgLine.style.left = -this.offset + '%'
        }
        if (this.numberOfPictures == 3){
            this.offset += 33.33
            if (this.offset > 33.33 * (this.selectors.imgS.length - 3)){
                this.offset = 0
            }
            this.selectors.mainImgLine.style.left = -this.offset + '%'
        }
    }
}
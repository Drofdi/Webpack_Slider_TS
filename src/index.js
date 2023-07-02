import ImgSlider from "./ImgSlider.js"
import Timer from "./Timer.js"
import Sliderlogics from "./SliderLogics.js"
import ImgSliderSelectors from "./ImgSliderSelectors.js"

let selectors = new ImgSliderSelectors()
let timer = new Timer() 
let logics = new Sliderlogics(selectors, timer) 
let slider = new ImgSlider(selectors, logics)
timer.timer()
// make variables to represent what is on the html file.
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// initialize a value which will start at 0 then go up to 100 but 0 is the value.
let load = 0
// making a initial value for the blurring to start moving every 30 milliseconds. You can check console on webpage to see it move in the inspect view right click.
let int = setInterval(blurring, 30)
// this function will stop the interval from continuing forever. So the "If" statement stop it at 100 and cancels the "int" variable
function blurring() {
    load++

    if(load > 99){
        clearInterval(int)
    }
    // this line below will display the animation for the number to go up to 100%
    loadText.innerText = `${load}%`
    // this line will set the opacity. the scale will value "load" which is starting off at 0. Then when the number start from 0 and ends at 100, the opacity will start at 1 and gradually go down to 0.
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
// this line take the scale expression above and blurs the image back into view.
    bg.style.filter = `blur(${scale(load, 0, 100, 30,0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
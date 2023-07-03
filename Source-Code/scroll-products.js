console.log('heyyy')

const slider = document.querySelector('.slider')
const productItems = document.querySelector('.product-items')

let pressed = false
let startx;
let x;

slider.addEventListener('mousedown', (e) =>{
    pressed = true
    startx = e.offsetX - productItems.offsetLeft
    slider.style.cursor = 'grabbing'
    console.log(productItems.offsetLeft)
})

slider.addEventListener('mouseenter', () =>{
    slider.style.cursor = 'grab'
    // alert('heyr34315')
})

// slider.addEventListener('mouseleave', () =>{
//     slider.style.cursor = 'default'
// })

slider.addEventListener('mouseup', () =>{
    slider.style.cursor = 'grab'
})

window.addEventListener('mouseup', () =>{
    pressed = false
})


slider.addEventListener('mousemove', (e) =>{
    if(!pressed) return
    e.preventDefault()

    x = e.offsetX


    productItems.style.left=`${x - startx}px`
})

function checkBoundary (){
    let outer = slider.getBoundingCXlientRect()
    let inner = slider.getBoundingCXlientRect()

    if(parseInt(productItems.style.left)>0){
        productItems.style.left = '0px';
    }

    else if(inner.right<outer.right){
        productItems.stryle.left = `-${inner.width-outer.width}px`
    }
}

checkBoundary
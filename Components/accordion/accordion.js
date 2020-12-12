
let accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordsInstanse => {
    let outputs = accordsInstanse.querySelectorAll('.accordion__output')
    let accordion = accordsInstanse.querySelector('.accordion__title')
    let someClicks = 1;
    accordion.addEventListener('click', () => {
        outputs.forEach(output => {
            output.className = someClicks % 2 ? 'accordion__output accordion__output_active' : 'accordion__output'
        })
        someClicks++
    })
})


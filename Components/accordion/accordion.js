
let accordions = document.querySelectorAll('.accordion-container')

accordions.forEach(accordsInstanse => {
    let outputs = accordsInstanse.querySelectorAll('.accordion-output')
    let accordion = accordsInstanse.querySelector('.accordion')
    let someClicks = 1;
    accordion.addEventListener('click', () => {
        outputs.forEach(output => {
            output.className = someClicks % 2 ? 'accordion-output active' : 'accordion-output'
        })
        someClicks++
    })
})


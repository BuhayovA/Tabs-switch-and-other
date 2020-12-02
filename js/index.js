let tabs = document.querySelectorAll('.tabs-container')
let output = document.querySelectorAll('.content')

tabs.forEach( tabsInstance =>  {
    console.log();
   const tabList = tabsInstance.querySelectorAll('.tab')
   let outputs = tabsInstance.querySelectorAll('.content')
   tabsFunction(tabList,outputs)
} )



function tabsFunction(tabList,outputs) {
    tabList.forEach((tab, tabIndex) =>{
        tab.onclick = () => {
            tabList.forEach(t => t.className = 'tab')
            tab.className = 'tab tab_active'
            outputs.forEach((output, index) => {
                setTimeout(() => output.className = +index === tabIndex ? 'content active' : 'content', 120)
            })
        }
   } )
}



let accordions = document.querySelectorAll('.accordion-container')

accordions.forEach(accordsInstanse => {
    let outputs = accordsInstanse.querySelectorAll('.accordion-output')
    let accordion = accordsInstanse.querySelector('.accordion')
    let someClicks = 1;
    console.log(accordion);
    accordion.addEventListener('click', () => {
        outputs.forEach(output => {
            output.className = someClicks % 2 ? 'accordion-output active' : 'accordion-output'
        })
        someClicks++
    })
})
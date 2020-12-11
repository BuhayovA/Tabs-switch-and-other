let tabs = document.querySelectorAll('.tabs-container')
let output = document.querySelectorAll('.output__content')

tabs.forEach( tabsInstance =>  {
    console.log();
   const tabList = tabsInstance.querySelectorAll('.tabs__item')
   let outputs = tabsInstance.querySelectorAll('.output__content')
   tabsFunction(tabList,outputs)
} )



function tabsFunction(tabList,outputs) {
    tabList.forEach((tab, tabIndex) =>{
        tab.onclick = () => {
            tabList.forEach(t => t.className = 'tabs__item')
            tab.className = 'tabs__item tabs__item_active'
            outputs.forEach((output, index) => {
                setTimeout(() => output.className = +index === tabIndex ? 'output__content output__content_active' : 'output__content', 120)
            })
        }
   } )
}
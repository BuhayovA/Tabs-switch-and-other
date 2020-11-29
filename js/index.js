let tabs = document.querySelectorAll('.tabs-container')
let output = document.querySelectorAll('.content')

tabs.forEach( tabsInstance =>  {
   const tabList = tabsInstance.querySelectorAll('.tab')
   let outputs = tabsInstance.querySelectorAll('.content')
   tabsFunction(tabList,outputs)
} )



function tabsFunction(tabList,outputs) {
    tabList.forEach((tab, tabIndex) =>{
        // if(tabIndex === 0)
        //     tab.className = 'tab tab_active'
        tab.onclick = () => {
            tabList.forEach(t => t.className = 'tab')
            tab.className = 'tab tab_active'
            outputs.forEach((output, index) => {
                output.className = +index === tabIndex ? 'content active' : 'content'
            })
        }
   } )
}
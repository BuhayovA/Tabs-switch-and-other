let tabs = document.querySelectorAll('.tabs-container')
let output = document.querySelectorAll('.content')

// console.log(tabActive);
// console.log(output);
// console.log(tabs);  


tabs.forEach( tabsInstance =>  {
   const tabList = tabsInstance.querySelectorAll('.tab')
   let outputs = tabsInstance.querySelectorAll('.content')
   tabList.forEach((tab, tabIndex) =>{
        tab.onclick = () => {
            tabList.forEach(t => t.className = 'tab')
            tab.className = 'tab tab_active'
            outputs.forEach((output, index) => {
                if(index === tabIndex){
                    output.className = 'content active'
                }else {
                    output.className = 'content'
                }
            })
        }
   } )
} )
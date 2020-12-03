color()



function color () {
    let toggle = document.querySelector('.toggle-state')
    let tabsStyle = document.querySelectorAll('.tabs')
    let body = document.querySelector('body')
    let switchColor = document.querySelector('.toggle')
    let outputsStyle = document.querySelectorAll('.content')
    

    let toggleState = false;

    toggle.addEventListener ('click', () => {
        tabsStyle.forEach(tab => toggleState === false ? tab.style.background = 'black' : tab.style.background = '#6200ee')
        toggleState === false ? body.style.background = '#121212' : body.style.background = 'white'
        toggleState === false ? switchColor.style.background = '#282828' : switchColor.style.background = '#3700b3'
        outputsStyle.forEach(outputs => {
            toggleState === false ? outputs.style.background = '#282828' : outputs.style.background = 'white'
            toggleState === false ? outputs.style.color = 'white' : outputs.style.color = 'black'
        })
        check()  
    })

    function check() {
        toggleState === true ? toggleState = false : toggleState = true
    }
}
// color()


// function color () {
    // let toggle = document.querySelector('.toggle-state')
//     let tabsStyle = document.querySelectorAll('.tabs')
//     let body = document.querySelector('body')
//     let switchColor = document.querySelector('.toggle')
//     let outputsStyle = document.querySelectorAll('.content')
    

    

//     toggle.addEventListener ('click', () => {
//         tabsStyle.forEach(tab => toggleState === false ? tab.style.background = 'black' : tab.style.background = '#6200ee')


//         outputsStyle.forEach(outputs => {
//             toggleState === false ? outputs.style.background = '#282828' : outputs.style.background = 'white'
//             toggleState === false ? outputs.style.color = 'white' : outputs.style.color = 'black'
//         })
//         check()
//     })

//     
// }
let toggleState = false;
let toggle = document.querySelector('.toggle-state')

class Switch{
    constructor(selector) {
        this.$el = [...document.querySelectorAll(selector)]
    }
}



class Background extends Switch{
    constructor(options) {
        super(options.selector) 

        this.$el.forEach(element => {
            element.style.background = options.background
            element.style.color = options.color
        });
    }
    setActive(state){
        toggleState = state
    }
}

toggle.addEventListener ('click', () => {
    

    if(toggleState === false) {
        const bodyBackground = new Background({
            selector: 'body',
            background: '#121212'
        })
        
        const tabsBackground = new Background({
            selector: '.tabs',
            background: 'black'
        })
        const switchBackground = new Background({
            selector: '.toggle',
            background: '#282828'
        })
        const outputsBackground = new Background({
            selector: '.content',
            background: '#282828',
            color: 'white'
        })
        bodyBackground.setActive(true)
    }else {
        
        const bodyBackground = new Background({
            selector: 'body',
            background: 'white'
        })
        const tabsBackground = new Background({
            selector: '.tabs',
            background: '#6200ee'
        })
        const switchBackground = new Background({
            selector: '.toggle',
            background: '#3700b3'
        })
        const outputsBackground = new Background({
            selector: '.content',
            background: 'white',
            color: 'black'
        })
        bodyBackground.setActive(false)
    }
})


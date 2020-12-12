let tabsStyle = document.querySelectorAll('.tabs')
let switchStyle = document.querySelector('.switch-container')
let bodyStyle = document.querySelector('body')
let outputsStyle = document.querySelectorAll('.output__content')
let infoSwitch = document.querySelector('.switch__info')


class Switch {
    constructor(selector,onChange,state = false){
        this.element = document.querySelector(selector)      // 1-st parameter:  We are take switch-id
        this.onChange = onChange                        // 2-nd parameter:  We are take some-function
        this.element.checked = state
        this.setActive(state)

        this.element.addEventListener('change', () => {
            // this.state === true ? this.state = false : this.state = true
            this.onChange(this.element.checked)
        })
    }
    
    setActive(state){
       this.element.checked = state
       this.onChange(state)
    }
}


const themeSwitch = new Switch('#toggle', (state) => {
    state === true ? bodyStyle.style.background = 'black' : bodyStyle.style.background = 'white'
    state === true ? bodyStyle.style.color = 'white' : bodyStyle.style.color = 'black'
    state === true ? switchStyle.style.background = '#282828' : switchStyle.style.background = '#3700b3'

    tabsStyle.forEach(elem => state === true ? elem.style.background = '#121212' : elem.style.background = '#6200ee')
    outputsStyle.forEach(elem => state === true ? elem.style.background = '#121212' : elem.style.background = 'white' )
    state === true ? infoSwitch.innerHTML = 'ON' :  infoSwitch.innerHTML = 'OFF'
})






































// let toggleState = false;
// let toggle = document.querySelector('.toggle-state')

// class Switch{
//     constructor(selector) {
//         this.$el = [...document.querySelectorAll(selector)]
//     }
//     setActive(state){
//         toggleState = state
//     }
// }



// class Background extends Switch{
//     constructor(options) {
//         super(options.selector) 

//         this.$el.forEach(element => {
//             element.style.background = options.background
//             element.style.color = options.color
//         }); 
//     }
// }



// toggle.addEventListener ('click', () => {
    

//     if(toggleState === false) {
//         const bodyBackground = new Background({
//             selector: 'body',
//             background: '#121212'
//         })
        
//         const tabsBackground = new Background({
//             selector: '.tabs',
//             background: 'black'
//         })
//         const switchBackground = new Background({
//             selector: '.toggle',
//             background: '#282828'
//         })
//         const outputsBackground = new Background({
//             selector: '.content',
//             background: '#282828',
//             color: 'white'
//         })
//         bodyBackground.setActive(true)
//     }else {
        
//         const bodyBackground = new Background({
//             selector: 'body',
//             background: 'white'
//         })
//         const tabsBackground = new Background({
//             selector: '.tabs',
//             background: '#6200ee'
//         })
//         const switchBackground = new Background({
//             selector: '.toggle',
//             background: '#3700b3'
//         })
//         const outputsBackground = new Background({
//             selector: '.content',
//             background: 'white',
//             color: 'black'
//         })
//         bodyBackground.setActive(false)
//     }
// })






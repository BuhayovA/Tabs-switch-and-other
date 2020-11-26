let tabs = document.querySelector('.tabs')
let output = document.querySelector('.output')


let arr = ['Item One', 'Item Two', 'Item Three']


tabs.addEventListener('click', event => {
    arr.forEach((elem,index) => {
        if(event.target.id === index.toString()) output.innerHTML = elem
    })
})
 
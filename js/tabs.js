const tabNav = document.querySelectorAll('.tab-nav-item')
const tabContent = document.querySelectorAll('.tab-content-item')
let tabName = 

tabNav.forEach(item=>{
    item.addEventListener('click', selectTabNav)
})

function selectTabNav() {
    tabNav.forEach(item=>{
        item.classList.remove('is-active')
    })
    
    this.classList.add('is-active')
    tabName = this.getAttribute('data-tab-name')
    
    selectTabContent(tabName)
}

function selectTabContent(tabName) {
    tabContent.forEach(item=>{
        if(item.classList.contains(tabName)){
            item.classList.add('is-active')
        }else{
            item.classList.remove('is-active')
        }
    })
}





















// tabNav.forEach(item=>{
//     item.addEventListener('click', selectTabNav)
// })

// function selectTabNav() {
//     tabNav.forEach(item=>{
//         item.classList.remove('is-active')
//     })
//     this.classList.add('is-active')
//     tabName= this.getAttribute('data-tab-name')
    
//     selectTabContent(tabName)
// }

// function selectTabContent(tabName) {
//     tabContent.forEach(item=>{
//         if(item.classList.contains(tabName)){
//             item.classList.add('is-active')
//         }else{
//             item.classList.remove('is-active')
//         }
//     })
// }
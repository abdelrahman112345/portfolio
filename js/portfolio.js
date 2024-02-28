let tabLinks = document.querySelectorAll('.tab-links')
let tabContents = document.querySelectorAll('.tab-contents') 
console.log(tabLinks)
console.log(tabContents)
// function openTab (tabName) {
//     tabLinksArray.forEach((tabLink) => {
//         tabLink.classList.remove('active-link')
//     });
//     tabContentsArray.forEach((tabContent) => {
//         tabContent.classList.remove('active-content')
//     })
//     event.currentTarget.classList.add('active-link')
//     document.getElementById(tabName).classList.add('active-tab')
    
// } 
function setupTabs () {
    tabLinks.forEach(tab => {
        tab.addEventListener('click', () => {
            let sideBar = tab.parentElement;
            let tabContainer = sideBar.parentElement;
            let tabNumber = tab.dataset.forTab;
            console.log(tabContainer)
            console.log(tabNumber)
            let tabToActive = tabContainer.querySelector(`.tab-contents[data-tab="${tabNumber}"]`)
            sideBar.querySelectorAll(".tab-links").forEach(link => {
                link.classList.remove('active-link')
            })
            tabContainer.querySelectorAll(".tab-contents").forEach(content => {
                content.classList.remove('active-link')
            })
        })
    })
}
document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
})
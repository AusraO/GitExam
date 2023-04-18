const tab=document.querySelector('.tab')
const openTab=document.querySelector('#intro');
const closeTab=document.querySelector('.closeButton')

openTab.addEventListener('click', ()=> {
    tab.showModal();
})

closeTab.addEventListener('click', ()=> {
    tab.close();
})
const tab=document.querySelector('.tab')
const openTab=document.querySelector('#intro');
const closeTab=document.querySelector('.closeButton')


const header=document.querySelector('.tabHeader');
const headerEl=document.createElement('h1');
const headerText=document.createTextNode('INTRO')
headerEl.setAttribute('class', 'header')
headerEl.appendChild(headerText)
header.appendChild(headerEl)



const videoBox=document.querySelector('.tabPicture')
const video=document.createElement('video');
video.setAttribute('src', 'resources/tab-1.mp4')
video.setAttribute('type', 'video/mp4')
video.setAttribute('class', 'video')
videoBox.appendChild(video);



openTab.addEventListener('click', ()=> {
    tab.showModal();
})

closeTab.addEventListener('click', ()=> {
    tab.close();
})
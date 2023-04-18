const tab3=document.querySelector('.tab3')
const openTab3=document.querySelector('#about');
const closeTab3=document.querySelector('.closeButton3')


const header3=document.querySelector('.tabHeader3');
const headerEl3=document.createElement('h1');
const headerText3=document.createTextNode('ABOUT')
headerEl3.setAttribute('class', 'header')
headerEl3.appendChild(headerText3)
header3.appendChild(headerEl3)



const picBox3=document.querySelector('.tabPicture3')
const pic3=document.createElement('img');
pic3.setAttribute('src', 'resources/tab-3.jpg')
pic3.setAttribute('alt', 'guy')
pic3.setAttribute('class', 'picture')
picBox3.appendChild(pic3);



openTab3.addEventListener('click', ()=> {
    tab3.showModal();
})

closeTab3.addEventListener('click', ()=> {
    tab3.close();
})
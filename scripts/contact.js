const tab4=document.querySelector('.tab4')
const openTab4=document.querySelector('#contact');
const closeTab4=document.querySelector('.closeButton4')


const header4=document.querySelector('.tabHeader4');
const headerEl4=document.createElement('h1');
const headerText4=document.createTextNode('CONTACT')
headerEl4.setAttribute('class', 'header')
headerEl4.appendChild(headerText4)
header4.appendChild(headerEl4)



const picBox4=document.querySelector('.tabPicture4')
const pic4=document.createElement('img');
pic4.setAttribute('src', 'resources/tab-4.jpg')
pic4.setAttribute('alt', 'guy')
pic4.setAttribute('class', 'picture')
picBox4.appendChild(pic4);



openTab4.addEventListener('click', ()=> {
    tab4.showModal();
})

closeTab4.addEventListener('click', ()=> {
    tab4.close();
})
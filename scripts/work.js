const tab2=document.querySelector('.tab2')
const openTab2=document.querySelector('#work');
const closeTab2=document.querySelector('.closeButton2')


const header2=document.querySelector('.tabHeader2');
const headerEl2=document.createElement('h1');
const headerText2=document.createTextNode('WORK')
headerEl2.setAttribute('class', 'header')
headerEl2.appendChild(headerText2)
header2.appendChild(headerEl2)



const picBox2=document.querySelector('.tabPicture2')
const pic2=document.createElement('img');
pic2.setAttribute('src', 'resources/tab-2.jpg')
pic2.setAttribute('alt', 'guy')
pic2.setAttribute('class', 'picture')
picBox2.appendChild(pic2);



openTab2.addEventListener('click', ()=> {
    tab2.showModal();
})

closeTab2.addEventListener('click', ()=> {
    tab2.close();
})
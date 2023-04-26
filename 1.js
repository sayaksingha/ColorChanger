let btn=document.querySelector('.main-body button');
let body=document.body;
function colorGen(){
    // let green=Math.floor(Math.random()*255);
    // let blue=Math.floor(Math.random()*255);
    // // let red=Math.floor(Math.random()*255);

    return `rgb(${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
}

btn.addEventListener('click',()=>{
    let color=colorGen();
    body.style.backgroundColor=color;
    let name=document.querySelector('.details-of-body span');
    name.textContent=color;
})
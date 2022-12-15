let image = document.querySelector('.main-cont');
let Main = document.querySelector('.mainIn');
let text = document.querySelector('.inid');
const main2 = document.querySelector('.main')

Main.addEventListener('mouseover', (e)=>{
    Main.classList.add('blom')
    text.innerHTML.Style.color == 'seagreen';
});
Main.addEventListener('mouseout',(e)=>{
    Main.classList.remove('blom')
})



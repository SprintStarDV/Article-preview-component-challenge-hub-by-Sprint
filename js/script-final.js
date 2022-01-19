console.log("control log !");

let svgBor = document.getElementsByClassName('svgBorder')[0];
let svgHov = document.getElementsByTagName('svg')[0];
let media = document.getElementsByClassName('content')[0];
let footSH = document.getElementsByClassName('foot-sh')[0];
let shareDiv = document.getElementsByClassName('share-nav')[0];

svgBor.addEventListener('click', () => {
    
    getComputedStyle(shareDiv, null).getPropertyValue("display") === 'none' ? shareDiv.style.display = 'inherit'  : shareDiv.style.display = 'none';
    console.log('you clicked');

});

footSH.addEventListener('click', () => {
    shareDiv.style.display = 'none';
});
let price = document.getElementById('price');
let ads = document.getElementById('ads');
let texs = document.getElementById('texs');
let disc = document.getElementById('disc');
let total = document.getElementById('total');


// get total


function getotal()
{
     if(price.value !=''){
         let resalt = (+price.value + +ads.value + +texs.value) - +disc.value
         total.innerHTML = resalt
     }
}
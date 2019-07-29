console.log('i love you');

$(document).ready(handleReady);

let colors = [
    {name: 'green',
    secret: 'garden'},
    {name: 'red',
    secret: 'rose',},
    {name: 'yellow',
    secret: 'school bus'},
    {name: 'blue',
     secret: 'sky'}
];



function handleReady() {
    console.log('jquery is a thing');
$('#colorTarget').on('click', '.colorItem', listAlerter);
renderColors();
}    

function renderColors(){
   for (let color of colors) {
       let thisColor = color;
       let listItem = $(`<li data-taco="yes" class = 'colorItem'>${thisColor.name}</li>`);
        //.data()setter
        //attaches the whole object to the li
       listItem.data('secret', color);
    //the thing you are setting.what you are putting there
       $('#colorTarget').append(listItem);
   }
    }

function listAlerter(){
    //text getter
    let textToShow = $(this).text();
    
    // data getter
    let tacoToShow = $(this).data('taco');
    //show us the setter
    let color = $(this).data('secret');

    console.log(tacoToShow);
    
 alert(`you have clicked on ${textToShow} its value is ${color.secret}`) 
}
   



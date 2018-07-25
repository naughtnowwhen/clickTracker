"use strict";



var imgs = [
    'bag.jpg',	
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.jpg',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.jpg',
    'water-can.jpg',
    'wine-glass.jpg'];

var productStorage = [];

var bucketDiv = document.getElementById('imgDisplay');
var left   = document.getElementById('picLeft');
var center = document.getElementById('picCenter');
var right  = document.getElementById('picRight');
var test = document.getElementById('testing');
console.log(test);


var displayThreeToScreen = []; 

var whattype = typeof(imgs[0]);
console.log(whattype);

// patricia explained why this is considered bad practice. It's called a naked for loop, which means it's out of control and running all the time, when we only want it to run when we call it. 
    function ImageObject (img) {
        this.name = img.split('.')[0];
        this.path = 'imgs/' + img;
        this.totalClicks = 0;
        this.timesDisplayed = 0;
        productStorage.push(this);
    }    
    // oh no, i think i may be mistakenly pushing only the name of the object into the array instead of the whole object. 
   function constructorLoop() {
    for (var i = 0; i < imgs.length; i++) {
    new ImageObject(imgs[i]);   
    }
}

constructorLoop();



function looper (){
for (var i = 0; i <3; i++){
    var randomSelectionFromProductStorage = productStorage[Math.floor(Math.random() * productStorage.length)];
    displayThreeToScreen.push(randomSelectionFromProductStorage);
    }
console.log(displayThreeToScreen.length);    
console.log(displayThreeToScreen[0].name);
}

// left.src = displayThreeToScreen[0].path;
// console.log(left.src   = displayThreeToScreen[0].path);


// center.src = displayThreeToScreen[1].path;
// console.log(center.src = displayThreeToScreen[1].path);

// right.src  = displayThreeToScreen[2].path;

// moved looper from the outside of eavesdropper function to see more about what eavesdropper is doing. 
looper();


function eavesdropper (event) {
console.log(event.type);
// looper();
}


bucketDiv.addEventListener('click', eavesdropper);






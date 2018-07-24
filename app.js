"use strict";



var imgs = [
    'imgs/bag.jpg',	
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
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'];

var productStorage = [];

var test = document.getElementById('test')
var left   = document.getElementById('picLeft');
var center = document.getElementById('picCenter');
var right  = document.getElementById('picRight');

var displayThreeToScreen = []; 

var whattype = typeof(imgs[0]);
console.log(whattype);

// ok yeah, those are just strings



for (var i = 0; i < imgs.length; i++) {
    function ImageObject (img) {
        this.name = img.split('.')[0];
        this.path = 'imgs/' + img;
        this.totalClicks = 0;
        this.timesDisplayed = 0;
        productStorage.push(this);
    }    
    // oh no, i think i may be mistakenly pushing only the name of the object into the array instead of the whole object. 
   new ImageObject(imgs[i]);   
     
}
// sweet! thanks for the tip StackOverflow


// sweet, everytime i type a new random value is generated. That's neat and something that'd i'd never notice without Quokka. Quokka is awesome! 

//Ok so how to code this as DRYly as possible? It'd be nice to have one instance of assignment, i want to assign three times. So i'm wary of using var, maybe it'd work just fine. But let comes to mind as something more willing to be redefined as we iterate through the 3 length for loop. But also a var could work by first declaring it to undefined first, then assigning next, pushing, then on the next loop it'll be reset back to undefined and ready to go for a new assignment. Try a couple of methods? haha, I probably didn't need to think about any of this, huh? it'll just work with a stock var declaration?


//oh! be careful your pushing strings from imgs!
// for (var i = 0; i <3; i++){
// var randomSelectionFromProductStorage = imgs[Math.floor(Math.random() * imgs.length)];
// displayThreeToScreen.push(randomSelectionFromProductStorage);
// }
// console.log(displayThreeToScreen);

// ok good it's randomly picking three objects from productStorage
console.log(productStorage.length);  
for (var i = 0; i <3; i++){
    var randomSelectionFromProductStorage = productStorage[Math.floor(Math.random() * productStorage.length)];
    displayThreeToScreen.push(randomSelectionFromProductStorage);
    }
console.log(displayThreeToScreen.length);
console.log(displayThreeToScreen)

//ok that contains the path to the image, I want to link it up with the img.src
// console.log(displayThreeToScreen[0].path);
left.src   = displayThreeToScreen[0].path;
center.src = displayThreeToScreen[1].path;
right.src  = displayThreeToScreen[2].path;




  

// this works, now lets get it to loop three times and push to an array for display. copy paste and keep this for reference. 
var randomSelection = imgs[Math.floor(Math.random() * imgs.length)];

console.log(randomSelection);



// console.log(productStorage[0]);














// these belong in the ImageObject later when it works
        // this.path = img.split('.');

// this.totalclicks = totalclicks;
        // this.timesDisplayed = timesDisplayed;


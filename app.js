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
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'];

var productStorage = [];

var displayThreeToScreen = []; 

var whattype = typeof(imgs[0]);
console.log(whattype);

// ok yeah, those are just strings



for (var i = 0; i < imgs.length; i++) {
    function ImageObject (img) {
        this.name = img.split('.')[0];
        this.path = img;
        this.totalClicks = 0;
        this.timesDisplayed = 0;
    }    

    


    // oh no, i think i may be mistakenly pushing only the name of the object into the array instead of the whole object. 
    productStorage.push(new ImageObject(imgs[i]));        
}
console.log(productStorage[0]);
console.log('the contents of product storage',productStorage);
console.log(productStorage[0].name);




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
console.log(displayThreeToScreen[0])


//okay, make sure to swap this back to img, i'm changing it to li to test
//yeah, i tried to append child to a class, that doesn't work, try with an id. 
var bullseye = document.getElementById("imgTarget");
var newLi = document.createElement("li");
var liText = document.createTextNode('hello is this working?');
newLi.appendChild(liText);
console.log(newLi);
//it's appending text to the li but every time I try to append to <ul id="imgTarget"> i get a can't appendchild null error



var threeImgFromJsToHtml = document.getElementById("imgDisplay"); // dont wory about this red, it's quokka


         

  

// this works, now lets get it to loop three times and push to an array for display. copy paste and keep this for reference. 
var randomSelection = imgs[Math.floor(Math.random() * imgs.length)];

console.log(randomSelection);



// console.log(productStorage[0]);














// these belong in the ImageObject later when it works
        // this.path = img.split('.');

// this.totalclicks = totalclicks;
        // this.timesDisplayed = timesDisplayed;


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

var ProductStorage = [];


for (var i = 0; i < imgs.length; i++) {
    function ImageObject (img) {
        this.name = img.split('.');
        this.path = img;
        this.totalClicks = 0;
        this.timesDisplayed = 0;
    }    

    ProductStorage.push(new ImageObject(imgs[i]));         
    console.log(ProductStorage[i]);
}
















// these belong in the ImageObject later when it works
        // this.path = img.split('.');

// this.totalclicks = totalclicks;
        // this.timesDisplayed = timesDisplayed;


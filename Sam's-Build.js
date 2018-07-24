// Sam's build
//prethinking the problem
// heading
// instructinos
// and three boxes side by side
//after 25 clicks the view adds on the results below but with events turned off. 
//He recommends having paper right by, a little white board. 
// first up... constructor to build our objects....name, path, views, clicks... Sam likes to sorround all three img blocks with a container and then sets the event listener on the the container.



var productNames = [
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

    var allProducts = [];
    var left = document.getElementById('left');
    var center = document.getElementById('center');
    var right =  document.getElementById('right');

    function product(name, path) {
        this.name = name;
        this.path = path;
        this.views = 0;
        this.clicks = 0;
        allProducts.push(this);
    }

    new product('bag','img/bag.jpg');

    //do a for loop, create the instances for all 20
    //template literals and string literals
    //concatenating strings can be a pain in the ass. There's a better way. The better way is template/string literals, it makes concatenation easier.

    // and here it is using that method
    function product(name) {
        this.name = name;
        this.path = 'img/' + name + '.jpg';
        // a better way `img/${name}.jpeg.`
        // this is the easier way to concatenate ^^^ That's a template literal, anytime you want to bring in a variable first $ then the var goes in {}
        this.views = 0;
        this.clicks = 0;
        allProducts.push(this);
    }

    //sam makes the decision to convert all the imgs to jpegs first so that the previous example works. you can use preview to do this. 
    // template literals are the first ES6 convention we use. 
    // the reason they've kept ES6 out of 201 is problems with browser compatibility. Lots of moving parts different codes, different browsers, etc...
    // sam is the third instructor to bring up caniuse ... mus tbe important


// in css he setes border, margin, width for the img container

for (var i = 0; i < productNames.length; i++) {
    new productNames(productNames[i]);
}

// little bitty functions that do little bitty tasks..

function rando(){
    return Math.floor(Math.random * allProducts.length);
}
// that'll return just one random instance, and we need three.
// do one little thing and test, do one little thing and test, do one little thing and test. 
// he's not even worried at this point about duplicates, worry about that later.

function threeRandomImages() {
// for each empty <img tags, assign a random source attribute
// first I need to getelementbyid


}
    
    
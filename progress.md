added all imgs into an array and displayed them to browser.

made a product storage array for all my product objects to go into after constructed.

made a for loop that iterates through my imgs array with a Constructor inside that constructs new img objects. I had myself a bug where i couldn't push the new constructions into the array. The solution was scope, and Sarah found it easily after I tinkered for a while. She moved the push call from the constructor's scope outside to the for loop's scope and that fixed it. Can't declare and call in one block! Saved the solution in problems and solutions (onenote) and problemsAndSolutions in vscode. 

constructor constructs for name, path, totalClicks, and TimesDisplayed


In the following code I wasn't including the [0] after img.split('.'); but realized that it's splitting name and file type and making a new length two array to contain the splits, [0] specifies just the name and trims the file type. 
for (var i = 0; i < imgs.length; i++) {
    function ImageObject (img) {
        this.name = img.split('.')[0];

selecting a random three and pushing it to my display 3 array.

following example from Sam was better, just assigned three vars to capture the img elements, left, center, right, and then set their sources to equal the path in my random array of three. so that pushes random images to the screen. Now it's time to add event handling I think. 
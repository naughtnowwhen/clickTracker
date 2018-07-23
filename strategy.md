get the pics in an array.

// *** get the first random image to display. 2nd get three to display at once. 3rd tracking favorites.








 create an empty array for the constructed product objects.

make a constructor that will handle the info we want to track for each object...

it'll contain name, path, totalclicks, how many times it has been displayed. We also want to track the percentage an item was displayed vs. how when it was chosen as favorite. I think we can handle the percentage problem by just recording how many times it was displayed before chosen. 

then push newly constructed objects into the products array. 

then randomly select three objects from the finished array to be displayed to the screen. How to do this? moving them to an empty array called something like displayArray sounds good so that there's a hard separation between our storage array and the display array. The display array will always display the three items inside it. The storage just holds them in preparation for the display array. 

//we want 3 random numbers and to associate those random integers with storage array indexes.

//just one random picker that cycles through the entire storage array rather than the above comment that associates 3 ints with the storage array. 



//Patricia said it's better to have one random picker and just call it 3 times. 


Create a favorite array and push user selections into that array. 

But we want to empty the display array after each round, should we just push the unchosen two products back into the storage array? Or create an unchosen array? with an unchosen array we can ensure that that all products are freshly seen by the user until the products array is below 3 products remaining, then can switch to the recylced array.

When they've chosen all but the last products we don't want to force them to pick a favorite if they've seen them before and just don't like any of them. So creating a dislike array would help them not see products they don't like. 

At the end of the choosing, we want to display to the user their favorite products. A single favorite array will be fine for recording the total fave votes since the total amount of clicks will be recorded inside each product's object. So the trick will be ordering the objects clicks from high to low.

Then add styling with CSS. 
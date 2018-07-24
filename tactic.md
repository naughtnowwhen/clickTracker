get the pics in an array.

// *** get the first random image to display. 2nd get three to display at once. 3rd tracking favorites.


create an array containing all my imgs.


    make a constructor that will handle the info we want to track for each object...

    it'll contain name, path, totalclicks, how many times it has been displayed. We also want to track the percentage an item was displayed vs. how when it was chosen as favorite. I think we can handle the percentage problem by just recording how many times it was displayed before chosen. 





 then randomly select three objects from the finished array to be displayed to the screen. How to do this? moving them to an empty array called something like displayArray sounds good so that there's a hard separation between our storage array and the display array. The display array will always display the three items inside it. The storage just holds them in preparation for the display array. 
    
    create random generator that will select three things. so I could create a random generator that selects one value at once, pass it my whole productStorage array and call it three times. But I found a solution on stack overflow that looks useful and simpler. 

    then when I have three random indexes selected, how to display them? from an object? an array? Could I just wrap my random generator inside a html functionality that will display them to the screen? Other ideas? is there an idea that seems best? 
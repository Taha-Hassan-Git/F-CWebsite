# F-CWebsite
A website to apply to the Founders and Coders apprenticeship. [Deployed here](https://taha-hassan-git.github.io/F-CWebsite/)

## Summary

There's a parallax scroll effect at the top of the page that tracks the y position of the scrollbar and animates elements to 
move and change in opacity over time. Most elements ont he page are set to hidden using a css class, which is then set to shown by the intersection observer 
function. The function is called via a for loop for every element with the class of hidden and when more than 50% of it has intersected with the user's
screen, it is given the class of shown, setting its opacity back to one. There are also some fixed images that provide further parallax scroll effects.

## Credits

I got the idea for the parallax effect from [this video](https://www.youtube.com/watch?v=TawH-AqHTXc). And the idea for the intersection observer animation from [this video](https://youtu.be/T33NN_pPeNI).

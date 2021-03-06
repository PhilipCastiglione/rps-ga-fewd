[Here it is!](http://philipcastiglione.github.io/rps-ga-fewd/)

# Fancy JavaScript stuff!
So there are some fancy things I am doing in JS that you might not have seen before. I'd recommend you check out the original solution code first as it will be more straightforward. I'm trying to show you a few new techniques with my solution so I'll try and break down what I'm doing so it makes sense.
### Code
Inside `function playGame() {` the first thing I want to do is get input from the user. I do this on line 3. `var userInput = event.target.dataset.input;` The way my html is set up, I have 3 images, one for each option. In the html, you'll notice that I'm using the property data-input with the value I want the user input to equal: `<img class="userInput" src="images/rock.jpg" data-input="rock" alt="rock">`. So on line 3 in my javascript, I look for the event (which will be the click event that activates this function), then the target of the event (which will be the `<img>` that got clicked on), then the dataset (the data- part) called input. In the case of the html line I provided as an example, that will end up returning the value "rock", which I then assign to the variable `userInput`.

On line 5 I find the html element with the class `userResult` (which is an image) and change its source to the name of the image file I want using the string value I just stored in `userInput`. This should be pretty familiar by now.

Line 8 to 17 is where I generate a random number and use that to figure out the bot's input, which I assign to the variable `botInput`. The way I'm doing that is a little fancy. I'm creating an anonymous function (after the equals sign for assignment to the variable on line 8) and inside the anonymous function I generate a random number between 0 and up to 1, which I use an if statement to look at the size of and then in each case I `return` out of the function a string 'rock', 'paper', or 'scissors'. Then when I finish defining the anonymous function on line 17, I put parentheses `()` after it, which makes it run straight away. The result of all this is the function runs immediately, generates a random number, and returns out a string which gets assigned to the variable!

On line 19 I update the bot's image in the dom to reflect the input that was just generated.

From lines 22 to 32 I am using that fancy technique again of using an immediately executed anonymous function to return out some calculated value to store inside a variable, this time called `winner`. The function just uses an if statement, first, to see if the `userInput` and the `botInput` are the same. If so, we have a `'draw'`. Otherwise, I look at the three possibilities for `userInput` and then for each one, I use a [ternary](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) and some tricky logic to evaluate the last remaining possibility (since a draw is taken care of) to return out the appropriate string to the `winner` variable.

So now we have the `winner`, all we have to do is update the page! First I find the html elements with the `userScore`, `botScore` and `gameResult` classes and store them in variables (using the convention of naming jquery html objects using a `$` sign).

I then use a switch statement to check the `winner` case and update the page with the game result header and the scores. To update the scores I pull the current text value of the element, convert the string to a number using the + technique ie. `(+'5' => 5)`, add the score change amount and then set the text of the element to the result.

Fancy!
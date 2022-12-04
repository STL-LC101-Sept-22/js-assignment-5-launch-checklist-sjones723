# Launch Checklist

## Assignment Requirements

For this "Launch Checklist Form" assignment, you will use a form submission and fetch request to accomplish the following:

1. Validate the user responses with `preventDefault()` to ensure the following: 

   a. The user has entered something for every field.
   b. The user has entered string values for names and number for fuel and cargo levels.

1. With validation, update a list of what is currently ready or not ready for the shuttle launch.
1. Use the DOM to update CSS to indicate what is good and bad about the shuttle and whether it is ready for launch.
1. Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed.

The submitted web page will look similar to the [demo app](http://launch-checklist-launchcodeeducation.s3-website-us-east-1.amazonaws.com/).

## How Your Assignment is Graded

### Grading Tests

You can run the tests locally or check out Github Classroom to see if your work passes the autograding tests. Remember in Github Classroom, if you have passed all the tests, you get a green checkmark and if one or more of the tests fails, then you get a red "x". 

*Note*: Running `npm test` locally will result in one `grading-dom` test failing. This has to do with the asynchronous nature of fetch and should pass in the Github Classroom autograder.

A passing assignment will have an output of: `11 specs, 0 failures`.

If the output matches above, your submission meets the testing requirements! 

### Beyond the Tests

After reviewing the test output, your TA will check your submission for the following:

1. Is the top box populated with the planetary data from the fetch request?
1. On invalid form submission:

   a. Is the form data persistent? The page should not reload here.
   b. Does an alert appear if an empty or partially filled form is submitted? Is the alert message relevant?
   c. Does an alert appear if incorrect data is entered in any field? Names should be strings and fuel and cargo amounts should be numbers.

1. On valid form submission:

   a. Do the pilot and co-pilot values submitted appear as the names in the third box?
   b. Does the fuel value message reflect if the submitted value is too low (less than 10,000) or in the correct range?
   c. Does the cargo value message reflect if the submitted value is too high (more than 10,000) or in the correct range?
   d. Is the header message red and does it read 'Shuttle Not Ready for Launch' when either fuel or cargo are not in range?
   e. Is the header message green and does it read 'Shuttle is Ready for Launch' when both fuel and cargo are submitted in range?

1. You added JavaScript in ``script.js`` that is enclosed within a load event listener.
1. A submit event listener handles the form submission.
1. `event.preventDefault()` stops the default form submission behavior.
1. Form validation includes logic for incomplete and inappropriate field data types.
1. The list items in the third box use template literals to display submitted values.
1. Status message content and styling changes if the shuttle is ready for launch or not.
1. CSS updates are made via DOM methods. `styles.css` remains unchanged.
1. A fetch request hits the [planets API](https://handlers.education.launchcode.org/static/planets.json),
   an item from the response is selected and its values are displayed in the DOM using more template literals.
   In the assignment, you can select whichever planet they want. If you have attempted the bonus mission, then your code is randomly selecting an item from the planets API.

When you are done with the assignment, submit the link to your repository on Canvas.

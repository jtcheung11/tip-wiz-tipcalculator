# Tip Wiz

This project was created to make it easy to calculate your total bill at a restaurant.
You also can split the final bill if you would like.

## Technologies Used
Vanilla JavaScript, CSS, HTML, and Expression

## Set up
1. Create a close on your local and on the root director in your terminal:
npm i:
    - cors
    - express

2. From the terminal run "npx nodemon server/server.js"

3. Open live server from home.html.

4. Click 'calculate' in the navigation bar under the Tip Wiz title

## Features
### Feature 1: Total Bill
- Increase amount of bill by using up and down arrows in the 'Amount of bill' input or simply type total bill in the input.
- Use slider to adjust % of tip in the range of 0-100.
-Click calculate
- Results will display in 'Results'
    - Tip amount will correlate to the bill amount and the tip % selected.
    - Total with tip will add that amount to the input bill amount.

![Screen Shot 2022-01-25 at 2 37 23 PM](https://user-images.githubusercontent.com/94634177/151047346-d41e050e-d316-4920-b43b-1ad07dc3104a.png)


### Feature 2: Total Split per person
- To split the bill simply select a number you would like to split by from the dropdown 'select a number'.
- Click the split button
- Results will display next to 'Total per Person:'

![Screen Shot 2022-01-25 at 2 37 23 PM](https://user-images.githubusercontent.com/94634177/151047531-0224bd04-31a9-4655-ac0e-ac1da8d67e3d.png)

### Feature 3: Clearing a result or a split
- To clear a 'Tip Amount' & 'Total with Tip' click the 'Clear Result' button
    - Doing so will trigger an alert and the oldest calculated 'tip amount' and 'total with tip' will be cleared
- To clear a split 'total per Person:' click the 'Clear Split' button
    - Doing so will trigger an alert and the oldest calculated 'Total per Person' will be cleared.

![Screen Shot 2022-01-25 at 2 41 06 PM](https://user-images.githubusercontent.com/94634177/151047714-a8807e80-2575-433d-a671-b20709cc3837.png)

### Features 4: Contact form Submit
- Navigate to the 'contact' page from the nav bar
- Fill in the information and click submit
    - This is stored in the server/controller.js file

![Screen Shot 2022-01-25 at 2 41 56 PM](https://user-images.githubusercontent.com/94634177/151047835-28c2c127-7c55-44a0-9ec9-6305962c4716.png)

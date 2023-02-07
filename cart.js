///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce(
  (addUp, valueOfIndex) => addUp + valueOfIndex.price,
  0
);

//First Argument: Using one line arrow function w/Implicit return
//For parameters: Using addUp as the running counter and valueOfIndex as the actual value of the array/objects contents
//For return I am adding up the running total using 'add up' and adding it to the actual price key/value so it can accumulate
//In order to tap into the value of 'price' I used dot notation
//Second Argument: I added a 0 as the starting point of 'addUp'. I ran into issues and initially did NOT know this so I consulted MDN which provided an example of looping through objects with .reduce() method

//const summedPrice2 = cart.reduce(function (addUp, valueOfIndex) {
//  return addUp + valueOfIndex.price;
//}, 0);

// Above - I wanted to REALLY understand it so I write it as an anonymous declarative function as well

console.log(summedPrice);
// printing the answer 26.97 to console
//console.log(summedPrice2);
// printing the answer 26.97 to console

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
  const calcTaxAmount = cartTotal * tax;
  //First getting the value of the tax mount

  cartTotal += calcTaxAmount;
  //Setting carTotal equal to itself(what's passed in) PLUS the tax amount(calTaxAmount)

  return cartTotal - couponValue;
  //Subtracting couponValue from cartTotal
}

const totalAfterCoupon = calcFinalPrice(100, 50, 0.25);
//Capturing the value and satisfying the parameters by passing in data
//100 for out total
//Coupon worth 50 bucks
//Tax at 25%

console.log(totalAfterCoupon);
//Should print 75

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
   name: 
  // Why: Restaurant would usually greet customers by their name
  //String: Name which is text should be a string
  
  money: 
  //Why: We need to know how much the customer can afford to purchase
  //Number: Money is counter by numbers
  
  allergies: 
  //Why: Many people have allergies and cannot eat certain foods
  //Bool: This is a yes(true) or no(false) answer

  order: 
  //Why: Restaurant will need to know what user would like to order and if they have it in stock
  //Array: An array can hold more than one string, num and etc.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
  name: "Dwayne",
  // Why: Restaurant would usually greet customers by their name
  //String: Name which is text should be a string
  money: 100,
  //Why: We need to know how much the customer can afford to purchase
  //Number: Money is counter by numbers
  allergies: false,
  //Why: Many people have allergies and cannot eat certain foods
  //Bool: This is a yes(true) or no(false) answer
  order: ["pasta", "grilledChicken", "coke"],
  //Why: Restaurant will need to know what user would like to order and if they have ingredients needed to make it
  //Array: An array can hold more than one string, num and etc.
};

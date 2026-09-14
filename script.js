// This is a single line comment
/*
    This is a multi-line comment
    */

    // -- Variables -- named storage for data that gets wiped when the processes are  e.g 
    let name='John'; // can be reassigned
    const age = 30; // cannot be reassigned
    var old = 'deprecated';  // avoid

    // Data Types: string, number, boolean, null, undefined, symbol, object, array, Function 
    let isStudent = true;
    let score = 95.5;
    let colors = ['red', 'green', 'blue'];
    let person = {Firstname: John, Lastname: Doe};

    // Operators
    let sum=   10 + 5;
    let difference = 10 - 5;
    let product = 10 * 5;
    let quotient = 10 / 5;
    let remainder = 10 % 3;
    let exponent = 2 ** 3;

    // Comparison
    console.log(10 > 5); // true
    console.log(10 === 10); // true (strict equality)
    console.log(10 == 10); // false (loose equality)
    console.log(10 == 5); // true (loose inequality avoid)

    // Conditional (if, else) and loops (for, while)
    // if/else
        if(age >= 18){
            console.log('adult');
        }   else {
            console.log('minor');
        }
        // for loop
        let i= 0;
        while (i < 5){
            console.log(i);
            i++;

            // Functions and arrow functions
            // Functions declaration
            function greet(name){
                return `Hello, ${name}`;
            }   

        // Arrow function ( anonymous, often assigned)
        const greetArrow = (name) => {
            return `Hello, ${name}`;
        }   
        // If one statement, can omit braces and return implicity 
        const greetsArrowShort = (name) => `Hello, ${name}`;

        //DOM Manipulation - Selecting Elements, Changing Content and Styles
        // The Document Object Model (DOM) represents the HTML page as a tree of objects, Javascript can modify it.
        // Selecting Elements;
        //By ID
        const header = document.getElementById('heqader'); console.log(header);
        // By Class (returns HTML Collection)
        const paragraphs = document.getElementsByClassName('paragraph');
        const itels = document.getElementsByclassName('item");
            console.log(items);
            // By CSS Selector (First match)
            const firstItem = document.querySelector('.item');
            conssole.log(firstItem);
            // By CSS Selector (All matches)
            const allItems = document.querySelectorAll('.item');
            console.log(allItems);

            // Changing content and styles:
            // Change text content
            const heading = document.querySelector('h1');
            heading.textContent = 'New Title';

            // Change 
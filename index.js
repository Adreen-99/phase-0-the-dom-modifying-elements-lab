//Remove the <main> tag element
const main = document.getElementById('main');
main.remove();

//Create a new <h1> element and assign it to a variable
const newHeader = document.createElement('h1');

// 3. Set the id of the new <h1> to 'victory'
newHeader.id = 'victory';

// 4. Set the text content of the <h1>
newHeader.textContent = "ADREEN is the champion"; // Replace ADREEN with your name

// 5. Append the new <h1> to the body
document.body.append(newHeader);
/* Creating a div container */
let div = document.createElement('div');
div.setAttribute('class', 'container');

/* Creating a button that adds a square */
let btnAddSquare = document.createElement("Button");
btnAddSquare.appendChild(document.createTextNode("Add Square"));
btnAddSquare.setAttribute('onclick','addSquareFunc()');
div.appendChild(btnAddSquare);

/* Creating a square div container */
let squareContainer = document.createElement('div');
squareContainer.setAttribute('class', 'square-container');
div.appendChild(squareContainer);

/* Creating a function to add square */
let count = 1;
function addSquareFunc(){
    let addDiv = document.createElement('div');
    addDiv.setAttribute('class', 'black-square');
    addDiv.setAttribute('id', count);
    addDiv.setAttribute('onclick', 'randomColor(this)');
    // Adding the id on the center of the square while hovering
    let text = document.createElement('p');
    text.appendChild(document.createTextNode(count));
    text.setAttribute('style','color:white;padding-top: 25px;text-align:center;');
    text.style.visibility = 'hidden';
    addDiv.appendChild(text);
    addDiv.onmouseover = function() {
        text.style.visibility = 'visible'; // Shows ID
    }
    addDiv.onmouseout = function() {
        text.style.visibility = 'hidden'; // Hides ID
    }      
    // Deleting a square when double clicked
    addDiv.setAttribute('ondblclick', 'deleteSquare(this)');

    count++;
    squareContainer.appendChild(addDiv);
}

// Change the color of the square when clicked
const colors = ['red','green','blue','purple','darkblue','orange','gray'];

function randomColor(el){
    var num = Math.floor(Math.random() * colors.length);
    el.style.backgroundColor = colors[num];
}

// Deleting a square function
function deleteSquare(el){
    let parent = squareContainer;
    let child = el.id;
    console.log('Double clicked id: '+ child);
    //Is even
    if(child%2 ==0){
        let deleteAfter = parseInt(child) + 1;
        if(document.getElementById(String(deleteAfter))==null){
            alert("There is no ID number "+deleteAfter);
        } else {
            console.log('The deleted id is: '+ deleteAfter);
            parent.removeChild(document.getElementById(String(deleteAfter)));
        } 
    }
    //Is odd
    else {
        let deleteBefore = parseInt(child) - 1;
        if(document.getElementById(String(deleteBefore))==null){
            alert("There is no ID number "+deleteBefore);
        } else {
            console.log('The deleted id is: '+ deleteBefore);
        parent.removeChild(document.getElementById(String(deleteBefore)));
        }   
    }
}

/* Displaying the elemnts */
window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
});
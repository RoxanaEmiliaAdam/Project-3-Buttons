"use strict";

// create div elem 'container'

const bodyDiv = document.createElement("div");
bodyDiv.id = "container";
document.body.appendChild(bodyDiv);

// create button 1 element

const button1 = document.createElement("button");
button1.innerText = "Button 1";
button1.id = "1";
container.appendChild(button1);

// create button 2 element

const button2 = document.createElement("button");
button2.innerText = "Button 2";
button2.id = "2";
container.appendChild(button2);

// create button 3 element

const button3 = document.createElement("button");
button3.innerText = "Button 3";
button3.id = "3";
container.appendChild(button3);

// message
const message = document.createElement("p");
message.id = "message";
document.body.appendChild(message);

// add event to container and catch all buttons

container.addEventListener("click", (event) => {
  // generate random number
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(`Random number is ${randomNumber}`);

  // check the click happened on a button  and not to the div
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  // console.dir(event.target.id);

  const buttonID = Number(event.target.id);
  console.log(buttonID);

  message.innerHTML = randomNumber === buttonID ? "You won!" : "You lost!";
});

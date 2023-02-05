// Import stylesheets
import './style.css';

// Write Javascript code!

console.log("Hello Everyone!");

const syncWithCallBach = () => {
  for (let index = 0; index<10; index++){

    console.log("Looping:\t", index, "\t", new Date());

  }
}

syncWithCallBach();
console.log("All Done");


const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
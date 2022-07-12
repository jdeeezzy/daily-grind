// alert("It's Working!");


// One unique image, with appropriate and matching content in the alt tag.  
// A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
// A unique color that supports the image and paragraph of content

// pic - image src 
// alt - the alt tag for the image 
// desc - a description of the coffee 
// day - the day of the week for the coffee 
// color - color associated with the coffee 
// name - name of the coffee

// function / function property (coffee) is whats called, when thats called, 
// text in the brackets will return
function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> 
           ${coffee.day}'s daily coffee special is 
           <strong class="feature">${coffee.name}</strong>,
           ${coffee.desc}
           </p>
    
    `;

    return myReturn; 

}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//data on querystring, load from querystring
    myDay =  urlParams.get("day");
}

// converts to integer as its a string in a querystring
myDay =  parseInt(myDay);

switch(myDay){

    case 0: 
      today = "Sunday";
    break;

    case 2: 
      today = "Tuesday";
      coffee = {
        color: "black",
        name: "Cold Brew",
        pic: "images/cold-brew.jpg",
        alt: "Cold Brew Picture",
        day: "Tuesday",
        desc: `It's Tuesday, and it still may feel like Monday, come get a Cold Brew!`
     };
    break;

    case 3: 
      today = "Wednesday";
      coffee = {
            color: "pink",
            // property: "value"
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "Bubble Tea Picture",
            day: "Wednesday",
            desc: `Hump Day Bubble Tea! Come get your favorite boba here!`
            // back tics allow you to put whatever text you want without any faults
         };

    break;

    case 4: 
      today = "Thursday";
      coffee = {
            color: "tan",
            // property: "value"
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "Mocha Picture",
            day: "Thursday",
            desc: `The week is almost over! Come and enjoy a Mocha Choca Lata YA YA!`
         };

    break;

    default: 
      today = "Something went wrong!";
}

// let coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);

// below, this loads the coffee data to the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
console.log(coffee);
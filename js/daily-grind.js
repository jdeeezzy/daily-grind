// alert("It's Working!");

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

switch(myDay){

    case 0: 
      today = "Sunday";
    break;

    case 2: 
      today = "Tuesday";
    break;

    case 3: 
      today = "Wednesday";
    break;

    default: 
      today = "Something went wrong!";
}


// alert("this works!");
/*
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content

    Here are the items we need to change for each coffee:
    image - src of pic
    alt - alt tag of pic
    description - a paragraph of content about the coffee
    name - a namne of today's coffee
    color - a color representing the coffee


    We may also use the following, but not part of the coffee itself

    today - the current day of the week 
*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
    </p>`;

    myReturn += `<p><strong class="feature">Quote of the Day:</strong>${coffee.quote}</p>`;

    return myReturn;
}

let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//data available? show data from url
    myDay = urlParams.get("day");
}
// forces it to be an integer
myDay = parseInt(myDay); 
switch(myDay){
    
    case 0:
        today = "Sunday";
        coffee = {
            color: "brown",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            day: "Sunday",
            desc: `Caramel Latte is very yummy!`,
            quote: `"Just keep Swimming, Just keep Swimming, Swimming, Swimming." - Dory`
        };
    break;
    
    case 1:
        today = "Monday";
        coffee = {
            color: "blue",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of Cold Brew",
            day: "Monday",
            desc: `Cold Brew will wake you up!`,
            quote: `"Do what is right, not what is easy nor what is popular." —Roy T`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "green",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of Drip Coffee",
            day: "Tuesday",
            desc: `Drip coffee is a classic!`,
            quote:`"If theres a book that you want to read, but it hasnt been written yet, then you must write it." —Toni Morrison`
        };
    break;

    case 3:
        today = "Wednesday";

        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a Bubble Tea",
            day: "Wednesday",
            desc: `Bubble Tea days are fun!`,
            quote: `“Start where you are. Use what you have. Do what you can.” —Arthur Ashe`
        };
    break;

    case 4:
        today = "Thursday";

        coffee = {
            color: "brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Thursday",
            desc: `Mocha is very delicious`,
            quote: `“By changing nothing, nothing changes.” —Tony Robbins`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color: "yellow",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Friday",
            desc: `Frappaccinos are thirst-quenching!`,
            quote:`“Fear is forward. No one is afraid of yesterday.” —Renata Adler`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            color: "orange",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice Latte",
            day: "Saturday",
            desc: `Pumpkin Spice Latte's are great for fall weather!`,
            quote: `“For every minute you are angry, you lose sixty seconds of happiness.” —Ralph Waldo`
        };
    break;

    default:
        today = "Something went wrong!";
}
// coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);

// load coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee)
document.querySelector("html").style.backgroundColor = coffee.color;


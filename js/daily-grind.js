/*
    What we need to change:
    Day of week - day
    Coffee Name - name
    Coffee Pic - pic
    Alt tag - alt
    Coffee description - desc
    Color for Coffee - color

*/



let myDate = new Date ();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


if (urlParams.get('day')){ // use query string
myDay = urlParams.get('day')

}else{//use date object

    myDay = myDate.getDay ();
}
myDay = parseInt(myDay)



function coffeeTemplate(coffee){
    let myReturn = "" ;
myReturn += `
        <p>
        <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee">
        <strong id="coffee-higlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily special is <strong>${coffee.name}</strong>, ${coffee.desc}
     
        </p>
                `;
    return myReturn; 


}

switch (myDay){

   
    case 1:
        today = "Monday";
        
        coffee = {
            color: "pink", 
            name : "Bubble Tea",
            pic : "images/bubble-tea.jpg",
            alt : "A pic of Bubble Tea",
            day : "Monday",
            desc : `try our lovely Bubble Tea!`
        };
    break;
    case 2:
        today = "Tuesday";
        
        coffee = {
            color: "yellow", 
            name : "Cafe Latte",
            pic : "images/caramel-latte.jpg",
            alt : "A pic of Bubble Tea",
            day : "Tuesday",
            desc : `No one says no for the Latte!`
        };
    break;
    case 3:
        today = "Wednesday";
        
        coffee = {
            color: "blue", 
            name : "Drip",
            pic : "images/drip.jpg",
            alt : "A pic for drip coffee",
            day : "Wednesday",
            desc : `Some days you just need the drip!`
        };
    break;
    case 4:
        today = "Thursday";
        
        coffee = {
            color: "Green", 
            name : "Pumpkin spice latte",
            pic : "images/pumpkin-spice-latte.jpg",
            alt : "A pic of Bubble Tea",
            day : "Thursday",
            desc : `Pumpkin spice latte free today!`
        };
    break;
    case 5:
        today = "Friday";
        
        coffee = {
            color: "black", 
            name : " flat white ",
            pic : "images/Flat_white.jpg",
            alt : "A pic of Bubble Tea",
            day : "Friday",
            desc : `Nothing better than our Flat White !`
        };
    break;  
    
    case 6:
    today = "Saturday";
    
    coffee = {
        color: "Orange", 
        name : "Caramel Frappucino",
        pic : "images/frappaccino.jpg",
        alt : "A pic of Bubble Tea",
        day : "Saturday",
        desc : `I love IT !`
    };
break;


case 0:
        today = "Sunday";
        
        coffee = {
            color: "Green", 
            name : "Green Tea",
            pic : "images/Green.jpg",
            alt : "A pic for drip coffee",
            day : "Sunday",
            desc : `Green Tea is a healthy beverage!`
        };
    break;



}




console.log(coffee);


document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById ("coffee-highlight").style.color = coffee.color
 //alert("Hi, it's " + today)

let coffeeCounterInput= document.getElementById("coffeeCounter");
let teaCounterInput = document.getElementById("teaCounter");
let fdCounterInput= document.getElementById("fdCounter");

let yogurtCounterInput = document.getElementById("yogurtCounter");
let pancakeCounterInput = document.getElementById("pancakeCounter");
let waffleCounterInput = document.getElementById("waffleCounter");

let burgerCounterInput = document.getElementById("burgerCounter");
let chickenCounterInput = document.getElementById("chickenCounter");
let saladCounterInput = document.getElementById("saladCounter");

let subTotalText = document.getElementById("subTotal");
let taxText = document.getElementById("taxCost");
let totalCostText = document.getElementById("totalCost");



//Port total field using same method as above
let coffeeCostTotal = document.getElementById("coffeeTotal");
let teaCostTotal = document.getElementById("teaTotal");
let fdCostTotal = document.getElementById("fdTotal");

let yogurtCostTotal = document.getElementById("yogurtTotal");
let pancakeCostTotal = document.getElementById("pancakeTotal");
let waffleCostTotal = document.getElementById("waffleTotal");

let burgerCostTotal = document.getElementById("burgerTotal");
let chickenCostTotal = document.getElementById("chickenTotal");
let saladCostTotal = document.getElementById("saladTotal");


//Arrays for more efficient calculations
const menuItems = [
    {
        name:"coffee",
        "counter-input":coffeeCounterInput,
        "total":coffeeCostTotal,
        "price":5.00
    },
    {
        name:"tea",
        "counter-input":teaCounterInput,
        "total":teaCostTotal,
        "price":4.00
    },
    {
        name:"fd",
        "counter-input":fdCounterInput,
        "total":fdCostTotal,
        "price":4.00
    },
    {
        name:"burger",
        "counter-input":burgerCounterInput,
        "total": burgerCostTotal,
        "price":8.00
    },
    {
        name:"chicken",
        "counter-input":chickenCounterInput,
        "total": chickenCostTotal,
        "price": 7.00
    },
    {
        name:"salad",
        "counter-input":saladCounterInput,
        "total": saladCostTotal,
        "price": 6.00
    },
    
]
const breakfastItems = [
    {
        name:"yogurt",
        "counter-input":yogurtCounterInput,
        "total":yogurtCostTotal,
        "price":4.00
    },
    {
        name:"pancake",
        "counter-input":pancakeCounterInput,
        "total":pancakeCostTotal,
        "price":8.00
    },
    {
        name:"waffle",
        "counter-input":waffleCounterInput,
        "total":waffleCostTotal,
        "price":7.00
    },
]


//Call totalCost to start a reaction for total item cost, subtotal, and tax.
coffeeCounterInput.addEventListener("keyup",totalCostCalculate);
teaCounterInput.addEventListener("keyup",totalCostCalculate);
fdCounterInput.addEventListener("keyup",totalCostCalculate);

yogurtCounterInput.addEventListener("keyup",totalCostCalculate);
pancakeCounterInput.addEventListener("keyup",totalCostCalculate);
waffleCounterInput.addEventListener("keyup",totalCostCalculate);

burgerCounterInput.addEventListener("keyup",totalCostCalculate);
chickenCounterInput.addEventListener("keyup",totalCostCalculate);
saladCounterInput.addEventListener("keyup",totalCostCalculate);



//Functions for calculating total item cost

function calculateMenuCost(menu){
    if (menuItems[menu]["counter-input"].value<0){ 
        alert("You cannot have negative items.");
        menuItems[menu]["counter-input"].value=0;
    }
    const menuCost = menuItems[menu]["counter-input"].value*menuItems[menu]["price"];
    menuItems[menu]["total"].innerText = menuCost.toFixed(2);
    return menuCost;
}

function calculatebreakfastCost(menu){
    if (breakfastItems[menu]["counter-input"].value<0){
        alert("You cannot have negative items!");
        breakfastItems[menu]["counter-input"].value=0;
    } else if (breakfastItems[menu]["counter-input"].value>5){
        alert("You cannot order more than 5 units per item.");
        breakfastItems[menu]["counter-input"].value=5;
    }
    const breakfastCost = breakfastItems[menu]["counter-input"].value*breakfastItems[menu]["price"];
    breakfastItems[menu]["total"].innerText = breakfastCost.toFixed(2);
    return breakfastCost;
}
//Calculate subtotal, sales tax, and total cost.

function subTotalCalculate(){
    let subTotal = 0;
    //Iterate through menu items to calculate subtotal
    for (menu = 0;menu<menuItems.length;menu++){
        subTotal+=calculateMenuCost(menu);
    }
    //Iterate through import items to calculate subtotal
    for (impor = 0;impor<breakfastItems.length;impor++){
        subTotal+=calculatebreakfastCost(impor);
    }
    subTotalText.innerText=subTotal.toFixed(2);
    return subTotal;
}

function taxCalculate(){
    const taxRate = 0.05
    const taxCost = subTotalCalculate()*taxRate;
    taxText.innerText=taxCost.toFixed(2);
    return taxCost;
}

function totalCostCalculate(){
    const totalCost = taxCalculate()+subTotalCalculate();
    totalCostText.innerText=totalCost.toFixed(2);
}

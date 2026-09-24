// to bring milk from the shop

function getMilk(money,costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("Buy " + bottlesCalc(money, costPerBottle) + " bottles of Milk");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return changeCalc(money, costPerBottle);
}

function bottlesCalc(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}
function changeCalc(startingMoney, costPerBottle){
    var remChange = startingMoney % costPerBottle;
    return remChange;
}

var finalChange = getMilk(10,1.5);
console.log("The remaining change is " + finalChange);
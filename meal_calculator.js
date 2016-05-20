/*
 Create diner objects which represent a single diner.
 Add dishes to a diner's meal
 Total up the cost of all of the diners' meals
 Add a fixed tax percentage to the total bill
 Add a percentage tip to the total bill
 Split the bill fairly among the diners
 Each diner should pay the tax on their own food
 Each diner should pay an equal share of the tip
 If you choose to round the amounts, you may notice that the sum of the amounts does not equal the total bill amount anymore. Don't worry about that, or distribute the discrepancy in a fair way for an extra challenge.
 Print out a total bill
 Print a breakdown for what each diner owes
 */


var Diner = function(name){
    this.name = name;
    this.mealRecord = {};
    this.mealRecord.dishName = [];
    this.mealRecord.dishPrice = [];
    this.addDish = function(dishName, dishPrice){
        this.mealRecord.dishName.push(dishName);
        this.mealRecord.dishPrice.push(dishPrice);
    };
    this.mealTotal = function(){
        var total = 0;
        this.mealRecord.dishPrice.forEach(function(item){
            total += item;
        });

        //add 20% tax for each diner
        total *= 1.2;

        return total;
    };
};


var Meal = function() {

    var args = Array.prototype.slice.call(arguments);

    this.mealTotal = function(){
        var mealTotal = 0;
        for (var i=0; i<args.length; i++){
            //console.log(args[i]);
            mealTotal += args[i].mealTotal();
        }
        return mealTotal;
    };

    this.tip = function(tipPercent){
        return this.mealTotal() * (tipPercent/100);
    };

    this.totalBill = function(tipPercent){
        return this.mealTotal() + this.tip(tipPercent);
    };
};

var diner1 = new Diner('Jon');

diner1.addDish('curry', 20);
diner1.addDish('fish & chips', 40);

var diner2 = new Diner('Cath');

diner2.addDish('pasta', 30);
diner2.addDish('steak', 80);

var meal = new Meal(diner1, diner2);

console.log(diner1.name, diner1.mealRecord.dishName, diner1.mealRecord.dishPrice, diner1.mealTotal());
console.log(diner2.name, diner2.mealRecord.dishName, diner2.mealRecord.dishPrice, diner2.mealTotal());
console.log('TOTAL BILL = ', meal.totalBill(20));
console.log('DINER 1 FAIR SHARE OF BILL PLUS 50% OF TIP', diner1.mealTotal() + (meal.tip(20)/2));
console.log('DINER 2 FAIR SHARE OF BILL PLUS 50% OF TIP', diner2.mealTotal() + (meal.tip(20)/2));






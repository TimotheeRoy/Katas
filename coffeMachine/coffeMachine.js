// https://simcap.github.io/coffeemachine/

class Drinks {
    drinks = ["coffe", "tea", "chocolate", "orange_juice"];
    sugars = [0, 1, 2];

    constructor(name, sugar=0, extraHot=false) {
        (this.name = name),
            (this.sugar = sugar),
            (this.extraHot = extraHot ? 'extra hot ' : '');
    }

    

    getName() {
        return this.name;
    }

    isInputOk() {
        return {
            drinks: this.drinks.includes(this.name),
            sugars: this.sugars.includes(this.sugar),
        };
    }

    makeDrink() {
        if (this.isInputOk()["drinks"] && this.isInputOk()["sugars"]) {
            if (this.sugar !== 0) {
                return (
                    `Here is your ${this.extraHot + this.name} with ${this.sugar} sugar` +
                    (this.sugar === 1 ? "" : "s") +
                    ` and a stick`
                );
            } else {
                if (this.name === "orange_juice")
                    return "Here is your orange juice";
                else
                    return `Here is your ${this.extraHot + this.name} with no sugar and therefore no stick`;
            }
        } else {
            return `There is a issue with the order, please check the message onto the machine`;
        }
    }
}

class DrinkMaker {
    prices = { coffe: 0.6, tea: 0.4, chocolate: 0.5, orange_juice: 0.6 };

    constructor(drink, givenMoney) {
        this.drink = drink;
        this.givenMoney = givenMoney;
    }

    make() {
        if (this.prices[this.drink.getName()] <= this.givenMoney) {
            return this.drink.makeDrink();
        } else {
            return `${(
                this.prices[this.drink.getName()] - this.givenMoney
            ).toFixed(1)}€ is missing`;
        }
    }
}

const coffe = new Drinks("coffe", 0);
const drinkMaker = new DrinkMaker(coffe, 0.5);
console.log(drinkMaker.make());

module.exports = { Drinks, DrinkMaker };

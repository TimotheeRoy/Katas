// https://simcap.github.io/coffeemachine/

class Drinks {
    drinks = ["coffe", "tea", "chocolate", "orange_juice"];
    sugars = [0, 1, 2];

    constructor(name, sugar = 0, extraHot = false) {
        (this.name = name),
            (this.sugar = sugar),
            (this.extraHot = extraHot ? "extra hot " : "");
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
                    `Here is your ${this.extraHot + this.name} with ${
                        this.sugar
                    } sugar` +
                    (this.sugar === 1 ? "" : "s") +
                    ` and a stick`
                );
            } else {
                if (this.name === "orange_juice")
                    return "Here is your orange juice";
                else
                    return `Here is your ${
                        this.extraHot + this.name
                    } with no sugar and therefore no stick`;
            }
        } else {
            return `There is a issue with the order, please check the message onto the machine`;
        }
    }
}

class DrinkMaker {
    prices = { coffe: 0.6, tea: 0.4, chocolate: 0.5, orange_juice: 0.6 };
    report = {
        coffe: 0,
        tea: 0,
        chocolate: 0,
        orange_juice: 0,
        money_earned: 0,
    };

    constructor(givenMoney) {
        this.givenMoney = givenMoney;
    }

    make(drink) {
        if (this.prices[drink.getName()] <= this.givenMoney) {
            this.report[drink.getName()]++;
            this.report.money_earned += this.prices[drink.getName()];
            this.report.money_earned = parseFloat(this.report.money_earned.toFixed(1))
            return drink.makeDrink();
        } else {
            return `${(this.prices[drink.getName()] - this.givenMoney).toFixed(
                1
            )}€ is missing`;
        }
    }

    getReport() {
        return this.report;
    }
}

const drink = new Drinks('coffe')
const drinkMaker = new DrinkMaker(1)
console.log(drinkMaker.getReport())

module.exports = { Drinks, DrinkMaker };

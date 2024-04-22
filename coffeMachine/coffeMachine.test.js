const { Drinks, DrinkMaker } = require("./coffeMachine");

//1st iteration
test("test with no sugar and good drink", () => {
    const drink = new Drinks("coffe", 0);
    expect(drink.makeDrink()).toBe(
        "Here is your coffe with no sugar and therefore no stick"
    );
});

test("test with 1 sugar and good drink", () => {
    const drink = new Drinks("tea", 1);
    expect(drink.makeDrink()).toBe("Here is your tea with 1 sugar and a stick");
});

test("test with 2 sugars and good drink", () => {
    const drink = new Drinks("tea", 2);
    expect(drink.makeDrink()).toBe(
        "Here is your tea with 2 sugars and a stick"
    );
});

test("test with 3 sugars", () => {
    const drink = new Drinks("chocolate", 3);
    expect(drink.makeDrink()).toBe(
        "There is a issue with the order, please check the message onto the machine"
    );
});

test("test with incorrect drink", () => {
    const drink = new Drinks("matcha", 0);
    expect(drink.makeDrink()).toBe(
        "There is a issue with the order, please check the message onto the machine"
    );
});

// 2nd iteration
test("a coffe costs 0.6", () => {
    const drink = new Drinks("coffe", 0);
    const drinkMaker = new DrinkMaker(drink, 0.6);
    expect(drinkMaker.make()).toBe(
        "Here is your coffe with no sugar and therefore no stick"
    );
});

test("a tea costs 0.4", () => {
    const drink = new Drinks("tea", 0);
    const drinkMaker = new DrinkMaker(drink, 0.4);
    expect(drinkMaker.make()).toBe(
        "Here is your tea with no sugar and therefore no stick"
    );
});

test("a chocolate costs 0.5", () => {
    const drink = new Drinks("chocolate", 2);
    const drinkMaker = new DrinkMaker(drink, 0.5);
    expect(drinkMaker.make()).toBe(
        "Here is your chocolate with 2 sugars and a stick"
    );
});

test("error if not enough money", () => {
    const drink = new Drinks("tea", 0);
    const drinkMaker = new DrinkMaker(drink, 0.2);
    expect(drinkMaker.make()).toBe("0.2€ is missing");
});

//3rd iteration
test("can make orange juice", () => {
    const drink = new Drinks("orange_juice");
    const drinkMaker = new DrinkMaker(drink, 0.6);
    expect(drinkMaker.make()).toBe("Here is your orange juice");
});

test("can make extra hot drinks", () => {
    const drink = new Drinks("tea", 1, true);
    const drinkMaker = new DrinkMaker(drink, 0.4);
    expect(drinkMaker.make()).toBe(
        "Here is your extra hot tea with 1 sugar and a stick"
    );
});



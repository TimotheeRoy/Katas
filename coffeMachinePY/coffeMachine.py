class IngredientStock:
    def __init__(self):
        self.water = 1000
        self.coffee = 500
        self.milk = 500  
        self.chocolate = 500  
        self.tea = 200  

    def use(self, water=0, coffee=0, milk=0, chocolate=0, tea=0):
        if self.water < water or self.coffee < coffee or self.milk < milk or self.chocolate < chocolate or self.tea < tea:
            raise ValueError("Not enough ingredients")
        self.water -= water
        self.coffee -= coffee
        self.milk -= milk
        self.chocolate -= chocolate
        self.tea -= tea

    def is_empty(self):
        return self.water == 0 and self.coffee == 0 and self.milk == 0 and self.chocolate == 0 and self.tea == 0


class CoffeeMachine:
    def __init__(self):
        self.stock = IngredientStock()

    def make_coffee(self):
        self.stock.use(water = 200, coffee = 20)
        return "Coffee"

    def make_tea(self):
        self.stock.use(water = 200, tea = 5)
        return "Tea"

    def make_hot_chocolate(self):
        self.stock.use(water = 200, chocolate = 20, milk = 100)
        return "Hot Chocolate"

    def get_stock_levels(self):
        return vars(self.stock)

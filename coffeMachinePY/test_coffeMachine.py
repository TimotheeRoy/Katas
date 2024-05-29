import unittest
from coffeMachine import CoffeeMachine

class TestCoffeeMachine(unittest.TestCase):
    def setUp(self):
        self.coffee_machine = CoffeeMachine()

    def test_make_coffee(self):
        self.assertEqual(self.coffee_machine.make_coffee(), "Coffee")
        stock_levels = self.coffee_machine.get_stock_levels()
        self.assertEqual(stock_levels['water'], 800)
        self.assertEqual(stock_levels['coffee'], 480)

    def test_make_tea(self):
        self.assertEqual(self.coffee_machine.make_tea(), "Tea")
        stock_levels = self.coffee_machine.get_stock_levels()
        self.assertEqual(stock_levels['water'], 800)
        self.assertEqual(stock_levels['tea'], 195)

    def test_make_hot_chocolate(self):
        self.assertEqual(self.coffee_machine.make_hot_chocolate(), "Hot Chocolate")
        stock_levels = self.coffee_machine.get_stock_levels()
        self.assertEqual(stock_levels['water'], 800)
        self.assertEqual(stock_levels['chocolate'], 480)
        self.assertEqual(stock_levels['milk'], 400)

    def test_not_enough_ingredients(self):
        self.coffee_machine.stock.water = 100
        with self.assertRaises(ValueError):
            self.coffee_machine.make_coffee()

    def test_is_empty(self):
        self.coffee_machine.stock.water = 0
        self.coffee_machine.stock.coffee = 0
        self.coffee_machine.stock.milk = 0
        self.coffee_machine.stock.chocolate = 0
        self.coffee_machine.stock.tea = 0
        self.assertTrue(self.coffee_machine.stock.is_empty())

if __name__ == '__main__':
    unittest.main()

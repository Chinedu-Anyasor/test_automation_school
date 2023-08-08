
import main
import unittest

class TestMain(unittest.TestCase):

    def test_addition(self):
        self.assertEqual(main.addition(3, 2), 5, "Should be 5")
        self.assertEqual(main.addition(5, 7), 12, "Should be 12")
        self.assertEqual(main.addition(50, 20), 70, "Should be 70")
        self.assertEqual(main.addition(-3, -3), -6, "Should be -6")
    
    if __name__ == '__main__':
        unittest.main()
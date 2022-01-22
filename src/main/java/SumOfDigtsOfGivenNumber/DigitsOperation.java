package SumOfDigtsOfGivenNumber;

public class DigitsOperation {
    public static int getSumOfDigitsOfGivenNumber(int inputNumber)
    {
        int result = 0;
        if (inputNumber<0) {
            inputNumber = inputNumber * -1;}
            while (inputNumber > 0) {

                result = result + inputNumber % 10;

                inputNumber = inputNumber / 10;
            }
            System.out.println(result);
        return result;
        }

    }

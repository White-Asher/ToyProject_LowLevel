package testtt2;

import java.util.Scanner;

public class MainClass {
    public static void main(String[] args) {
        System.out.println("연산자를 입력하시오");
        Scanner scanner = new Scanner(System.in);
        String function = scanner.nextLine();

        System.out.println("두 수를 입력하세요: ");
        double num1 = scanner.nextDouble();
        double num2 = scanner.nextDouble();

        switch(function){
            case "+":
                System.out.println(num1+num2);
                break;
            case "-":
                System.out.println(num1-num2);
                break;
            case "*":
                System.out.println(num1*num2);
                break;

            case "/":
                System.out.println(num1/num2);
                break;
        }

    }

}

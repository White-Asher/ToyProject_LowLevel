package testtt2;

import java.util.Scanner;

public class MainClass {
    public static void main(String[] args) {
        System.out.println("�����ڸ� �Է��Ͻÿ�");
        Scanner scanner = new Scanner(System.in);
        String function = scanner.nextLine();

        System.out.println("�� ���� �Է��ϼ���: ");
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

package baseball;

import camp.nextstep.edu.missionutils.Console;

public class Game {
    public void initiateGame(){
        Computer computer= new Computer();
        UserInputView userInputView = new UserInputView();
        Comparison comparison = new Comparison();
        String[] computerTempValue = computer.createComputerNumber();

        while(true){
            boolean gameLoop = comparison.InputData(computerTempValue, userInputView.userInputMain());
            if (gameLoop == true){
                break;
            }
        }

        System.out.println("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        String gamePromptNum = Console.readLine();
        if(gamePromptNum.equals("1")){
            initiateGame();
        }
    }
}

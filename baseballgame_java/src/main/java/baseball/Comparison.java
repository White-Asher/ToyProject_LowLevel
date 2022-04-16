package baseball;

import java.util.Arrays;

public class Comparison {
    private static final String STRIKE_MESSAGE = "스트라이크";
    private static final String BALL_MESSAGE = "볼";
    private static final String NOTHING_MESSAGE = "낫싱";

    public boolean InputData(String[] computerNumber, String[] userNumber){
        int strikeCheckNum = strikeCheck(computerNumber, userNumber);
        int ballCheckNum = ballCheck(computerNumber, userNumber);
        boolean checkThreeStrike = false;

        if(strikeCheckNum == 0 && ballCheckNum == 0){
            System.out.println(NOTHING_MESSAGE);
        }

        else if(strikeCheckNum == 0 && ballCheckNum != 0){
            System.out.println(ballCheckNum+BALL_MESSAGE);
        }

        else if(strikeCheckNum != 0 && ballCheckNum == 0){
            System.out.println(strikeCheckNum+STRIKE_MESSAGE);
            if (strikeCheckNum == 3){
                System.out.println("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
                checkThreeStrike = true;
            }
        }

        else if(strikeCheckNum != 0 && ballCheckNum != 0){
            System.out.println(ballCheckNum+BALL_MESSAGE+" "+strikeCheckNum+STRIKE_MESSAGE);
        }

        return checkThreeStrike;
    }

    public int strikeCheck(String[] computerNumber, String[] userNumber){
        int strikeCount = 0;
        for(int i = 0; i< computerNumber.length ;i++){
            if(computerNumber[i].equals(userNumber[i]) ){
                strikeCount++;
            }
        }
        return strikeCount;
    }

    public int ballCheck(String[] computerNumber, String[] userNumber){
        int ballCount = 0;

        for(int j = 0; j< computerNumber.length ;j++){
            if(computerNumber[j].equals(userNumber[j])){
                continue;
            }

            else if(Arrays.asList(computerNumber).contains(userNumber[j])){
                ballCount++;
            }

        }
        return ballCount;
    }

}

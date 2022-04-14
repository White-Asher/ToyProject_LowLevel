package baseball;

import java.util.ArrayList;
import java.util.List;

import camp.nextstep.edu.missionutils.Randoms;

public class ComputerRandom {
    private static final int MINIMUM_NUMBER = 1;
    private static final int MAXIMUM_NUMBER = 9;
    private static final int NUMBER_OF_DIGIT = 3;



    public List<Integer> createComputerNumber(){
        List<Integer> computerNumber = new ArrayList<Integer>();

        while(computerNumber.size() != NUMBER_OF_DIGIT){
            computerNumber.add(getRandomNumber());
        }

        return computerNumber;
    }

    public int getRandomNumber(){
        return Randoms.pickNumberInRange(MINIMUM_NUMBER, MAXIMUM_NUMBER);
    }

}

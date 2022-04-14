package baseball;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import camp.nextstep.edu.missionutils.Randoms;

public class ComputerRandom {
    private static final int MINIMUM_NUMBER = 1;
    private static final int MAXIMUM_NUMBER = 9;
    private static final int NUMBER_OF_DIGIT = 3;

    public List<Integer> createComputerNumber(){
        Set<Integer> computerNumberSet = new HashSet<>();

        while(computerNumberSet.size() != NUMBER_OF_DIGIT){
            computerNumberSet.add(getRandomNumber());
        }

        List<Integer> computerNumberList = new ArrayList<>(computerNumberSet);

        return computerNumberList;
    }

    public int getRandomNumber(){
        return Randoms.pickNumberInRange(MINIMUM_NUMBER, MAXIMUM_NUMBER);
    }

}

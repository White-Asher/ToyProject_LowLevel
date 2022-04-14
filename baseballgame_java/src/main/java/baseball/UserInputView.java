package baseball;

import java.util.Set;
import java.util.HashSet;
import java.util.regex.Pattern;

import camp.nextstep.edu.missionutils.Console;

public class UserInputView {
    private static final int USER_INPUT_SIZE = 3;
    private static final String USER_NUMBER_REGEX = "^[1-9]{3}$";
    private static final String ILLEGAL_ARGUMENT_EXCEPTION_ERROR_MESSAGE = "잘못된 사용자 입력입니다.";

    public String[] userInputMain(){
        System.out.printf("숫자를 입력해 주세요 : ");
        String userInputValueString = Console.readLine();
        String[] result = userInput(userInputValueString);
        return result;
    }

    public String[] userInput(String userInputValueString){
        String[] convertInputValueStringList = userInputValueString.split("");
        inputValidationDuplicate(convertInputValueStringList);
        inputValidationRangeCheck(userInputValueString);
        return convertInputValueStringList;
    }

    public void userInput(){
        throw new IllegalArgumentException(ILLEGAL_ARGUMENT_EXCEPTION_ERROR_MESSAGE);
    }

    public void inputValidationDuplicate (String[] convertInputValueStringList){
        Set<String> userInputValueSet = new HashSet<>();

        for(int i=0; i< convertInputValueStringList.length;i++){
            userInputValueSet.add(convertInputValueStringList[i]);
        }

        if(userInputValueSet.size() != USER_INPUT_SIZE ){
            throw new IllegalArgumentException(ILLEGAL_ARGUMENT_EXCEPTION_ERROR_MESSAGE);
        }
    }

    public void inputValidationRangeCheck(String userInputValueString){
        if(!Pattern.matches(USER_NUMBER_REGEX, userInputValueString)){
            throw new IllegalArgumentException(ILLEGAL_ARGUMENT_EXCEPTION_ERROR_MESSAGE);
        }
    }

}

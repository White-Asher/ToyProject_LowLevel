package racingcar.view;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import camp.nextstep.edu.missionutils.Console;
import racingcar.domain.Name;
import racingcar.domain.MoveCount;
import racingcar.domain.Names;

public class InputView {
    private static final String NAME_DELIMITER = ",";

    public static Names inputCarNames(){
        OutputView.printInputCarName();

        try{
            String input = Console.readLine();
            return new Names(Arrays.stream(input.split(NAME_DELIMITER))
                    .map(Name::new)
                    .collect(Collectors.toList()));
        } catch (IllegalArgumentException e){
            OutputView.printErrorMessage(e.getMessage());
            return inputCarNames();
        }
    }

    public static MoveCount inputMoveCount(){
        OutputView.printInputMoveCount();

        try {
            String input = Console.readLine();
            return MoveCount.from(input);
        } catch (IllegalArgumentException e){
            OutputView.printErrorMessage(e.getMessage());
            return inputMoveCount();
        }
    }
}

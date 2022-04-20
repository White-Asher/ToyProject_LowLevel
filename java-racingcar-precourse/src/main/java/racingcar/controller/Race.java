package racingcar.controller;

import java.util.List;

import racingcar.domain.Names;
import racingcar.domain.MoveCount;
import racingcar.view.InputView;

public class Race {
    public void startRace(){
        Names names = InputView.inputCarNames();
        MoveCount moveCount = InputView.inputMoveCount();
    }
}

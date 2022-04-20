package racingcar.controller;

import java.util.List;

import racingcar.domain.Car;
import racingcar.domain.MoveCount;
import racingcar.view.InputView;

public class Race {
    public void startRace(){
        List<Car> cars = InputView.inputCarNames();
        MoveCount moveCount = InputView.inputMoveCount();
    }
}

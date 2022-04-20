package racingcar.domain;
import java.util.Objects;
public class Name {
    private static final String NAME_LENGTH_ERROR_MESSAGE = "이름은 1글자 이상, 5글자 이하를 입력해야 합니다.";
    private static final String NAME_ONLY_SPACES_ERROR_MESSAGE = "이름은 공백만으로 구성될 수 없습니다.";

    private static final int MINIMUM_NAME_LENGTH = 1;
    private static final int MAXIMUM_NAME_LENGTH = 5;

    private final String name;

    public Name(String name){
        validateLength(name);
        validateOnlySpace(name);

        this.name = name;
    }

    private void validateLength(String name){
        int nameLength = name.length();
        if (nameLength < MINIMUM_NAME_LENGTH || nameLength > MAXIMUM_NAME_LENGTH){
            throw new IllegalArgumentException(NAME_LENGTH_ERROR_MESSAGE);
        }
    }

    public void validateOnlySpace(String name){
        String spaceRemovedName = name.replace(" ", "");
        if (spaceRemovedName.length() == 0){
            throw new IllegalArgumentException(NAME_ONLY_SPACES_ERROR_MESSAGE);
        }
    }

    @Override
    public boolean equals(Object o){
        if(this == o){
            return true;
        }
        if(o == null || getClass() != o.getClass()){
            return false;
        }
        Name otherName = (Name)o;
        return this.name.equals(otherName.name);

    }

    @Override
    public int hashCode(){
        return Objects.hash(this.name);
    }

}

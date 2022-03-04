import random
def comNumFunc():
  comNum = []
  randomNum = random.randint(1,9)
  for i in range(3):
    while randomNum in comNum:
      randomNum = random.randint(1,9)
    comNum.append(randomNum)
  print(comNum)
  return comNum
 
def userNumFunc():
  inputNum = int(input("숫자를 입력해주세요 ex)123 : "))
  userNum = list(map(int, str(inputNum)))
  return userNum
 
def isStrike(cNum,uNum):
  strikeCounter = 0
  for i in range(3):
    if(cNum[i] == uNum[i]):
      strikeCounter+=1
  return strikeCounter
 
def isBall(cNum,uNum):
  ballCounter = 0
  for i in range(3):
    if uNum[i] in cNum and cNum[i] != uNum[i]:
      ballCounter+=1
  return ballCounter
 
def decide(strikeNumber,ballNumber):
  if(strikeNumber >=1 and ballNumber ==0):
    print(strikeNumber,"스트라이크")
  elif(strikeNumber ==0 and ballNumber >= 1):
    print(ballNumber,"볼")
  elif(strikeNumber >= 1 and ballNumber >= 1):
    print(strikeNumber,"스트라이크",ballNumber,"볼")
  elif(strikeNumber == 0  and ballNumber == 0 ):
    print("낫싱")
      
if __name__ == "__main__":
  comNum = comNumFunc()
  while True:
    userNum = userNumFunc()
    strikeNumber = isStrike(comNum,userNum)
    ballNumber = isBall(comNum,userNum)
    decide(strikeNumber,ballNumber)
    if strikeNumber == 3:
      break
  print("게임을 종료합니다.")
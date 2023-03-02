# -------------------------------------------------------------------------------------------------
# Written by: Victor Ibironke
# Date: 16th June, 2021
# -------------------------------------------------------------------------------------------------
def drawField(field):
    for row in range(5):
        if row % 2 == 0:
            practicalRow = int(row / 2)
            for column in range(5):
                if column % 2 == 0:
                    practicalColumn = int(column / 2)
                    if column != 4:
                        print(field[practicalColumn][practicalRow], end="")
                    else:
                        print(field[practicalColumn][practicalRow])
                else:
                    print("|", end="")
        else:
            print("-----")


# -------------------------------------------------------------------------------------------------
player = 1
# -------------------------------------------------------------------------------------------------
currentField = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
# -------------------------------------------------------------------------------------------------
drawField(currentField)
# -------------------------------------------------------------------------------------------------
def checkWinner(le):
    return (
        (currentField[0][0] == le and currentField[1][0] == le and currentField[2][0] == le)
        or (currentField[0][1] == le and currentField[1][1] == le and currentField[2][1] == le)
        or (currentField[0][2] == le and currentField[1][2] == le and currentField[2][2] == le)
        or (currentField[0][0] == le and currentField[0][1] == le and currentField[0][2] == le)
        or (currentField[1][0] == le and currentField[1][1] == le and currentField[1][2] == le)
        or (currentField[2][0] == le and currentField[2][1] == le and currentField[2][2] == le)
        or (currentField[0][0] == le and currentField[1][1] == le and currentField[2][2] == le)
        or (currentField[0][2] == le and currentField[1][1] == le and currentField[2][0] == le)
    )


# -------------------------------------------------------------------------------------------------
while True:
    print(f"Player {player}'s turn")
    moveRow = int(input("Please enter the row: "))
    moveColumn = int(input("Please enter the column: "))
    if player == 1:
        if currentField[moveColumn - 1][moveRow - 1] == " ":
            currentField[moveColumn - 1][moveRow - 1] = "X"
            if not checkWinner("X"):
                player = 2
            else:
                drawField(currentField)
                print("Player 1 is the winner.")
                break
    else:
        if currentField[moveColumn - 1][moveRow - 1] == " ":
            currentField[moveColumn - 1][moveRow - 1] = "O"
            if not checkWinner("O"):
                player = 1
            else:
                drawField(currentField)
                print("Player 2 is the winner")
                break
    drawField(currentField)
# -------------------------------------------------------------------------------------------------

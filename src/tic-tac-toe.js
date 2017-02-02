class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.desk = [[],[],[]];
        this.dimension = 3;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        this.desk[rowIndex][columnIndex] = this.currentPlayer;

        this.currentPlayer = this.currentPlayer == 'x'? 'o' : 'x';
    }

    isFinished() {
        return this.getWinner() || this.isDraw();
    }

    getWinner() {
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.dimension; i++)
            for (let j = 0; j < this.dimension; j++)
                if (this.desk[i][j] == undefined)
                    return false;

        return true;
    }

    isDraw() {
        if (this.getWinner())
            return false;
        else if (this.noMoreTurns())
            return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.desk[rowIndex][colIndex]? this.desk[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;

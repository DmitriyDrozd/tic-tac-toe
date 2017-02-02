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

    }

    getWinner() {

    }

    noMoreTurns() {
        for (let i = 0; i < this.dimension; i++)
            for (let j = 0; j < this.dimension; j++)
                if (this.desk[i][j] == undefined)
                    return false;

        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.desk[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

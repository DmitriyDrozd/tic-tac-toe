class TicTacToe {
    constructor() {
        this.currentPlayer = 'o';
        this.desk = [[],[],[]];
        this.dimension = 3;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        this.desk[rowIndex][columnIndex] = this.currentPlayer;

        if (!this.isFinished())
            this.currentPlayer = this.currentPlayer == 'x'? 'o' : 'x';
    }

    isFinished() {
        return this.getWinner() || this.isDraw();
    }

    getWinner() {
        let player;
        let symbolsInARow = 0;

        // horizontal
        for (let i = 0; i < this.dimension; i++) {
            player = this.getFieldValue(i,0);
            for (let j = 0; j < this.dimension; j++)
                if (this.getFieldValue(i, j) == player)
                    symbolsInARow++;
            if (symbolsInARow == this.dimension)
                return player;
            symbolsInARow = 0;
        }

        // vertical
        for (let j = 0; j < this.dimension; j++) {
            player = this.getFieldValue(0,j);
            for (let i = 0; i < this.dimension; i++)
                if (this.getFieldValue(i, j) == player)
                    symbolsInARow++;
            if (symbolsInARow == this.dimension)
                return player;
            symbolsInARow = 0;
        }

        // main diagonal
        player = this.getFieldValue(0,0);

        for (let i = 0; i < this.dimension; i++) {
            if (this.getFieldValue(i,i) == player)
                symbolsInARow++;
            if (symbolsInARow == this.dimension)
                return player;
        }
        symbolsInARow = 0;

        // secondary diagonal
        player = this.getFieldValue(0,this.dimension - 1);
        let j = 0;

        for (let i = this.dimension - 1; i >= 0; i--) {
            if (this.getFieldValue(i,j) == player)
                symbolsInARow++;
            if (symbolsInARow == this.dimension)
                return player;
            j++;
        }

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

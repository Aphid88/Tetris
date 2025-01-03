function drawBoard() {
    for (let correntRow = 0; currentRow < ROW; currentRow++) {
        for (let currentCol = 0; currentCol < COL; currentCol++) {
            const currentSquareColor = board[currentRow][currentCol];
            drawSquare(currentRow, currentCol, currentSquareColor);
        }
    }
}

function drawSquare(y, x, color) {
    ctx.fillstyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

    if (color == defaultColor) {
        ctx.strokeStyle = defaultBorder;

    }

    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}
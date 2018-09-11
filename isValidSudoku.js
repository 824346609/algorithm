var isValidSudoku = function (board) {

    for (let i = 0; i < 9; i++) {

        let row = new Array();
        arr = Array.apply(null, Array(9)).map(function (item, i) {
            return 0;
        });
        let col = new Array();
        col = Array.apply(null, Array(9)).map(function (item, i) {
            return 0;
        });
        let cube = new Array();
        cube = Array.apply(null, Array(9)).map(function (item, i) {
            return 0;
        });
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                if (row[board[i][j] - '1'] == 1) {
                    return false
                } else {
                    row[board[i][j] - '1'] = 1;
                }
            }
            if (board[j][i] != '.') {
                if (col[board[j][i] - '1'] == 1) {
                    return false
                } else {
                    col[board[j][i] - '1'] = 1;
                }
            }
            let x = Math.floor(i / 3);
            let cubeX = Math.floor(3 * x + j / 3);
            let cubeY = Math.floor(3 * (i % 3) + j % 3);
            // console.log('cubeX :' + cubeX,'cubeY :' + cubeY);
            if(board[cubeX][cubeY] != '.') { 
                    if(cube[board[cubeX][cubeY] - '1'] == 1) {
                        return false;
                    } else {
                        cube[board[cubeX][cubeY] - '1'] = 1;
                    }
                }
        }
    //    console.log("---------------------------------------------------------------");
    }
    return true;
};
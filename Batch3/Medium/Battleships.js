/**
 * @param {character[][]} board
 * @return {number}
 */
const a = [["X",".",".","X"],
           [".",".",".","X"],
           [".",".",".","X"]] //output 2
const b = [["X","X","X","."],
           [".",".",".","."],
           [".",".",".","X"]] //output 2
const c = [["X","X","X"]] //output 1
var countBattleships = function(board) {
    //create var to count ships
    let ships = 0;
    //2dArrayName[row][column] console.log(board[0][3])
    //two loops to iterate 2d array
    for (let row = 0; row<board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            //check for solitary x
            if(board[row][col]==='X'&&
                (col+1<board[0].length && board[row][col+1]==='.' || col+1>=board[0].length) &&
                (row+1<board.length    && board[row+1][col]==='.' || row+1>=board.length) &&
                (col-1>=0 && board[row][col-1]==='.' || col-1< 0) &&
                (row-1>=0 && board[row-1][col]==='.' || row-1<0)
            ){
                ships++
            }

            //check for down (row)
            else if (board[row][col]==="X" && (row+1<board.length && board[row+1][col]==="X")){
                //if next col ===x, keep iterating and count at end
                if (row+2<board.length && board[row+2][col]==="." || (row+2>=board.length)){
                    ships++
                }
            }
            // //check for across (col)
            else if (board[row][col]==="X" && (col+1<board[0].length && board[row][col+1]==="X")){
                //if next col ===x, keep iterating and count at end
                if (col+2<board[0].length && board[row][col+2]==="." || (col+2>=board[0].length)){
                    ships++

                }
            }
        }
    }
    console.log(ships)


};
countBattleships(c)

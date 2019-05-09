window.onload = function () {
    const body = document.body;
    const span = document.querySelector('span')
    console.dir(span)

    let playerColor = "red";
    let reserveArray = [];
    let checkWinningCombos = [];
    let playerOne = document.querySelectorAll('.cell')


    const winningCombos = [
        [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
        [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
        [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
        [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
        [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
        [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
        [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
        [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
        [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
        [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
        [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
        [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
        [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
        [0, 8, 16, 24], [7, 15, 23, 31], [14, 22, 30, 38],
        [1, 9, 17, 25], [8, 16, 24, 32], [15, 23, 31, 39],
        [2, 10, 18, 26], [9, 17, 25, 33], [16, 24, 32, 40],
        [3, 11, 19, 27], [10, 18, 26, 34], [17, 25, 33, 41],
        [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23], [6, 12, 18, 24],
        [10, 16, 22, 28], [11, 17, 23, 29], [12, 18, 24, 30], [13, 19, 25, 31],
        [17, 23, 29, 35], [18, 24, 30, 36], [19, 25, 31, 37], [20, 26, 32, 38]

    ]
    // //This is where I need to check on how to create a function that uses the groups of 4 that will win

    let redWin = ["red", "red", "red", "red"];
    let yellowWin = ["yellow", "yellow", "yellow", "yellow"];

    //

    function WinningCombos() {
        console.log(checkWinningCombos)
        checkWinningCombos = []
        // console.log("Winning combos runs");
        for (let i = 0; i < winningCombos.length; i++) {


            let newArr = []
            for (let j = 0; j < winningCombos[i].length; j++) {

                newArr.push(playerOne[winningCombos[i][j]].classList[1])

            }
            checkWinningCombos.push(newArr);


        }


        for (let i = 0; i < checkWinningCombos.length; i++) {
            let redCount = 0
            let yellowCount = 0
            // console.log(checkWinningCombos[i])
            for (let j = 0; j < redWin.length; j++) {
                if (checkWinningCombos[i][j] === redWin[j]) {
                    redCount += 1
                }
                else if
                    (checkWinningCombos[i][j] === yellowWin[j]) {
                    yellowCount += 1
                }
            }
            //Big ups to my girl Rachel for helping me figure out the logic of this extra loop!
            if (redCount === 4 || yellowCount === 4) {
            setTimeout(function () { alert(`Winner!`); }, 100)
             
            }
            
        }

    }
 


    playerOne.forEach((slot) => {
        slot.addEventListener('click', dropCircle)


    });

    function dropCircle(event) {
        let id = parseInt(this.getAttribute('id'));
        let move;
        //Mohammed helped me here with parseInt to convert 'id' to compare values
        for (let i = id; i < playerOne.length; i += 7) {

            if (playerOne[i].classList.contains('red')) {
                break;
            }
            if (playerOne[i].classList.contains('yellow')) {
                break;
            }
            move = i;
        }
        playerOne[move].classList.add(playerColor);

        WinningCombos();

        reserveArray.push({ id: move, playerColor });
        if (playerColor === 'red') {
            playerColor = 'yellow'
        } else {
            playerColor = 'red'

        }
        document.getElementById('label').textContent = `${playerColor}'s go!`;
        document.getElementById('label').style.color = playerColor

    
}

}

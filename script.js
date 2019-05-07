window.onload = function () {
    const body = document.body;


    let playerColor = "red";
    reserveArray = [];

    let playerOne = document.querySelectorAll('.cell')
    // console.log(playerOne);

    playerOne.forEach((slot) => {
        slot.addEventListener('click', dropCircle)

    });

    function dropCircle(event) {
        //this.classList.add('red');
        let id = parseInt(this.getAttribute('id'));
        let move;
        //Mohammed helped me here with parseInt to convert 'id' to integers to compare values
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

        if (playerColor === 'red') {
            playerColor = 'yellow'
        } else {
            playerColor = 'red'
        }
        reserveArray.push(move);

        // console.log(reserveArray)
    }


}







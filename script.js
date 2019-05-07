window.onload = function () {
    const body = document.body;

 
    let playerColor = "red";
    reserveArray = [];

    let playerOne = document.querySelectorAll('.cell')
    // console.log(playerOne);

    playerOne.forEach((slot) => {
        slot.addEventListener('click', dropMarker)

    });

    function dropMarker(event) {
        //this.classList.add('red');
        let id = parseInt(this.getAttribute('id'));
        let move;
        for (let i = id; i < playerOne.length; i += 7) {
            
            if (playerOne[i].classList.contains('red')){
                console.log("it's reserved");break;
            }
            if (playerOne[i].classList.contains('yellow')){
                console.log("it's reserved");break;
            }
            move = i;
        }
        //Mohammed helped me here
        
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







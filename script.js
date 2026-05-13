let btns = document.querySelectorAll(`.btn`);
let reset_btn = document.querySelector(`reset`);

let turnO = true;

const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
let userinputO = [];
let userinputX = [];
let c = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO === true) {
            btn.innerText = "O"
            turnO = false;
        }
        else {
            btn.innerText = "X"
            turnO = true;
        }

        btn.disabled = true;
        c = c + 1;
        checkwinner();
    });
});
const checkwinner = () => {
    let x = false;

    for (let i of wins) {
        let p0 = btns[i[0]].innerText;
        let p1 = btns[i[1]].innerText;
        let p2 = btns[i[2]].innerText;
        //       let x = false;

        if (p0 != "" && p1 != "" && p2 != "") {
            if (p0 === p1 && p1 == p2) {
                x = true;
                let ans = p0;
                console.log("JIt gaye");
                setTimeout(() => {
                    alert(`${ans} Won the game\n${(ans === 'X') ? 'O' : 'X'} lost the game!`);

                }, 500);
            }


        };


    }
    if (x === false && c === 9) {
        setTimeout(() => {
            console.log(`game draw`);
            alert(`GAME DRAW`);

        }, 500);
        return;



    }
};


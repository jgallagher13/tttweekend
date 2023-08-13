/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'green',
    '-1': 'orange'
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
/*----- state variables -----*/
let board
let turn
let winner


/*----- cached elements  -----*/
const spaceEls = [...document.querySelectorAll('#board > div')]
const playBtn = document.querySelector('button')
const messageEl = document.querySelector('#message')

/*----- event listeners -----*/
spaceEls.forEach((space)=>{
space.addEventListener('click', handleClick)
})

playBtn.addEventListener('click', init)

/*----- functions -----*/
init()
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    turn = 1   //player X's turn
    winner = null   //1 or -1 if winner, 'T' if tie
    render()
}

function render() {
    renderBoard()
    renderMessage()
    renderControls()
}

function renderBoard() {
    board.forEach(function(cellVal, idx) {
        const cellIdx = `${idx}`
        const cellEl = document.getElementById(cellIdx)
        cellEl.style.backgroundColor = COLORS[cellVal]
        })

}

function renderMessage() {
    if(winner === 'T') {
        messageEl.innerText = 'Tie!!!'
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()} Wins!</span>`
    } else {
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}'s Turn!</span>`
    }

}

function renderControls() {
    playBtn.style.visibility = winner ? 'visible' : 'hidden'
}


function handleClick(event) {
    const spaceIdx = spaceEls.indexOf(event.target)
    if (board[spaceIdx] || winner || isNaN(spaceIdx)) {
        return
    }
    board[spaceIdx] = turn
    turn *= -1
    winner = getWinner()
    render()
}

function getWinner() {
   for (let i = 0; i < winningCombinations.length; i++) {
    if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0]
    if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3]
    if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6]
    if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0]
    if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1]
    if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2]
    if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0]
    if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2]
   }
   //if (board.includes(null)) {
   // return null
  // }else {
  //  return 'T'
  // }
}

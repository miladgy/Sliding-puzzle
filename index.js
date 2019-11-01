// const puzzleSize = document.getElementsByClassName('puzzleSize')[0];
const mixBtn = document.querySelector('.mix-btn');
const numberBtn = document.querySelector('.number-btn')
const cell33 = document.querySelector('.cell33');
const spans = [...document.querySelectorAll('.span')];
const table = document.querySelector('.table');


const switchCells = (oldCell, newCell) => {
  let inBetween = document.getElementById(oldCell).className;
  document.getElementById(oldCell).className = document.getElementById(newCell).className;
  document.getElementById(newCell).className = inBetween;
  return;
  // let inBetweenTextContent = document.getElementsByClassName(`cell${oldPlace}`)[0].textContent;
  // console.log(inBetweenTextContent)
  // document.getElementsByClassName(`cell${oldPlace}`)[0].textContent = document.getElementsByClassName(`cell${newPlace}`)[0].textContent;
  // document.getElementsByClassName(`cell${newPlace}`)[0].textContent = inBetweenTextContent;

  // let inBetweenSpan = document.getElementsByClassName(`span${oldPlace}`)[0].className.split(' ')[0];
  // console.log(document.getElementsByClassName(`span${newPlace}`)[0].className.split(' ')[0]);
  // document.getElementsByClassName(`span${oldPlace}`)[0].className.split(' ')[0] = document.getElementsByClassName(`span${newPlace}`)[0].className.split(' ')[0];
  // document.getElementsByClassName(`span${newPlace}`)[0].className.split(' ')[0] = inBetweenSpan;
  // document.getElementsByClassName(`span${oldPlace}`)[0].innerHTML = document.getElementsByClassName(`span${newPlace}`)[0].className.split(' ')[0].replace("span", "No.")
  // document.getElementsByClassName(`span${newPlace}`)[0].innerHTML = inBetweenSpan.replace("span", "No.")

}
const mixPuzzle = () => {
  for (row = 1; row < 4; row++) {
    for (col = 1; col < 4; col++) {
      const newCol = Math.floor(Math.random() * 3 + 1);
      const newRow = Math.floor(Math.random() * 3 + 1);
      switchCells(`cell${row}${col}`, `cell${newRow}${newCol}`);
    }
  }
}
// mix the cards
mixBtn.addEventListener('click', () => {
  mixPuzzle();
})

window.onload = (e) => {
  spans.map(element => element.style.display = "none");
  fetch('https://source.unsplash.com/random/564x564')
    .then((res) => {
      for (row = 1; row < 4; row++) {
        for (col = 1; col < 4; col++) {
          const image = document.createElement('img');
          image.src = `${res.url}`;
          document.getElementById(`cell${row}${col}`).style.backgroundImage =
            `url(${res.url})`;
          document.getElementsByTagName('body')[0].style.backgroundImage = `url(${res.url})`;
        }
      }
    })
  //     sizeSubmitBtn.addEventListener("click", (e) => {
  //     e.preventDefault();
  // })




  table.addEventListener('click', (e) => {
    e.preventDefault();
    let row = Number(e.target.id.split("cell")[1].charAt(0));  // use id and check for class: since cards get mixed.
    let col = Number(e.target.id.split("cell")[1].charAt(1));
    console.log('col', col);
    console.log('row', row);

    const clickedCard = (row, col) => {
      if (e.target.className !== "card9") {
        if (col > 1) {
          if (document.getElementById(`cell${row}${col - 1}`).className === "card9") {  // need to check the position of the blurry card 
            console.log('here in  1st iif statement', e.target.className)
            switchCells(`cell${row}${col}`, `cell${row}${col - 1}`);
            return;
          }
        }
        if (col < 3) {
          if (document.getElementById(`cell${row}${col + 1}`).className === "card9") {
            console.log('here in  2th iif statement', e.target.className)

            switchCells(`cell${row}${col}`, `cell${row}${col + 1}`);
            return;
          }
        }
        if (row > 1) {
          if (document.getElementById(`cell${row - 1}${col}`).className === "card9") {
            console.log('here in  3th iif statement', e.target.className)
            switchCells(`cell${row}${col}`, `cell${row - 1}${col}`);
            return;
          }
        }
        if (row < 3) {
          if (document.getElementById(`cell${row + 1}${col}`).className === "card9") {
            console.log('here in  4th iif statement', e.target.className)
            switchCells(`cell${row}${col}`, `cell${row + 1}${col}`);
            return;
          }
        }
      }
      return;
    }
    clickedCard(row, col);

  })
  numberBtn.addEventListener('click', () => {
    [...document.querySelectorAll('.span')].map(element => {
      element.style.display = "block";
      element.style.fontSize = "large";
      element.style.color = "white";
    });
  })
}




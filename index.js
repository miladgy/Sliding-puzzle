// const puzzleSize = document.getElementsByClassName('puzzleSize')[0];
const mixBtn = document.querySelector('.mix-btn')
const switchCells = (oldCell, newCell) => {
  let inBetween = document.getElementsByClassName(oldCell)[0].className;
  document.getElementsByClassName(oldCell)[0].className = document.getElementsByClassName(newCell)[0].className;
  document.getElementsByClassName(newCell)[0].className = inBetween;

}
const mixPuzzle = () => {
  for (col = 1; col < 4; col++){
    for (row = 1; row < 4; row++){
      const newCol = Math.floor(Math.random() * 3 + 1);
      const newRow = Math.floor(Math.random() * 3 + 1);
      switchCells(`cell${col}${row}`, `cell${newCol}${newRow}`);
    }
  }
}

mixBtn.addEventListener('click', () => {
  console.log('i am here in button handler')
  mixPuzzle();
})

window.onload = () => {
    fetch('https://source.unsplash.com/random/564x564')
    .then((res) => {
      for (i = 1; i < 4; i++){
        for (j = 1; j < 4; j++){
          const image = document.createElement('img');
          image.src = `${res.url}`;
          document.querySelector(`.cell${i}${j}`).style.backgroundImage =
          `url(${res.url})`;
          document.getElementsByTagName('body')[0].style.backgroundImage = `url(${res.url})`;
        
        }
      }
    })
//     sizeSubmitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
// })
    const table = document.querySelector('.table');
    table.addEventListener('click', (e) => {
      
    })
}
// for (i = 0; i < puzzleSize; i++) {
//   window[i] = document.createElement('div');
//   rowOneDiv.className = `row${i}`;
//   rowOneDiv.style.display = 'tabel-row';
// }
// console.log('constant name', window[2]);



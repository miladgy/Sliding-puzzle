const puzzleSize = document.getElementsByClassName('puzzleSize')[0];


window.onload = () => {
  // sizeSubmitBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    fetch('https://source.unsplash.com/random/564x564')
    .then((res) => {
      document.querySelector('.img').src = 
      `${res.url}`;
      for (i = 1; i < 4; i++){
          for (j = 1; j < 4; j++){
          document.querySelector(`.cell${i}${j}`).style.backgroundImage =
          `url(${res.url})`;
        }
      }
    })
}
// for (i = 0; i < puzzleSize; i++) {
//   window[i] = document.createElement('div');
//   rowOneDiv.className = `row${i}`;
//   rowOneDiv.style.display = 'tabel-row';
// }
// console.log('constant name', window[2]);



const puzzleSize = document.getElementsByClassName('puzzleSize')[0];
const sizeSubmitBtn = document.getElementsByClassName('submitSize')[0];

window.onload = () => {
  sizeSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const imgW = document.getElementsByClassName('imgW')[0].value;
    const imgH = document.getElementsByClassName('imgH')[0].value;
    document.getElementById('img').src = `https://source.unsplash.com/random/${imgW}x${imgH}`; 
    console.log();
  });
}
for (i = 0; i < puzzleSize; i++) {
  window[i] = document.createElement('div');
  rowOneDiv.className = `row${i}`;
  rowOneDiv.style.display = 'tabel-row';
}
console.log('constant name', window[2]);



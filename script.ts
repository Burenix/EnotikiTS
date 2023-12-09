const parentDiv: any = document.querySelector('.wrap');

for (let i: number = 0; i < 9; i++) {
    const div: any = document.createElement('div');

    div.innerHTML = `
        <div id="next${i}" class="">
            <img class="img${i}" src="" alt="" width="500px" height="292px">
        </div>
    `;

    parentDiv.appendChild(div);
}

function huh(num: number): any {
    next[num].addEventListener("click", () => {
          (document.getElementById("next" + num) as HTMLButtonElement).disabled = true;
          img[num].src = img2[num];
          img1[num] = img2[num];
          if (img2[num] == "./imgs/Злюка.gif") {
              showLoseModal();
              next[num].disabled = true;
              for (let i: number = 0; i < 9; i++) {
                if (img1[i] == "./imgs/Весельчак.jpeg") {img[i].src = "./imgs/Злой_енотик.png"}    
              } 
            }
          else {count++}
          if (count == 8) {
              showWinModal();
            }
      });
  }
  
const img: any[] = [], 
img1: any[] = [], 
img2: any[] = [], 
next: any[] = [];

for (let i: number = 0; i < 9; i++) {
    img.push(document.querySelector('.img' + i));
    next.push(document.getElementById('next' + i));
    img1.push('./imgs/' + i + '.png');
    if (i == 8) {img2.push('./imgs/Злюка.gif');}
    else {img2.push('./imgs/Весельчак.jpeg');}
}

img1.sort(() => Math.random() - 0.5);
img2.sort(() => Math.random() - 0.5);

for (let i: number = 0; i < 9; i++) {
    img[i].src = img1[i];
}

let count = 0;

for (let i: number = 0; i < 9; i++) {
    huh(i);
}
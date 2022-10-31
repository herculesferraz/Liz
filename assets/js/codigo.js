const mario = document.querySelector("#mario");
const cano = document.querySelector("#pipe");
const nuvem = document.querySelector("#nuven")
const grama = document.querySelector("#grama")
const placa_tiro = document.querySelector("#placa_tiro")
const placa_abeia = document.querySelector("#placa_abeia")

const btnsReset = document.querySelectorAll(".clReset")
Array.from(btnsReset).forEach(btn => 
  {
  btn.addEventListener("click", () => {
    document.location.reload();
  })
})

const loop = setInterval(() => {
  const canoPosicao = cano.offsetLeft;
  const modal = document.querySelector(".modal");
  const marioPosicao = window.getComputedStyle(mario).bottom.replace("px", "");
  const nuvemPosicao = nuvem.offsetLeft;
  const gramaPosicao = grama.offsetLeft;
  const tiro_Posicao = placa_tiro.offsetLeft;
  const abeia_Posicao = placa_abeia.offsetLeft;
  console.log(marioPosicao)
  if (canoPosicao >= -65 && canoPosicao <= 98 && marioPosicao < 105) {
    cano.style.animation = "none";
    cano.style.left = `${canoPosicao}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosicao}px`;
    mario.src = "assets/img/liz.png";
    mario.style.height = "85px";
    mario.style.marginLeft = "40px";
    clearInterval(loop);
    modal.classList.add("show")
    nuvem.style.animation = "none";
    nuvem.style.left = `${nuvemPosicao}px`;
    grama.style.left = `${gramaPosicao}px`;
    placa_tiro.style.left = `${tiro_Posicao}px`;
    placa_abeia.style.left = `${abeia_Posicao}px`;
  }
}, 100);

document.addEventListener("keydown", (event) => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 1000);
})


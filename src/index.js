import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF.js';

(function () {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector(`.cpfGerado`);
  const botao = document.querySelector(`.botaoGera`);
  cpfGerado.innerHTML = `Clique no botão para gerar`;
  botao.addEventListener(`click`, (e) => {
    cpfGerado.classList.add(`sublinhado`)
    cpfGerado.innerHTML = gera.geraNovoCPF();
  });
})();

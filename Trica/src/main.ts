import './view/style.css'
import template from './view/templates/matriz.hbs?raw'
import Handlebars from 'handlebars';
import imgEmpty from './assets/Empty.png';
import imgX from './assets/X.png';
import imgO from './assets/O.png';
import { TicTacToe } from './controller/TicTacToe';

// Helper de Handlebars para comparar valores dentro de la plantilla
Handlebars.registerHelper('eq', function (a, b) {
  return a === b;
});

const matriz = Handlebars.compile(template);
const app = document.querySelector<HTMLDivElement>('#app')!;
const game = new TicTacToe();

function render() {
  // Repintamos la plantilla inyectando el estado actual del juego y las imágenes
  app.innerHTML = matriz({
    board: game.board,
    currentPlayer: game.currentPlayer,
    winner: game.winner,
    imgEmpty,
    imgX,
    imgO
  });

  // Escuchamos el clic en cada celda
  document.querySelectorAll('.trica-cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
      const index = parseInt((e.currentTarget as HTMLElement).dataset.index || '0', 10);
      if (game.play(index)) {
        render(); // Volver a dibujar tras una jugada válida
      }
    });
  });

  // Escuchar el clic en el botón de reiniciar si el juego terminó
  const btnReset = document.getElementById('btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      game.reset();
      render();
    });
  }
}

render();

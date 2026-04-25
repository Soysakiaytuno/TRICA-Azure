import { Player } from '../model/Player.ts';

export class TicTacToe {
  board: Player[];
  currentPlayer: Player;
  winner: Player | 'Draw';

  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
  }

  play(index: number): boolean {
    // Si la celda está ocupada o ya hay ganador, la jugada no es válida
    if (this.board[index] !== null || this.winner !== null) {
      return false;
    }

    this.board[index] = this.currentPlayer;
    this.checkWinner();

    // Cambiar de turno si nadie ha ganado aún
    if (!this.winner) {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    return true;
  }

  private checkWinner() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
      [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.board[a];
        return;
      }
    }

    // Si no hay ganador y el tablero está lleno, es empate
    if (!this.board.includes(null)) {
      this.winner = 'Draw';
    }
  }

  reset() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
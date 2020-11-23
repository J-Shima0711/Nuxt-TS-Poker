export type GameStatus = 'BEFORE_START' | 'EXCHANGE_TIME' | 'SHOW_RESULT'

export class GameManager {
  public status: GameStatus
  constructor() {
    this.status = 'BEFORE_START'
  }

  progress(): void {
    this.status =
      this.status === 'BEFORE_START'
        ? 'EXCHANGE_TIME'
        : this.status === 'EXCHANGE_TIME'
        ? 'SHOW_RESULT'
        : 'BEFORE_START'
  }

  nextGame(): void {
    this.status = 'EXCHANGE_TIME'
  }
}

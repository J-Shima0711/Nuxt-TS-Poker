import { Hand } from './hands/Hand'

export interface ResultBox {
  win: boolean
  lose: boolean
  draw: boolean
}

export class Result {
  constructor(private judgementTarget: Hand, private comparisonTarget: Hand) {}

  private isBothHighCard(): boolean {
    return this.judgementTarget.level === 0 && this.comparisonTarget.level === 0
  }

  private isDraw(): boolean {
    if (this.isBothHighCard()) {
      return (
        this.judgementTarget.mostHighCard() ===
        this.comparisonTarget.mostHighCard()
      )
    }
    return this.judgementTarget.level === this.comparisonTarget.level
  }

  private isJudgementTargetWon(): boolean {
    if (this.isDraw()) return false
    if (this.isBothHighCard()) {
      return (
        this.judgementTarget.mostHighCard() >
        this.comparisonTarget.mostHighCard()
      )
    }
    return this.judgementTarget.level > this.comparisonTarget.level
  }

  public getResult(): ResultBox {
    return {
      win: this.isJudgementTargetWon(),
      lose: !this.isJudgementTargetWon() && !this.isDraw(),
      draw: this.isDraw(),
    }
  }
}

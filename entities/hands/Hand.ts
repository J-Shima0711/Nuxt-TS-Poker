import { Card } from '../CardIF'

type rankCountObj = {
  rank: number
  count: number
}

export abstract class Hand {
  constructor(protected readonly cards: Card[]) {}
  public abstract level: number
  public abstract label: string
  abstract judge(): boolean
  isHigher(hand: Hand): boolean {
    return this.level > hand.level
  }

  protected rankList(): number[] {
    return this.cards
      .map((card) => card.rank)
      .sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
        return 0
      })
  }

  protected suitList(): string[] {
    return this.cards
      .map((card) => card.suit)
      .sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
        return 0
      })
  }

  protected excludedDuplicatesRank(): number[] {
    return Array.from(new Set(this.rankList()))
  }

  protected excludedDuplicatesSuit(): string[] {
    return Array.from(new Set(this.suitList()))
  }

  protected aggregationOfRank(): rankCountObj[] {
    return this.excludedDuplicatesRank().reduce((aggregationObj, baseRank) => {
      const baseObj: rankCountObj = {
        rank: baseRank,
        count: 0,
      }
      this.rankList().forEach((rank) => {
        if (rank === baseRank) baseObj.count++
      })
      aggregationObj.push(baseObj)
      return aggregationObj
    }, [] as rankCountObj[])
  }

  protected pieceCount(): number {
    return this.aggregationOfRank().reduce<number>((acc, cur) => {
      if (cur.count === 1) {
        acc += 1
      }
      return acc
    }, 0)
  }

  protected pairCount(): number {
    return this.aggregationOfRank().reduce<number>((acc, cur) => {
      if (cur.count === 2) {
        acc += 1
      }
      return acc
    }, 0)
  }

  protected hasThreeOfAKind(): boolean {
    return this.aggregationOfRank().some((cur) => {
      return cur.count === 3
    })
  }

  protected isStraight(): boolean {
    return (
      this.rankList()[0] + 4 === this.rankList()[4] &&
      this.excludedDuplicatesRank().length === 5
    )
  }

  protected isFlush(): boolean {
    return this.excludedDuplicatesSuit().length === 1
  }
}

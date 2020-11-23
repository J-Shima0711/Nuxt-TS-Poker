import { Card } from './CardIF'
import { Hand } from '~/entities/hands/Hand'
import { HighCard } from '~/entities/hands/HighCard'
import { OnePair } from '~/entities/hands/OnePair'
import { TwoPair } from '~/entities/hands/TwoPair'
import { ThreeOfAKind } from '~/entities/hands/ThreeOfAKind'
import { Straight } from '~/entities/hands/Straight'
import { Flush } from '~/entities/hands/Flush'
import { FullHouse } from '~/entities/hands/FullHouse'
import { Quads } from '~/entities/hands/Quads'
import { StraightFlush } from '~/entities/hands/StraightFlush'
import { RoyalFlush } from '~/entities/hands/RoyalFlush'
import { Deck } from '~/entities/Deck'

const hands = [
  OnePair,
  TwoPair,
  ThreeOfAKind,
  Straight,
  Flush,
  FullHouse,
  Quads,
  StraightFlush,
  RoyalFlush,
]

export type GameStatus = 'BEFORE_START' | 'EXCHANGE_TIME' | 'SHOW_RESULT'
export type Owner = 'CPU' | 'PLAYER'

export class GameBoard {
  public status: GameStatus
  public readonly owner: { [key: string]: Owner } = {
    cpu: 'CPU',
    player: 'PLAYER',
  } as const

  private deck: Deck
  constructor() {
    this.status = 'BEFORE_START'
    this.deck = new Deck(false)
  }

  makeHand(cards: Card[]): Hand {
    return hands.reduce((acc, Hand) => {
      const hand = new Hand(cards)
      if (hand.judge() && hand.isHigher(acc)) {
        return hand
      }
      return acc
    }, new HighCard(cards))
  }

  progressGame(): void {
    this.status =
      this.status === 'BEFORE_START'
        ? 'EXCHANGE_TIME'
        : this.status === 'EXCHANGE_TIME'
        ? 'SHOW_RESULT'
        : 'BEFORE_START'
  }

  dealCard(num: number): Card[] {
    return this.deck.deal(num)
  }

  exchangeCard(cards: Card[]): Card[] {
    this.deck.recovery(cards)
    return this.deck.deal(cards.length)
  }

  collectCard(cards: Card[]): void {
    this.deck.recovery(cards)
  }
}

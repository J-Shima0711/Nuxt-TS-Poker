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
import { GameManager, GameStatus } from '~/entities/GameStatus'
import { Result } from '~/entities/Result'

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

export class GameBoard {
  private manager: GameManager
  private deck: Deck
  renderKey: number

  constructor() {
    this.manager = new GameManager()
    this.deck = new Deck(false)
    this.renderKey = Math.random()
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

  dealCard(num: number): Card[] {
    return this.deck.deal(num)
  }

  exchangeCard(cards: Card[]): Card[] {
    this.deck.recovery(cards)
    return this.deck.deal(cards.length)
  }

  collectCard(cpuCards: Card[], playerCards: Card[]): void {
    this.deck.recovery(cpuCards)
    this.deck.recovery(playerCards)
  }

  progressGame(): void {
    this.manager.progress()
  }

  nextGame(): void {
    this.manager.nextGame()
  }

  status(): GameStatus {
    return this.manager.status
  }

  getResult(judgementTarget: Hand, comparisonTarget: Hand) {
    return new Result(judgementTarget, comparisonTarget).getResult()
  }
}

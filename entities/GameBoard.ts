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
  static makeHand(cards: Card[]): Hand {
    return hands.reduce((acc, Hand) => {
      const hand = new Hand(cards)
      if (hand.judge() && hand.isHigher(acc)) {
        return hand
      }
      return acc
    }, new HighCard(cards))
  }
}

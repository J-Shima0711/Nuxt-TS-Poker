import * as testData from './TestData'
import { GameBoard } from '~/entities/GameBoard'
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

describe('makeHand', () => {
  test('high card', () => {
    expect(GameBoard.makeHand(testData.HIGH_CARD)).toBeInstanceOf(HighCard)
  })
  test('one pair', () => {
    expect(GameBoard.makeHand(testData.ONE_PAIR)).toBeInstanceOf(OnePair)
  })
  test('two pair', () => {
    expect(GameBoard.makeHand(testData.TWO_PAIR)).toBeInstanceOf(TwoPair)
  })
  test('three of a kind', () => {
    expect(GameBoard.makeHand(testData.THREE_OF_A_KIND)).toBeInstanceOf(
      ThreeOfAKind
    )
  })
  test('straight', () => {
    expect(GameBoard.makeHand(testData.STRAIGHT)).toBeInstanceOf(Straight)
  })
  test('flush', () => {
    expect(GameBoard.makeHand(testData.FLUSH)).toBeInstanceOf(Flush)
  })
  test('full house', () => {
    expect(GameBoard.makeHand(testData.FULL_HOUSE)).toBeInstanceOf(FullHouse)
  })
  test('quads', () => {
    expect(GameBoard.makeHand(testData.QUADS)).toBeInstanceOf(Quads)
  })
  test('straight flush', () => {
    expect(GameBoard.makeHand(testData.STRAIGHT_FLUSH)).toBeInstanceOf(
      StraightFlush
    )
  })
  test('royal flush', () => {
    expect(GameBoard.makeHand(testData.ROYAL_FLUSH)).toBeInstanceOf(RoyalFlush)
  })
})

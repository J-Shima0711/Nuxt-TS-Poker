import { ThreeOfAKind } from '~/entities/hands/ThreeOfAKind'
import * as testData from '~/test/TestData'

describe('Unit Test', () => {
  test('hasThreeOfAKind() => true, pieceCount() => 2', () => {
    const hand = new ThreeOfAKind(testData.HIGH_CARD)
    const hasThreeOfAKind = jest
      .spyOn<any, any>(hand, 'hasThreeOfAKind')
      .mockReturnValue(true)
    const pieceCount = jest
      .spyOn<any, any>(hand, 'pieceCount')
      .mockReturnValue(2)
    expect(hand.judge()).toBeTruthy()
    expect(hasThreeOfAKind).toHaveBeenCalledTimes(1)
    expect(pieceCount).toHaveBeenCalledTimes(1)
  })
  test('hasThreeOfAKind() => false, pieceCount() => 2', () => {
    const hand = new ThreeOfAKind(testData.HIGH_CARD)
    const hasThreeOfAKind = jest
      .spyOn<any, any>(hand, 'hasThreeOfAKind')
      .mockReturnValue(false)
    const pieceCount = jest
      .spyOn<any, any>(hand, 'pieceCount')
      .mockReturnValue(2)
    expect(hand.judge()).toBeFalsy()
    expect(hasThreeOfAKind).toHaveBeenCalledTimes(1)
    expect(pieceCount).toHaveBeenCalledTimes(0)
  })
  test('hasThreeOfAKind() => true, pieceCount() => 0', () => {
    const hand = new ThreeOfAKind(testData.HIGH_CARD)
    const hasThreeOfAKind = jest
      .spyOn<any, any>(hand, 'hasThreeOfAKind')
      .mockReturnValue(true)
    const pieceCount = jest
      .spyOn<any, any>(hand, 'pieceCount')
      .mockReturnValue(0)
    expect(hand.judge()).toBeFalsy()
    expect(hasThreeOfAKind).toHaveBeenCalledTimes(1)
    expect(pieceCount).toHaveBeenCalledTimes(1)
  })
})

describe('Check all test data', () => {
  test('high card', () => {
    const hand = new ThreeOfAKind(testData.HIGH_CARD)
    expect(hand.judge()).toBeFalsy()
  })
  test('one pair', () => {
    const hand = new ThreeOfAKind(testData.ONE_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('two pair', () => {
    const hand = new ThreeOfAKind(testData.TWO_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('three of a kind', () => {
    const hand = new ThreeOfAKind(testData.THREE_OF_A_KIND)
    expect(hand.judge()).toBeTruthy()
  })
  test('straight', () => {
    const hand = new ThreeOfAKind(testData.STRAIGHT)
    expect(hand.judge()).toBeFalsy()
  })
  test('flush', () => {
    const hand = new ThreeOfAKind(testData.FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('full house', () => {
    const hand = new ThreeOfAKind(testData.FULL_HOUSE)
    expect(hand.judge()).toBeFalsy()
  })
  test('quads', () => {
    const hand = new ThreeOfAKind(testData.QUADS)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight flush', () => {
    const hand = new ThreeOfAKind(testData.STRAIGHT_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('royal flush', () => {
    const hand = new ThreeOfAKind(testData.ROYAL_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
})

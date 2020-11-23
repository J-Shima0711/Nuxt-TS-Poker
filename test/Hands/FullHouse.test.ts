import { FullHouse } from '~/entities/hands/FullHouse'
import * as testData from '~/test/TestData'

describe('Unit Test', () => {
  test('hasThreeOfAKind() => true & pairCount() => 1', () => {
    const hand = new FullHouse([])
    const hasThreeOfAKind = jest
      .spyOn<any, any>(hand, 'hasThreeOfAKind')
      .mockReturnValue(true)
    const pairCount = jest.spyOn<any, any>(hand, 'pairCount').mockReturnValue(1)
    expect(hand.judge()).toBeTruthy()
    expect(hasThreeOfAKind).toHaveBeenCalledTimes(1)
    expect(pairCount).toHaveBeenCalledTimes(1)
  })
  test('hasThreeOfAKind() => false & pairCount() => 1', () => {
    const hand = new FullHouse([])
    const hasThreeOfAKind = jest
      .spyOn<any, any>(hand, 'hasThreeOfAKind')
      .mockReturnValue(false)
    const pairCount = jest.spyOn<any, any>(hand, 'pairCount').mockReturnValue(1)
    expect(hand.judge()).toBeFalsy()
    expect(hasThreeOfAKind).toHaveBeenCalledTimes(1)
    expect(pairCount).toHaveBeenCalledTimes(0)
  })
  test('hasThreeOfAKind() => true & pairCount() => 0', () => {
    const hand = new FullHouse([])
    const hasThreeOfAKind = jest
      .spyOn<any, any>(hand, 'hasThreeOfAKind')
      .mockReturnValue(true)
    const pairCount = jest.spyOn<any, any>(hand, 'pairCount').mockReturnValue(0)
    expect(hand.judge()).toBeFalsy()
    expect(hasThreeOfAKind).toHaveBeenCalledTimes(1)
    expect(pairCount).toHaveBeenCalledTimes(1)
  })
})

describe('Check all test data', () => {
  test('high card', () => {
    const hand = new FullHouse(testData.HIGH_CARD)
    expect(hand.judge()).toBeFalsy()
  })
  test('one pair', () => {
    const hand = new FullHouse(testData.ONE_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('two pair', () => {
    const hand = new FullHouse(testData.TWO_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('three of a kind', () => {
    const hand = new FullHouse(testData.THREE_OF_A_KIND)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight', () => {
    const hand = new FullHouse(testData.STRAIGHT)
    expect(hand.judge()).toBeFalsy()
  })
  test('flush', () => {
    const hand = new FullHouse(testData.FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('full house', () => {
    const hand = new FullHouse(testData.FULL_HOUSE)
    expect(hand.judge()).toBeTruthy()
  })
  test('quads', () => {
    const hand = new FullHouse(testData.QUADS)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight flush', () => {
    const hand = new FullHouse(testData.STRAIGHT_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('royal flush', () => {
    const hand = new FullHouse(testData.ROYAL_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
})

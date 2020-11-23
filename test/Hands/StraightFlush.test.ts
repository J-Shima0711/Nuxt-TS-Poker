import { StraightFlush } from '~/entities/hands/StraightFlush'
import * as testData from '~/test/TestData'

describe('Unit Test', () => {
  test('isStraight() => true & isFlush() => true & excludedDuplicatesRank[0] = 9', () => {
    const hand = new StraightFlush(testData.HIGH_CARD)
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(true)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(true)
    const excludedDuplicatesRank = jest
      .spyOn<any, any>(hand, 'excludedDuplicatesRank')
      .mockReturnValue([9])
    expect(hand.judge()).toBeTruthy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(1)
    expect(excludedDuplicatesRank).toHaveBeenCalledTimes(1)
  })
  test('isStraight() => false & isFlush() => true & excludedDuplicatesRank[0] = 9', () => {
    const hand = new StraightFlush(testData.HIGH_CARD)
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(false)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(true)
    const excludedDuplicatesRank = jest
      .spyOn<any, any>(hand, 'excludedDuplicatesRank')
      .mockReturnValue([9])
    expect(hand.judge()).toBeFalsy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(0)
    expect(excludedDuplicatesRank).toHaveBeenCalledTimes(0)
  })
  test('isStraight() => true & isFlush() => false & excludedDuplicatesRank[0] = 9', () => {
    const hand = new StraightFlush(testData.HIGH_CARD)
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(true)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(false)
    const excludedDuplicatesRank = jest
      .spyOn<any, any>(hand, 'excludedDuplicatesRank')
      .mockReturnValue([9])
    expect(hand.judge()).toBeFalsy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(1)
    expect(excludedDuplicatesRank).toHaveBeenCalledTimes(0)
  })
  test('isStraight() => true & isFlush() => true & excludedDuplicatesRank[0] = 10', () => {
    const hand = new StraightFlush(testData.HIGH_CARD)
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(true)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(true)
    const excludedDuplicatesRank = jest
      .spyOn<any, any>(hand, 'excludedDuplicatesRank')
      .mockReturnValue([10])
    expect(hand.judge()).toBeFalsy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(1)
    expect(excludedDuplicatesRank).toHaveBeenCalledTimes(1)
  })
})

describe('Check all test data', () => {
  test('high card', () => {
    const hand = new StraightFlush(testData.HIGH_CARD)
    expect(hand.judge()).toBeFalsy()
  })
  test('one pair', () => {
    const hand = new StraightFlush(testData.ONE_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('two pair', () => {
    const hand = new StraightFlush(testData.TWO_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('three of a kind', () => {
    const hand = new StraightFlush(testData.THREE_OF_A_KIND)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight', () => {
    const hand = new StraightFlush(testData.STRAIGHT)
    expect(hand.judge()).toBeFalsy()
  })
  test('flush', () => {
    const hand = new StraightFlush(testData.FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('full house', () => {
    const hand = new StraightFlush(testData.FULL_HOUSE)
    expect(hand.judge()).toBeFalsy()
  })
  test('quads', () => {
    const hand = new StraightFlush(testData.QUADS)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight flush', () => {
    const hand = new StraightFlush(testData.STRAIGHT_FLUSH)
    expect(hand.judge()).toBeTruthy()
  })
  test('royal flush', () => {
    const hand = new StraightFlush(testData.ROYAL_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
})

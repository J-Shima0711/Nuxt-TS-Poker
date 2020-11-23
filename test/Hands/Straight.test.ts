import { Straight } from '~/entities/hands/Straight'
import * as testData from '~/test/TestData'

describe('Unit Test', () => {
  test('isStraight() => true & isFlush() => false', () => {
    const hand = new Straight([])
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(true)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(false)
    expect(hand.judge()).toBeTruthy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(1)
  })
  test('isStraight() => false & isFlush() => false', () => {
    const hand = new Straight([])
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(false)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(false)
    expect(hand.judge()).toBeFalsy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(0)
  })
  test('isStraight() => true & isFlush() => true', () => {
    const hand = new Straight([])
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(true)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(true)
    expect(hand.judge()).toBeFalsy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(1)
  })
})

describe('Check all test data', () => {
  test('high card', () => {
    const hand = new Straight(testData.HIGH_CARD)
    expect(hand.judge()).toBeFalsy()
  })
  test('one pair', () => {
    const hand = new Straight(testData.ONE_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('two pair', () => {
    const hand = new Straight(testData.TWO_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('three of a kind', () => {
    const hand = new Straight(testData.THREE_OF_A_KIND)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight', () => {
    const hand = new Straight(testData.STRAIGHT)
    expect(hand.judge()).toBeTruthy()
  })
  test('flush', () => {
    const hand = new Straight(testData.FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('full house', () => {
    const hand = new Straight(testData.FULL_HOUSE)
    expect(hand.judge()).toBeFalsy()
  })
  test('quads', () => {
    const hand = new Straight(testData.QUADS)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight flush', () => {
    const hand = new Straight(testData.STRAIGHT_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('royal flush', () => {
    const hand = new Straight(testData.ROYAL_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
})

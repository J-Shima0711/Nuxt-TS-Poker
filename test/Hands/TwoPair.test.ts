import { TwoPair } from '~/entities/hands/TwoPair'
import * as testData from '~/test/TestData'
import any = jasmine.any

describe('Unit Test', () => {
  test('pairCount() => 2', () => {
    const hand = new TwoPair([])
    const pairCount = jest.spyOn<any, any>(hand, 'pairCount').mockReturnValue(2)
    expect(hand.judge()).toBeTruthy()
    expect(pairCount).toHaveBeenCalledTimes(1)
  })
  test('pairCount() => 1', () => {
    const hand = new TwoPair([])
    const pairCount = jest.spyOn<any, any>(hand, 'pairCount').mockReturnValue(1)
    expect(hand.judge()).toBeFalsy()
    expect(pairCount).toHaveBeenCalledTimes(1)
  })
})

describe('Check all test data', () => {
  test('high card', () => {
    const hand = new TwoPair(testData.HIGH_CARD)
    expect(hand.judge()).toBeFalsy()
  })
  test('one pair', () => {
    const hand = new TwoPair(testData.ONE_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('two pair', () => {
    const hand = new TwoPair(testData.TWO_PAIR)
    expect(hand.judge()).toBeTruthy()
  })
  test('three of a kind', () => {
    const hand = new TwoPair(testData.THREE_OF_A_KIND)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight', () => {
    const hand = new TwoPair(testData.STRAIGHT)
    expect(hand.judge()).toBeFalsy()
  })
  test('flush', () => {
    const hand = new TwoPair(testData.FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('full house', () => {
    const hand = new TwoPair(testData.FULL_HOUSE)
    expect(hand.judge()).toBeFalsy()
  })
  test('quads', () => {
    const hand = new TwoPair(testData.QUADS)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight flush', () => {
    const hand = new TwoPair(testData.STRAIGHT_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('royal flush', () => {
    const hand = new TwoPair(testData.ROYAL_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
})

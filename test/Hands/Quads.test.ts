import { Quads } from '~/entities/hands/Quads'
import * as testData from '~/test/TestData'

describe('Unit Test', () => {
  test('exists an object with a count of 4 in aggregationOfRank()', () => {
    const hand = new Quads(testData.HIGH_CARD)
    const aggregationOfRank = jest
      .spyOn<any, any>(hand, 'aggregationOfRank')
      .mockReturnValue([{ rank: 14, count: 4 }])
    expect(hand.judge()).toBeTruthy()
    expect(aggregationOfRank).toHaveBeenCalledTimes(1)
  })
  test('does not exists an object with a count of 4 in aggregationOfRank()', () => {
    const hand = new Quads(testData.HIGH_CARD)
    const aggregationOfRank = jest
      .spyOn<any, any>(hand, 'aggregationOfRank')
      .mockReturnValue([{ rank: 14, count: 3 }])
    expect(hand.judge()).toBeFalsy()
    expect(aggregationOfRank).toHaveBeenCalledTimes(1)
  })
})

describe('Check all test data', () => {
  test('high card', () => {
    const hand = new Quads(testData.HIGH_CARD)
    expect(hand.judge()).toBeFalsy()
  })
  test('one pair', () => {
    const hand = new Quads(testData.ONE_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('two pair', () => {
    const hand = new Quads(testData.TWO_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('three of a kind', () => {
    const hand = new Quads(testData.THREE_OF_A_KIND)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight', () => {
    const hand = new Quads(testData.STRAIGHT)
    expect(hand.judge()).toBeFalsy()
  })
  test('flush', () => {
    const hand = new Quads(testData.FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('full house', () => {
    const hand = new Quads(testData.FULL_HOUSE)
    expect(hand.judge()).toBeFalsy()
  })
  test('quads', () => {
    const hand = new Quads(testData.QUADS)
    expect(hand.judge()).toBeTruthy()
  })
  test('straight flush', () => {
    const hand = new Quads(testData.STRAIGHT_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('royal flush', () => {
    const hand = new Quads(testData.ROYAL_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
})

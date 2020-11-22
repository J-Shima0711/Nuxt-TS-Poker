import { OnePair } from '~/entities/hands/OnePair'
import * as testData from '~/test/TestData'

describe('OnePair', () => {
  test('high card', () => {
    const hand = new OnePair(testData.HIGH_CARD)
    expect(hand.judge()).toBeFalsy()
  })
  test('one pair', () => {
    const hand = new OnePair(testData.ONE_PAIR)
    expect(hand.judge()).toBeTruthy()
  })
  test('two pair', () => {
    const hand = new OnePair(testData.TWO_PAIR)
    expect(hand.judge()).toBeFalsy()
  })
  test('three of a kind', () => {
    const hand = new OnePair(testData.THREE_OF_A_KIND)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight', () => {
    const hand = new OnePair(testData.STRAIGHT)
    expect(hand.judge()).toBeFalsy()
  })
  test('flush', () => {
    const hand = new OnePair(testData.FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('full house', () => {
    const hand = new OnePair(testData.FULL_HOUSE)
    expect(hand.judge()).toBeFalsy()
  })
  test('quads', () => {
    const hand = new OnePair(testData.QUADS)
    expect(hand.judge()).toBeFalsy()
  })
  test('straight flush', () => {
    const hand = new OnePair(testData.STRAIGHT_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
  test('royal flush', () => {
    const hand = new OnePair(testData.ROYAL_FLUSH)
    expect(hand.judge()).toBeFalsy()
  })
})

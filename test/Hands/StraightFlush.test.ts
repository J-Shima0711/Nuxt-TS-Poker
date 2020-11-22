import { StraightFlush } from '~/entities/hands/StraightFlush'
import * as testData from '~/test/TestData'

describe('StraightFlush', () => {
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

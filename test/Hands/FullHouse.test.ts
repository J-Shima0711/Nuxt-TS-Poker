import { FullHouse } from '~/entities/hands/FullHouse'
import * as testData from '~/test/TestData'

describe('FullHouse', () => {
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

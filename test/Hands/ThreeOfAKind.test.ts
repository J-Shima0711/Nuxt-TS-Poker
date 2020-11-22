import { ThreeOfAKind } from '~/entities/hands/ThreeOfAKind'
import * as testData from '~/test/TestData'

describe('ThreeOfAKind', () => {
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

import { Card } from '~/entities/CardIF'
import { Hand } from '~/entities/hands/Hand'
import { Straight } from '~/entities/hands/Straight'

class MockHand extends Hand {
  // テスト対象外
  level = 0
  label = 'test'
  judge(): boolean {
    return false
  }
  // ここまで

  rankList() {
    return super.rankList()
  }

  suitList() {
    return super.suitList()
  }

  excludedDuplicatesRank() {
    return super.excludedDuplicatesRank()
  }

  excludedDuplicatesSuit() {
    return super.excludedDuplicatesSuit()
  }

  aggregationOfRank() {
    return super.aggregationOfRank()
  }

  pieceCount(): number {
    return super.pieceCount()
  }

  pairCount(): number {
    return super.pairCount()
  }

  hasThreeOfAKind(): boolean {
    return super.hasThreeOfAKind()
  }

  isStraight(): boolean {
    return super.isStraight()
  }

  isFlush(): boolean {
    return super.isFlush()
  }
}

// テスト用なので整合性無し
const cards: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'S', label: '2', rank: 2 },
  { suit: 'S', label: '3', rank: 3 },
  { suit: 'S', label: '4', rank: 4 },
]

describe('Hand', () => {
  const mockHand = new MockHand(cards)

  test('create new instance', () => {
    expect(mockHand).toBeInstanceOf(Hand)
  })

  test('rankList', () => {
    expect(mockHand.rankList()).toEqual([2, 3, 4, 14, 14])
  })

  test('suitList', () => {
    expect(mockHand.suitList()).toEqual(['S', 'S', 'S', 'S', 'S'])
  })

  test('excludedDuplicatesRank', () => {
    expect(mockHand.excludedDuplicatesRank()).toEqual([2, 3, 4, 14])
  })

  test('excludedDuplicatesSuit', () => {
    expect(mockHand.excludedDuplicatesSuit()).toEqual(['S'])
  })

  test('aggregationOfRank', () => {
    expect(mockHand.aggregationOfRank()).toEqual([
      { rank: 2, count: 1 },
      { rank: 3, count: 1 },
      { rank: 4, count: 1 },
      { rank: 14, count: 2 },
    ])
  })

  test('mostHighCard', () => {
    const hand = new MockHand([
      { suit: 'S', label: 'A', rank: 14 },
      { suit: 'D', label: 'K', rank: 13 },
      { suit: 'S', label: 'Q', rank: 12 },
      { suit: 'D', label: 'J', rank: 11 },
      { suit: 'S', label: '10', rank: 10 },
    ])
    expect(hand.mostHighCard()).toBe(14)
  })

  test('pieceCount', () => {
    const hand = new MockHand([
      { suit: 'S', label: 'A', rank: 14 },
      { suit: 'D', label: 'K', rank: 13 },
      { suit: 'S', label: 'Q', rank: 12 },
      { suit: 'D', label: 'J', rank: 11 },
      { suit: 'S', label: '10', rank: 10 },
    ])
    expect(hand.pieceCount()).toBe(5)
  })

  test('pairCount', () => {
    const hand = new MockHand([
      { suit: 'S', label: 'A', rank: 14 },
      { suit: 'D', label: 'A', rank: 14 },
      { suit: 'S', label: 'Q', rank: 12 },
      { suit: 'D', label: 'Q', rank: 12 },
      { suit: 'S', label: '10', rank: 10 },
    ])
    expect(hand.pairCount()).toBe(2)
  })

  test('hasThreeOfAKind', () => {
    const hand = new MockHand([
      { suit: 'S', label: 'A', rank: 14 },
      { suit: 'D', label: 'A', rank: 14 },
      { suit: 'S', label: 'A', rank: 14 },
      { suit: 'D', label: 'J', rank: 11 },
      { suit: 'S', label: '10', rank: 10 },
    ])
    expect(hand.hasThreeOfAKind()).toBeTruthy()
  })

  test('isStraight', () => {
    const hand = new MockHand([
      { suit: 'S', label: 'A', rank: 14 },
      { suit: 'D', label: 'K', rank: 13 },
      { suit: 'S', label: 'Q', rank: 12 },
      { suit: 'D', label: 'J', rank: 11 },
      { suit: 'S', label: '10', rank: 10 },
    ])
    expect(hand.isStraight()).toBeTruthy()
  })

  test('isFlush', () => {
    const hand = new MockHand([
      { suit: 'S', label: 'A', rank: 14 },
      { suit: 'S', label: 'K', rank: 13 },
      { suit: 'S', label: 'Q', rank: 12 },
      { suit: 'S', label: 'J', rank: 11 },
      { suit: 'S', label: '10', rank: 10 },
    ])
    expect(hand.isFlush()).toBeTruthy()
  })
})

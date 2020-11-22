import { Card } from '~/entities/CardIF'

export const HIGH_CARD: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'D', label: 'K', rank: 13 },
  { suit: 'S', label: '2', rank: 2 },
  { suit: 'S', label: '3', rank: 3 },
  { suit: 'S', label: '4', rank: 4 },
]

export const ONE_PAIR: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'D', label: 'A', rank: 14 },
  { suit: 'S', label: '2', rank: 2 },
  { suit: 'S', label: '3', rank: 3 },
  { suit: 'S', label: '4', rank: 4 },
]

export const TWO_PAIR: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'D', label: 'A', rank: 14 },
  { suit: 'S', label: '2', rank: 2 },
  { suit: 'D', label: '2', rank: 2 },
  { suit: 'S', label: '4', rank: 4 },
]

export const THREE_OF_A_KIND: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'D', label: 'A', rank: 14 },
  { suit: 'H', label: 'A', rank: 14 },
  { suit: 'D', label: '2', rank: 2 },
  { suit: 'S', label: '4', rank: 4 },
]

export const STRAIGHT: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'D', label: 'K', rank: 13 },
  { suit: 'S', label: 'Q', rank: 12 },
  { suit: 'D', label: 'J', rank: 11 },
  { suit: 'S', label: '10', rank: 10 },
]

export const FLUSH: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'S', label: 'K', rank: 13 },
  { suit: 'S', label: 'Q', rank: 12 },
  { suit: 'S', label: 'J', rank: 11 },
  { suit: 'S', label: '9', rank: 9 },
]

export const FULL_HOUSE: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'D', label: 'A', rank: 14 },
  { suit: 'H', label: 'A', rank: 14 },
  { suit: 'D', label: '2', rank: 2 },
  { suit: 'S', label: '2', rank: 2 },
]

export const QUADS: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'D', label: 'A', rank: 14 },
  { suit: 'H', label: 'A', rank: 14 },
  { suit: 'C', label: 'A', rank: 14 },
  { suit: 'D', label: 'J', rank: 11 },
]

export const STRAIGHT_FLUSH: Card[] = [
  { suit: 'S', label: 'K', rank: 13 },
  { suit: 'S', label: 'Q', rank: 12 },
  { suit: 'S', label: 'J', rank: 11 },
  { suit: 'S', label: '10', rank: 10 },
  { suit: 'S', label: '9', rank: 9 },
]

export const ROYAL_FLUSH: Card[] = [
  { suit: 'S', label: 'A', rank: 14 },
  { suit: 'S', label: 'K', rank: 13 },
  { suit: 'S', label: 'Q', rank: 12 },
  { suit: 'S', label: 'J', rank: 11 },
  { suit: 'S', label: '10', rank: 10 },
]

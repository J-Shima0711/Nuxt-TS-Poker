import { Card } from './CardIF'

const suitList = ['S', 'C', 'D', 'H']
const cardList = [
  { rank: 2, label: '2' },
  { rank: 3, label: '3' },
  { rank: 4, label: '4' },
  { rank: 5, label: '5' },
  { rank: 6, label: '6' },
  { rank: 7, label: '7' },
  { rank: 8, label: '8' },
  { rank: 9, label: '9' },
  { rank: 10, label: '10' },
  { rank: 11, label: 'J' },
  { rank: 12, label: 'Q' },
  { rank: 13, label: 'K' },
  { rank: 14, label: 'A' },
]
const deckBase = suitList
  .map((suit) => {
    return cardList.map((card) => {
      return { suit, ...card }
    })
  })
  .flat()
  .map(Object.freeze) as Card[]

export class Deck {
  private _deck: object[]
  constructor(includesJoker: boolean) {
    this._deck = [...deckBase]
    if (includesJoker) {
      this._deck.push({ isWildCard: true, label: 'JO' })
    }
    this._deck.sort(() => Math.random() - 0.5)
  }

  deal(num: number): Card[] {
    return this._deck.splice(0, num) as Card[]
  }
}

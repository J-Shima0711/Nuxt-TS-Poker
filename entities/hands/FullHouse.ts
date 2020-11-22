import { Hand } from '~/entities/hands/Hand'

export class FullHouse extends Hand {
  level = 6
  label = 'Full House'
  judge(): boolean {
    return this.hasThreeOfAKind() && this.pairCount() === 1
  }
}

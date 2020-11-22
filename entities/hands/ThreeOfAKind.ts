import { Hand } from '~/entities/hands/Hand'

export class ThreeOfAKind extends Hand {
  level = 3
  label = 'Three of a Kind'
  judge(): boolean {
    return this.hasThreeOfAKind() && this.pieceCount() === 2
  }
}

import { Hand } from '~/entities/hands/Hand'

export class OnePair extends Hand {
  level = 1
  label = 'a Pair'
  judge(): boolean {
    return this.pieceCount() === 3 && this.pairCount() === 1
  }
}

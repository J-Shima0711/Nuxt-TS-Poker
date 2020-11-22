import { Hand } from '~/entities/hands/Hand'

export class TwoPair extends Hand {
  level = 2
  label = 'Two Pair'
  judge(): boolean {
    return this.pairCount() === 2
  }
}

import { Hand } from '~/entities/hands/Hand'

export class Straight extends Hand {
  level = 4
  label = 'Straight'
  judge(): boolean {
    return this.isStraight() && !this.isFlush()
  }
}

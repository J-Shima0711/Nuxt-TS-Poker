import { Hand } from '~/entities/hands/Hand'

export class Flush extends Hand {
  level = 5
  label = 'Flush'
  judge(): boolean {
    return !this.isStraight() && this.isFlush()
  }
}

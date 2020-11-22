import { Hand } from '~/entities/hands/Hand'

export class StraightFlush extends Hand {
  level = 8
  label = 'Straight Flush'
  judge(): boolean {
    return (
      this.isStraight() &&
      this.isFlush() &&
      this.excludedDuplicatesRank()[0] !== 10
    )
  }
}

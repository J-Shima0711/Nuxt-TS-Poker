import { Hand } from '~/entities/hands/Hand'

export class RoyalFlush extends Hand {
  level = 9
  label = 'Royal Flush'
  judge(): boolean {
    return (
      this.isStraight() &&
      this.isFlush() &&
      this.excludedDuplicatesRank()[0] === 10
    )
  }
}

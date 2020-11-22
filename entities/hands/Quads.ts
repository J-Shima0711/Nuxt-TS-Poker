import { Hand } from '~/entities/hands/Hand'

export class Quads extends Hand {
  level = 7
  label = 'Quads'
  judge(): boolean {
    return this.aggregationOfRank().some((cur) => {
      return cur.count === 4
    })
  }
}

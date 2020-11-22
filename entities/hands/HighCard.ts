import { Hand } from '~/entities/hands/Hand'

export class HighCard extends Hand {
  level = 0
  label = 'High Card'
  judge(): boolean {
    return false
  }
}

import { Flush } from '~/entities/hands/Flush'
import * as testData from '~/test/TestData'

describe('Flush', () => {
  test('isStraight return false and isFlush return true', () => {
    const hand = new Flush(testData.HIGH_CARD)
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(false)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(true)

    expect(hand.judge()).toBeTruthy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(1)
  })

  test('isStraight return false and isFlush return false', () => {
    const hand = new Flush(testData.HIGH_CARD)
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(false)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(false)

    expect(hand.judge()).toBeFalsy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(1)
  })

  test('isStraight return true', () => {
    const hand = new Flush(testData.HIGH_CARD)
    const isStraight = jest
      .spyOn<any, any>(hand, 'isStraight')
      .mockReturnValue(true)
    const isFlush = jest.spyOn<any, any>(hand, 'isFlush').mockReturnValue(true)

    expect(hand.judge()).toBeFalsy()
    expect(isStraight).toHaveBeenCalledTimes(1)
    expect(isFlush).toHaveBeenCalledTimes(0)
  })
})

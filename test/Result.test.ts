import { mocked } from 'ts-jest/utils'
// import * as testData from './TestData'
import { OnePair } from '~/entities/hands/OnePair'
import { Result } from '~/entities/Result'

jest.mock('~/entities/hands/OnePair')
const mockOnePair = OnePair as jest.Mock

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  mocked(OnePair).mockClear()
})

describe('Mock Test', () => {
  test('mock Hand', () => {
    mockOnePair.mockImplementationOnce(() => {
      return {
        level: 1,
        judge(): boolean {
          return true
        },
      }
    })
    const hand = new OnePair([])
    expect(mockOnePair).toHaveBeenCalled()
    expect(hand.level).toBe(1)
    expect(hand.judge()).toBeTruthy()
  })
})

describe('isBothHighCard()', () => {
  test('(judgementTarget.level = 0 & comparisonTarget.level) = 0 => true', () => {
    mockOnePair.mockImplementationOnce(() => {
      return {
        level: 0,
      }
    })
    const hand = new OnePair([])
    const result = new Result(hand, hand) as any
    expect(result.isBothHighCard()).toBeTruthy()
  })
  test('(judgementTarget.level = 0 & comparisonTarget.level = 1) => false', () => {
    mockOnePair.mockImplementation(() => {
      return {
        level: 0,
      }
    })
    const hand1 = new OnePair([])
    const hand2 = new OnePair([])
    hand2.level = 1
    const result = new Result(hand1, hand2) as any
    expect(result.isBothHighCard()).toBeFalsy()
  })
})

describe('isDraw()', () => {
  describe('isBothHighCard() => true', () => {
    test('judgementTarget.mostHighCard() = 1 & comparisonTarget.mostHighCard() = 1) => true', () => {
      mockOnePair.mockImplementation(() => {})
      const hand1 = new OnePair([])
      const hand2 = new OnePair([])
      const result = new Result(hand1, hand2) as any
      const mostHighCard1 = jest.spyOn(hand1, 'mostHighCard').mockReturnValue(1)
      const mostHighCard2 = jest.spyOn(hand2, 'mostHighCard').mockReturnValue(1)
      const isBothHighCard = jest
        .spyOn(result, 'isBothHighCard')
        .mockReturnValue(true)
      expect(result.isDraw()).toBeTruthy()
      expect(isBothHighCard).toHaveBeenCalledTimes(1)
      expect(mostHighCard1).toHaveBeenCalledTimes(1)
      expect(mostHighCard2).toHaveBeenCalledTimes(1)
    })
    test('judgementTarget.mostHighCard() = 1 & comparisonTarget.mostHighCard() = 2) => false', () => {
      mockOnePair.mockImplementation(() => {})
      const hand1 = new OnePair([])
      const hand2 = new OnePair([])
      const result = new Result(hand1, hand2) as any
      const mostHighCard1 = jest.spyOn(hand1, 'mostHighCard').mockReturnValue(1)
      const mostHighCard2 = jest.spyOn(hand2, 'mostHighCard').mockReturnValue(2)
      const isBothHighCard = jest
        .spyOn(result, 'isBothHighCard')
        .mockReturnValue(true)
      expect(result.isDraw()).toBeFalsy()
      expect(isBothHighCard).toHaveBeenCalledTimes(1)
      expect(mostHighCard1).toHaveBeenCalledTimes(1)
      expect(mostHighCard2).toHaveBeenCalledTimes(1)
    })
  })

  describe('isBothHighCard() => false', () => {
    test('judgementTarget.level = 1 & comparisonTarget.level = 1) => true', () => {
      mockOnePair.mockImplementation(() => {
        return {
          level: 1,
          mostHighCard(): number {
            return 1
          },
        }
      })
      const hand1 = new OnePair([])
      const hand2 = new OnePair([])
      const result = new Result(hand1, hand2) as any
      const mostHighCard1 = jest.spyOn(hand1, 'mostHighCard').mockReturnValue(1)
      const mostHighCard2 = jest.spyOn(hand2, 'mostHighCard').mockReturnValue(1)
      const isBothHighCard = jest
        .spyOn(result, 'isBothHighCard')
        .mockReturnValue(false)
      expect(result.isDraw()).toBeTruthy()
      expect(isBothHighCard).toHaveBeenCalledTimes(1)
      expect(mostHighCard1).toHaveBeenCalledTimes(0)
      expect(mostHighCard2).toHaveBeenCalledTimes(0)
    })
    test('judgementTarget.level = 1 & comparisonTarget.level = 2) => false', () => {
      mockOnePair.mockImplementation(() => {
        return {
          level: 1,
          mostHighCard(): number {
            return 1
          },
        }
      })
      const hand1 = new OnePair([])
      const hand2 = new OnePair([])
      hand2.level = 2
      const result = new Result(hand1, hand2) as any
      const mostHighCard1 = jest.spyOn(hand1, 'mostHighCard').mockReturnValue(1)
      const mostHighCard2 = jest.spyOn(hand2, 'mostHighCard').mockReturnValue(1)
      const isBothHighCard = jest
        .spyOn(result, 'isBothHighCard')
        .mockReturnValue(false)
      expect(result.isDraw()).toBeFalsy()
      expect(isBothHighCard).toHaveBeenCalledTimes(1)
      expect(mostHighCard1).toHaveBeenCalledTimes(0)
      expect(mostHighCard2).toHaveBeenCalledTimes(0)
    })
  })
})

describe('isJudgementTargetWon()', () => {
  test('isDraw() = true => false', () => {
    mockOnePair.mockImplementation(() => {})
    const hand = new OnePair([])
    const result = new Result(hand, hand) as any
    const isDraw = jest.spyOn(result, 'isDraw').mockReturnValue(true)
    expect(result.isJudgementTargetWon()).toBeFalsy()
    expect(isDraw).toHaveBeenCalledTimes(1)
  })
  describe('isDraw() = false & isBothHighCard() = true', () => {
    test('(judgementTarget.mostHighCard() = 1, comparisonTarget.mostHighCard() = 2) => false', () => {
      mockOnePair.mockImplementation(() => {})
      const hand1 = new OnePair([])
      const hand2 = new OnePair([])
      const result = new Result(hand1, hand2) as any
      const mostHighCard1 = jest.spyOn(hand1, 'mostHighCard').mockReturnValue(1)
      const mostHighCard2 = jest.spyOn(hand2, 'mostHighCard').mockReturnValue(2)
      const isDraw = jest.spyOn(result, 'isDraw').mockReturnValue(false)
      const isBothHighCard = jest
        .spyOn(result, 'isBothHighCard')
        .mockReturnValue(true)
      expect(result.isJudgementTargetWon()).toBeFalsy()
      expect(isDraw).toHaveBeenCalledTimes(1)
      expect(isBothHighCard).toHaveBeenCalledTimes(1)
      expect(mostHighCard1).toHaveBeenCalledTimes(1)
      expect(mostHighCard2).toHaveBeenCalledTimes(1)
    })
    test('(judgementTarget.mostHighCard() = 2, comparisonTarget.mostHighCard() = 1) => true', () => {
      mockOnePair.mockImplementation(() => {})
      const hand1 = new OnePair([])
      const hand2 = new OnePair([])
      const result = new Result(hand1, hand2) as any
      const mostHighCard1 = jest.spyOn(hand1, 'mostHighCard').mockReturnValue(2)
      const mostHighCard2 = jest.spyOn(hand2, 'mostHighCard').mockReturnValue(1)
      const isDraw = jest.spyOn(result, 'isDraw').mockReturnValue(false)
      const isBothHighCard = jest
        .spyOn(result, 'isBothHighCard')
        .mockReturnValue(true)
      expect(result.isJudgementTargetWon()).toBeTruthy()
      expect(isDraw).toHaveBeenCalledTimes(1)
      expect(isBothHighCard).toHaveBeenCalledTimes(1)
      expect(mostHighCard1).toHaveBeenCalledTimes(1)
      expect(mostHighCard2).toHaveBeenCalledTimes(1)
    })
  })
  describe('isDraw() = false & isBothHighCard() = false', () => {
    test('(judgementTarget.level = 1, comparisonTarget.level = 2) => false', () => {
      mockOnePair.mockImplementation(() => {})
      const hand1 = new OnePair([])
      const hand2 = new OnePair([])
      hand1.level = 1
      hand2.level = 2
      const result = new Result(hand1, hand2) as any
      const isDraw = jest.spyOn(result, 'isDraw').mockReturnValue(false)
      const isBothHighCard = jest
        .spyOn(result, 'isBothHighCard')
        .mockReturnValue(false)
      expect(result.isJudgementTargetWon()).toBeFalsy()
      expect(isDraw).toHaveBeenCalledTimes(1)
      expect(isBothHighCard).toHaveBeenCalledTimes(1)
    })
    test('(judgementTarget.level = 2, comparisonTarget.level = 1) => true', () => {
      mockOnePair.mockImplementation(() => {})
      const hand1 = new OnePair([])
      const hand2 = new OnePair([])
      hand1.level = 2
      hand2.level = 1
      const result = new Result(hand1, hand2) as any
      const isDraw = jest.spyOn(result, 'isDraw').mockReturnValue(false)
      const isBothHighCard = jest
        .spyOn(result, 'isBothHighCard')
        .mockReturnValue(false)
      expect(result.isJudgementTargetWon()).toBeTruthy()
      expect(isDraw).toHaveBeenCalledTimes(1)
      expect(isBothHighCard).toHaveBeenCalledTimes(1)
    })
  })
})

describe('getResult', () => {
  test('isJudgementTargetWon() = true, isDraw() = false', () => {
    mockOnePair.mockImplementation(() => {})
    const hand = new OnePair([])
    const result = new Result(hand, hand) as any
    const isJudgementTargetWon = jest
      .spyOn(result, 'isJudgementTargetWon')
      .mockReturnValue(true)
    const isDraw = jest.spyOn(result, 'isDraw').mockReturnValue(false)
    expect(result.getResult()).toEqual({
      win: true,
      lose: false,
      draw: false,
    })
    expect(isJudgementTargetWon).toHaveBeenCalledTimes(2)
    expect(isDraw).toHaveBeenCalledTimes(1)
  })
  test('isJudgementTargetWon() = false, isDraw() = false', () => {
    mockOnePair.mockImplementation(() => {})
    const hand = new OnePair([])
    const result = new Result(hand, hand) as any
    const isJudgementTargetWon = jest
      .spyOn(result, 'isJudgementTargetWon')
      .mockReturnValue(false)
    const isDraw = jest.spyOn(result, 'isDraw').mockReturnValue(false)
    expect(result.getResult()).toEqual({
      win: false,
      lose: true,
      draw: false,
    })
    expect(isJudgementTargetWon).toHaveBeenCalledTimes(2)
    expect(isDraw).toHaveBeenCalledTimes(2)
  })
  test('isJudgementTargetWon() = false, isDraw() = true', () => {
    mockOnePair.mockImplementation(() => {})
    const hand = new OnePair([])
    const result = new Result(hand, hand) as any
    const isJudgementTargetWon = jest
      .spyOn(result, 'isJudgementTargetWon')
      .mockReturnValue(false)
    const isDraw = jest.spyOn(result, 'isDraw').mockReturnValue(true)
    expect(result.getResult()).toEqual({
      win: false,
      lose: false,
      draw: true,
    })
    expect(isJudgementTargetWon).toHaveBeenCalledTimes(2)
    expect(isDraw).toHaveBeenCalledTimes(2)
  })
})

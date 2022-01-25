import { intervalToDuration } from 'date-fns';
import {
  getDeltaTimeFormatted,
  formatDurationAsTime,
} from './utils'

describe('Utils', () => {
  it('getDeltaTimeFormatted() should work well', () => {
    const start = new Date('2022-01-25T03:24:00.452');
    const end = new Date('2022-01-25T04:34:06.022');
    const correctResult = '1 hours, 10 mins, 5.570 secs';
    const result = getDeltaTimeFormatted(start, end)

    expect(result).toEqual(correctResult)
  })
  it('formatDurationAsTime() should work well', () => {
    const start = new Date('2022-01-25T03:24:00.452');
    const end = new Date('2022-01-25T04:34:06.022');
    const duration = intervalToDuration({ start, end })
    const correctResult = '1 h 10 min 5 secs'

    const result = formatDurationAsTime(duration)
    expect(result).toEqual(correctResult);
  })
})




import dayjs from 'dayjs';
import isYesterday from 'dayjs/plugin/isYesterday';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import weekday from 'dayjs/plugin/weekday';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
dayjs.extend(isYesterday);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(weekday);

export const formatEpochTime = (epochTimeMs) => {
  if(!epochTimeMs) return;
  const inputTime = dayjs(epochTimeMs);
  const now = dayjs();
  const startOfToday = now.startOf('day');
  const startOfThisYear = now.startOf('year');

  if (inputTime.isSame(startOfToday, 'day')) {
    // Today
    return inputTime.format('HH:mm');
  } else if (inputTime.isYesterday()) {
    // Yesterday
    return `昨天 ${inputTime.format('HH:mm')}`;
  } else if (inputTime.isSameOrAfter(startOfToday.subtract(6, 'days'))) {
    // Less than 7 days ago
    return `${inputTime.format('dddd')} ${inputTime.format('HH:mm')}`;
  } else if (inputTime.isSameOrAfter(startOfThisYear)) {
    // This year but more than 7 days ago
    return `${inputTime.format('MM/DD')} ${inputTime.format('HH:mm')}`;
  } else {
    // Previous years
    return `${inputTime.format('YYYY/MM/DD')} ${inputTime.format('HH:mm')}`;
  }
}

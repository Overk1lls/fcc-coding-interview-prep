const times = ['year', 'month', 'day', 'hour', 'minute', 'second'];

function formatToPlural(val, i) {
  return val > 1 ? `${times[i]}s` : times[i];
}

function formatWithCommas(str) {
  const split = str.split(' ');
  let result = '';

  split.forEach((s, i) => {
    if (!times.includes(s) && !times.includes(s.slice(0, -1))) {
      result += `${s} `;
    } else {
      result += s + (split[i + 1] === 'and' ? ' ' : ', ');
    }
  });
  return result.trimEnd().slice(0, -1);
}

/**
 * @example 62 => "1 minute and 2 seconds"
 * @example 3662 => "1 hour, 1 minute and 2 seconds"
 * @param {number} seconds
 */
export function formatDuration(seconds) {
  if (!seconds) {
    return 'now';
  }
  const yearSecs = 31536000;
  const monthSecs = 2592000;
  const daySecs = 3600 * 24;
  const hrSecs = 3600;
  const minSecs = 60;
  let leftSecs = seconds;
  let result = '';

  const years = Math.floor(seconds / yearSecs);
  if (years) {
    leftSecs -= years * yearSecs;
  }
  const months = Math.floor(leftSecs / yearSecs);
  if (months) {
    leftSecs -= months * monthSecs;
  }
  const days = Math.floor(leftSecs / daySecs);
  if (days) {
    leftSecs -= days * daySecs;
  }
  const hours = Math.floor(leftSecs / hrSecs);
  if (hours) {
    leftSecs -= hours * hrSecs;
  }
  const mins = Math.floor(leftSecs / minSecs);
  if (mins) {
    leftSecs -= mins * 60;
  }
  const resultArray = [years, months, days, hours, mins, leftSecs];
  let length = resultArray.length - 1;
  let val = resultArray[length];
  while (!val) {
    length -= 1;
    val = resultArray[length];
  }

  resultArray.forEach((res, i) => {
    if (res) {
      if (i === length) {
        if (resultArray.filter((v) => v !== 0).length === 1) {
          result += `${res} ${formatToPlural(res, i)}`;
        } else {
          result += `and ${res} ${formatToPlural(res, i)}`;
        }
      } else {
        result += `${res} ${formatToPlural(res, i)} `;
      }
    }
  });
  return formatWithCommas(result);
}

// `zh-CN` is not supported some versions of node
function formatDateInChinaTimezone(date: Date): string {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'Asia/Shanghai',
    timeZoneName: 'short',
  };

  return date
    .toLocaleDateString('en-US', dateOptions)
    .replace(
      /^(\d+)\/(\d+)\/(\d+), (.+)$/,
      (_, month, day, year, time) =>
        `${year}-${month}-${day} ${time}`
    );

}

console.log(formatDateInChinaTimezone(new Date()));

console.log(formatDateInChinaTimezone(new Date('2020-01-01T01:02:03.111Z')));

const text = {
  cn: {
    year: '年',
    month: '月',
    day: '日',
    days: ['今天 ', '昨天 ', '前天 '],
  },
}

export default function (time, { addZero = true, lang = 'cn' } = { addZero: true, lang: 'cn' }) {
  const date = new Date(time);
  const now = new Date();

  const map = text[lang];

  // 时间补0
  const hours = (date.getHours() >= 10 || !addZero)
    ? date.getHours()
    : ('0' + date.getHours());
  const minutes = (date.getMinutes() >= 10 || !addZero)
    ? date.getMinutes()
    : ('0' + date.getMinutes());

  if (now.getFullYear() !== date.getFullYear()) {
    return `${date.getFullYear()}${map.year}${date.getMonth() + 1}${map.month}${date.getDate() + 1}${map.day} ${hours}:${minutes}`
  }

  if (now.getMonth() === date.getMonth() && Math.abs(now.getDate() - date.getDate()) <= 2) {
    return `${map.days[Math.abs(now.getDate() - date.getDate())]} ${hours}:${minutes}`;
  }
  
  return `${date.getMonth() + 1}${map.month}${date.getDate() + 1}${map.day} ${hours}:${minutes}`;
}

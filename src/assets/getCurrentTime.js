export function getCurrentTime(number) {
  const minutes = number % 60;
  const hours = Math.floor(number / 60);
  const hoursCurrect = hours < 10 ? '0' + hours : hours;
  const minutesCurrect = minutes < 10 ? '0' + minutes : minutes;

  return `${hoursCurrect}ч:${minutesCurrect}м`;
}

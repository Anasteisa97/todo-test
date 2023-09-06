export const getRandomStringEnum = (eNum: { [s: string]: string }) : string => {
  const keys = Object.keys(eNum);
  const randomKeyNum = Math.floor(Math.random() * keys.length)
  const randomKeyString = keys[randomKeyNum];
  return eNum[randomKeyString]
}

export const getDateTemplate = (date: Date) : string => {
  const month = date.toLocaleString('en', { month: 'short' });
  const day = date.getDate();
  const time = date.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' });
  return `${month} ${day}, ${time}`
}
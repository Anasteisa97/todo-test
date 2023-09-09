export const getRandomStringEnum = (eNum: { [s: string]: string }) : string => {
  const keys: string[] = Object.keys(eNum);
  const randomKeyNum: number = Math.floor(Math.random() * keys.length)
  const randomKeyString: string = keys[randomKeyNum];
  return eNum[randomKeyString]
}

export const getDateTemplate = (date: Date) : string => {
  const month: string = date.toLocaleString('en', { month: 'short' });
  const day: number = date.getDate();
  const time: string = date.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' });
  return `${month} ${day}, ${time}`
}
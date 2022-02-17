export function stringToDate(data: string): string {
  const newDate = data.split('/').reverse().join('-')
  return newDate
}
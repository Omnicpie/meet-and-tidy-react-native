export const dayOfMonth = (isoDateString: string): number => {
  const d = new Date(isoDateString)
  return d.getDate()
}

export const shortMonthName = (isoDateString: string): string => {
  const d = new Date(isoDateString)
  const monthIndex = d.getMonth()
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  return months[monthIndex]
}

export const fullYear = (isoDateString: string): number => {
  const d = new Date(isoDateString)
  return d.getFullYear()
}

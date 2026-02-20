/**
 * Truncate text to a specified length
 * @param text - The text to truncate
 * @param maxLength - Maximum length (default: 100)
 * @param suffix - Suffix to add after truncation (default: '...')
 * @returns Truncated text
 */
export const truncateText = (
  text: string,
  maxLength: number = 100,
  suffix: string = '...'
): string => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + suffix
}

/**
 * Truncate text by words instead of characters
 * @param text - The text to truncate
 * @param maxWords - Maximum number of words
 * @param suffix - Suffix to add after truncation (default: '...')
 * @returns Truncated text
 */
export const truncateByWords = (
  text: string,
  maxWords: number = 20,
  suffix: string = '...'
): string => {
  if (!text) return ''
  
  const words = text.split(/\s+/)
  if (words.length <= maxWords) return text
  
  return words.slice(0, maxWords).join(' ') + suffix
}

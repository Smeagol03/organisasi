/**
 * Convert a string to a URL-friendly slug
 * @param text - The text to convert to slug
 * @returns Slugified string
 */
export const slugify = (text: string): string => {
  if (!text) return ''
  
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

/**
 * Generate a unique slug with a counter if needed
 * @param baseText - The base text to slugify
 * @param existingSlugs - Array of existing slugs to check against
 * @returns Unique slug
 */
export const generateUniqueSlug = (
  baseText: string,
  existingSlugs: string[]
): string => {
  const baseSlug = slugify(baseText)
  let slug = baseSlug
  let counter = 1
  
  while (existingSlugs.includes(slug)) {
    slug = `${baseSlug}-${counter}`
    counter++
  }
  
  return slug
}

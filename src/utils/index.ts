/**
 * 本地存储KEY
 */
export const storage = {
  dark: 'DARK',
  locale: 'LOCALE',
}

/**
 * 是否支持webp
 */
export const canUseWebp = () => {
  const elem = document.createElement('canvas')
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }
  return false
}

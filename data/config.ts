export const config = {
  blogEnabled: true,
  siteName: 'Portfolio',
  siteDescription: 'Personal portfolio website',
} as const

export type Config = typeof config

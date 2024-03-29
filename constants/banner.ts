import { BannerDescriptionComponent, Component } from '~/types/banner'

// constants
export const BANNER_CONTENT: (Component | BannerDescriptionComponent)[] = [
  {
    component: 'BannerDescription',
    title: 'Huei & Bei',
    description: ['Joyfully invite you to wedding celebration'],
    titleClasses: ['text-4xl', 'lg:text-5xl'],
  },
  {
    component: 'BasicLine',
    class: ['my-2'],
  },
  {
    component: 'BannerDescription',
    title: 'Sat, December, 11th, 2021',
    description: ['At 晶宴會館 - 民生館', '(台北市中山區民生東路三段 8 號 B2)'],
    titleClasses: [],
  },
]

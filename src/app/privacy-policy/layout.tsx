import { Metadata } from 'next';
import { ASSETS } from '../../assets';

const baseURL = 'https://linkwave.io';
const pageUrl = `${baseURL}/privacy-policy`;
const pageImage = ASSETS.logoGreen;
const title = `Privacy Policy | Your Custom Link to Infinite Horizons |`;
const description = 'Privacy Policy | Your Custom Link to Infinite Horizons |';

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: pageUrl,
    siteName: pageUrl,
    images: [
      {
        url: pageImage,
        secureUrl: pageImage,
        alt: 'Linkwave Logo',
      },
    ],

  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [
      {
        url: pageImage,
        secureUrl: pageImage,
        alt: 'Linkwave Logo',
      },
    ]
  }
}
export default function ChildLayout({ children }: { children: React.ReactNode }) {

    return children;
}

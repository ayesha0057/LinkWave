import { Metadata } from 'next';
import { ASSETS } from '../assets';
import ConfigWrapper from '../commonComponents/configsWrapper';

const baseURL = 'https://linkwave.io';
const pageUrl = `${baseURL}/`;
const pageImage = ASSETS.logoGreen;
const title = `Linkwave | Your Custom Link to Infinite Horizons |`;
const description = 'Linkwave | Your Custom Link to Infinite Horizons |';

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


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <ConfigWrapper>
          {children}
        </ConfigWrapper>
      </body>
    </html>
  );
}

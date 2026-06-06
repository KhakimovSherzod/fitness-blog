import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos', 'images.unsplash.com', 'media.istockphoto.com', 'i.pravatar.cc'],
  },
}

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

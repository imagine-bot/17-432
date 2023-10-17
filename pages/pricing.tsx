// ./pages/pricing.tsx
import Link from 'next/link';
import Pricing from '../components/Pricing';

const pricingTypes = [
  {
    type: 'Basic',
    price: 10,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    cta: 'Get Started',
  },
  {
    type: 'Pro',
    price: 20,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    cta: 'Go Pro',
  },
  {
    type: 'Enterprise',
    price: 30,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    cta: 'Contact Us',
  },
];

const PricingPage = () => (
  <div className="p-10">
    <Link href="/">
      <a>← Back to home</a>
    </Link>
    <Pricing pricingTypes={pricingTypes} />
  </div>
);

export default PricingPage;
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Simple E-commerce',
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="mb-8 relative w-full h-[400px]">
    
        <Image src="/online.jpg" alt="About Us" width={500} height={300} className="rounded" />

      </div>
      <p className="text-lg mb-4">
        Welcome to Simple E-commerce, your one-stop destination for all your needs. We pride ourselves on providing high-quality products at competitive prices.
      </p>
      <p className="text-lg mb-4">
        Our mission is to provide an exceptional shopping experience to our customers, with a wide range of products and excellent customer service.
      </p>
      <p className="text-lg">
        Thank you for choosing Simple E-commerce. Looking forward to serving you!
      </p>
    </div>
  );
}

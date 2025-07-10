import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import HeroCards from '@/components/HeroCards';

const MobileHomePage = () => {
  return (
    <div>
      <MaxWidthWrapper className="">
        <div className="grid grid-cols-1  items-baseline-last">
          <div className="text-3xl sm:text-4xl tracking-tight leading-tight mb-8 text-center">
            <h1>
              Premium{' '}
              <span className="bg-green-500 text-white border-2 border-green-700 px-2 rounded">
                Custom
              </span>{' '}
              Mobile{' '}
              <span className="bg-pink-700 text-white border-2 border-pink-800 px-2 rounded">
                Cases
              </span>{' '}
              Designed by You, Printed by <span className="underline">Us</span>
            </h1>
          </div>
          <div className="mb-8 text-lg text-gray-600 text-center">
            <h2>
              Tired of boring, generic phone cases? We print your design on{' '}
              <span className="font-bold text-gray-700">high-quality material</span> , fast. Here’s
              what makes us the custom cases:
            </h2>
          </div>{' '}
        </div>

        <div className="grid items-center">
          <div>
            <ul className="text-gray-600 text-lg mx-auto text-center lg:text-left mb-8 ">
              <li>✅ 100+ Device Support</li>
              <li>🎨 HD UV Printing</li>
              <li>🚚 Ships in 48 Hours</li>
              <li>💡 Easy Customizer</li>
              <li>🔒 Secure Checkout with Stripe</li>
            </ul>
          </div>
          <div className="text-center text-lg font-medium text-gray-800 space-y-1">
            <p className="text-gray-600">Don&apos;t have your own image?</p>
            <p className="text-pink-900">No worries!</p>
            <div className="lg:-ml-10">
              <HeroCards></HeroCards>
            </div>
            <p className="-mt-30 mb-30 text-center text-lg font-medium text-gray-800 space-y-1 underline underline-offset-4 cursor-pointer hover:text-pink-600 transition">
              Check out our collections →
            </p>{' '}
          </div>
          <div className=" flex flex-col gap-6 items-center">
            <Image src="/case.png" width={250} height={250} alt="Case" className="lg:hidden" />
            <ArrowDown className="text-pink-900 w-6 h-6 " />
            <Image src="/hero.png" width={250} height={250} alt="PrintedCase" className="" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MobileHomePage;

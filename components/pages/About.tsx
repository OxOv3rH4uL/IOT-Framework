// components/pages/About.js
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="bg-black flex flex-col items-center justify-center px-3">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
        WELCOME TO SPS-IOT Framework
      </h1>
      <p className="scroll-m-20 text-xl text-sky-200 font-semibold tracking-tight pt-5">
        Simplifying Raspberry Pi IoT setups with an intuitive PyQt5 interface.
        Seamlessly configure sensors, integrate with AWS S3, and unleash the
        power of IoT.
      </p>
      <Button variant={"outline"} size={"lg"} className="m-10">
      <Link href="/login">Try it now</Link>
      </Button>
    </div>
  );
}

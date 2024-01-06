
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserAuthForm from "@/components/auth/UserAuthForm";
import backimage from '../../assets/back.jpg';

const LoginPage = () => {
  return (
    <>
      <div className="md:hidden"></div>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
            <Image
            src={backimage}
            alt="SPS"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 18%"  
            priority
            className="absolute inset-1 w-full h-full object-cover"
          />

          <div className="relative z-20 flex items-center text-lg font-medium ">
            <div className="rounded-md p-2 text-white text-3xl">SPS-IOT</div>
          </div>
          <div className="relative z-20 mt-auto">
            
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {/* Create an account */}
                Sign in to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to login to your account
              </p>
            </div>
            <UserAuthForm/>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Not yet registered?{" "}
              <Link
                href="/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                Create an account
              </Link>{" "}
              .
            </p>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
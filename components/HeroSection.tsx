"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full pt-30 md:pt-38 pb-10">
      <div className="space-y-6 text-center">
        <motion.div
          className="space-y-6 mx-auto pb-2"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient font-extrabold tracking-tighter text-transparent bg-clip-text pb-1 pr-2"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your path to career success
            <br />
            starts with Pathwise
          </motion.h1>

          <motion.p
            className="mx-auto max-w-[500px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Advance your career with personalized guidance and AI-powered
            interview preparation tools designed to help you land your dream job
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Link href={"/dashboard"}>
            <Button size={"lg"} className="px-8">
              Take the First Step
            </Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button size={"lg"} className="px-8" variant={"outline"}>
              Take the First Step
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="pt-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <Image
            src={"/resume.jpg"}
            width={1280}
            height={720}
            alt="Pathwise"
            className="rounded-lg shadow-2xl border mx-auto priority"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

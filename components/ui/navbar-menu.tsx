"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-gray-300 font-medium text-sm"
      >
        {item}
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black/90 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-white/20 bg-black/80 backdrop-blur-md shadow-2xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 max-w-4xl mx-auto"
    >
      {/* Logo - Left Side */}
      <div className="flex-shrink-0">
        <Image 
          src="/brand-logohero.png" 
          alt="Fassiano Logo" 
          width={120}
          height={32}
          className="h-6 sm:h-8 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      
      {/* Center spacer - hidden on mobile */}
      <div className="hidden md:flex flex-1"></div>
      
      {/* Hook Text for Teaser Version - Right Side - Hidden on mobile */}
      <div className="hidden md:flex items-center justify-end">
        <h1 className="text-base lg:text-lg font-normal tracking-tight flex items-center gap-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
          <span className="text-white/90 hover:text-white transition-colors duration-300">
            Where Ancient Moroccan Art Meets Tomorrow
          </span>
          <Zap className="w-4 lg:w-5 h-4 lg:h-5 text-white/70 hover:text-white transition-colors duration-300" />
        </h1>
      </div>
      
      {/* Original menu items (hidden for teaser) */}
      <div className="hidden">
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-neutral-300 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-200 hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

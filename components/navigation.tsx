"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-6 sm:top-10 inset-x-0 max-w-4xl mx-auto z-50 px-4 sm:px-6", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Collection">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#hero">Premium Sneakers</HoveredLink>
            <HoveredLink href="#customization">Color Customization</HoveredLink>
            <HoveredLink href="#materials">Premium Materials</HoveredLink>
            <HoveredLink href="#limited">Limited Editions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Midnight Black"
              href="#customization"
              src="/premium-black-futuristic-sneaker-with-glowing-acce.jpg"
              description="Sophisticated and timeless premium sneaker."
            />
            <ProductItem
              title="Pearl White"
              href="#customization"
              src="/white-minimalist-futuristic-sneaker-with-clean-lin.jpg"
              description="Clean and modern design with luxury finish."
            />
            <ProductItem
              title="Gold Luxury"
              href="#customization"
              src="/gold-premium-futuristic-sneaker-with-luxury-finish.jpg"
              description="Premium and exclusive limited edition."
            />
            <ProductItem
              title="Space Edition"
              href="#customization"
              src="/futuristic-premium-sneaker-floating-in-space-with-.jpg"
              description="Futuristic design meets premium craftsmanship."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Experience">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#innovation">Innovation</HoveredLink>
            <HoveredLink href="#craftsmanship">Craftsmanship</HoveredLink>
            <HoveredLink href="#heritage">Heritage</HoveredLink>
            <HoveredLink href="#sustainability">Sustainability</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

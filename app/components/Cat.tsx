"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Cat = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="focus:ring-2 focus:ring-blue-500">
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <a href="/Oil">
            <DropdownMenuRadioItem value="top">Oil</DropdownMenuRadioItem>
          </a>
          <a href="/Refreshments">
            <DropdownMenuRadioItem value="top">
              Refreshments
            </DropdownMenuRadioItem>
          </a>
          <a href="/Potato-Fries">
            <DropdownMenuRadioItem value="top">
              Potato-Fries
            </DropdownMenuRadioItem>
          </a>
          <a href="/Ice-Cream">
            <DropdownMenuRadioItem value="top">Ice-Cream</DropdownMenuRadioItem>
          </a>
          <a href="/Condiments">
            <DropdownMenuRadioItem value="top">
              Condiments
            </DropdownMenuRadioItem>
          </a>
          <a href="/Chicken">
            <DropdownMenuRadioItem value="top">Chicken</DropdownMenuRadioItem>
          </a>
          <a href="/Bun">
            <DropdownMenuRadioItem value="top">Bun</DropdownMenuRadioItem>
          </a>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cat;

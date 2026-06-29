import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Maps uploaded filenames to their project categories.
 * Files should be placed in /public/images/<category>/
 *
 * Expected naming convention:
 *   Living Room: lr-01.jpg, lr-02.jpg, lr-03.jpg
 *   Kitchen:     k-01.jpg,  k-02.jpg,  k-03.jpg
 *   Bathroom:    b-01.jpg,  b-02.jpg,  b-03.jpg
 *   Bedroom:     bd-01.jpg, bd-02.jpg, bd-03.jpg
 *   Commercial:  c-01.jpg,  c-02.jpg,  c-03.jpg
 */
export const imageMap = {
  livingRoom: [
    "/images/living-room/lr-01.jpg",
    "/images/living-room/lr-02.jpg",
    "/images/living-room/lr-03.jpg",
  ],
  kitchen: [
    "/images/kitchen/k-01.jpg",
    "/images/kitchen/k-02.jpg",
    "/images/kitchen/k-03.jpg",
  ],
  bathroom: [
    "/images/bathroom/b-01.jpg",
    "/images/bathroom/b-02.jpg",
    "/images/bathroom/b-03.jpg",
  ],
  bedroom: [
    "/images/bedroom/bd-01.jpg",
    "/images/bedroom/bd-02.jpg",
    "/images/bedroom/bd-03.jpg",
  ],
  commercial: [
    "/images/commercial/c-01.jpg",
    "/images/commercial/c-02.jpg",
    "/images/commercial/c-03.jpg",
  ],
} as const;

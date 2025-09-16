/**
 * Utility functions for shadcn/ui components
 * 
 * This file contains helper functions used throughout the shadcn/ui components
 * for styling, class management, and other common operations.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names with intelligent merging
 * 
 * This is the core utility function used by all shadcn/ui components.
 * It combines multiple class name inputs and resolves conflicts using tailwind-merge.
 * 
 * @param inputs - Array of class names, objects, or conditional classes
 * @returns Merged and deduplicated class string
 * 
 * @example
 * ```tsx
 * // Basic usage
 * cn('px-2 py-1', 'text-sm')
 * // => 'px-2 py-1 text-sm'
 * 
 * // Conditional classes
 * cn('btn', isActive && 'btn-active', isDisabled && 'btn-disabled')
 * 
 * // Object syntax
 * cn('btn', {
 *   'btn-active': isActive,
 *   'btn-disabled': isDisabled
 * })
 * 
 * // Conflicting classes (tailwind-merge resolves)
 * cn('px-2 px-4') // => 'px-4' (later class wins)
 * cn('text-red-500', 'text-blue-500') // => 'text-blue-500'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * How to use the cn() function in your components:
 * 
 * 1. Import the function:
 *    import { cn } from "@/lib/utils"
 * 
 * 2. Use it to combine classes:
 *    <div className={cn("base-class", variant && "variant-class")} />
 * 
 * 3. The function handles:
 *    - String concatenation
 *    - Conditional classes
 *    - Object-based classes
 *    - Tailwind class conflicts
 *    - Duplicate removal
 * 
 * This pattern is used throughout all shadcn/ui components for consistent
 * and predictable styling behavior.
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { enUS, ruRU, trTR } from '@clerk/localizations'
import { uzUZ } from './uz-UZ'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function localization(lng: string) {
	if (lng === 'en') enUS
	if (lng === 'ru') ruRU
	if (lng === 'tr') trTR
	if (lng === 'uz') uzUZ
}

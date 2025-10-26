import LanguageDropdown from '@/components/shared/language-dropdown'
import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { AlignCenter, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import GlobalSearch from './global-search'
import ModeToggle from '@/components/shared/mode-toggle'

const Mobile = () => {
	const t = useTranslate()

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size={'icon'} variant={'ghost'} className='flex md:hidden'>
					<AlignCenter />
				</Button>
			</SheetTrigger>
			<SheetContent className='w-full' side={'top'}>
				<SheetHeader>
					<Logo />
					<Separator />
					<div className='pt-3 flex flex-col px-2'>
						{navLinks.map(nav => (
							<Link key={nav.name} href={nav.route}>
								<div className='flex gap-2 h-12 w-full cursor-pointer hover:text-blue-500 transition-all'>
									<nav.icon className='' />
									<span>{t(nav.name)}</span>
								</div>
							</Link>
						))}
					</div>
					<LanguageDropdown isMobile />
					<div className='flex justify-center gap-2'>
						<GlobalSearch />
						<Button size={'icon'} variant={'ghost'}>
							<ShoppingCart />
						</Button>
						<ModeToggle />
					</div>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile

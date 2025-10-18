import { Link } from '@heroui/link'
import { notoSerif, roboto_condensed } from '../fonts/fonts'
import Image from 'next/image'

const Footer = () => {
  const discordLink = 'https://discord.gg/eSrP6YzC5R'
  const email = 'hello@zenthos.dev'

  return (
    <div className='flex flex-col items-center flex-wrap backdrop-filter backdrop-blur-xs bg-gray-100/10 border-none h-36 py-4'>
      <div className={`${roboto_condensed.className} flex flex-row justify-around flex-wrap gap-x-8 w-1/2 max-w-[800px] min-w-[600px] items-start`}>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-thin'>Games</h1>
          <Link
            underline='hover'
            color='foreground'
            className='flex flex-row gap-x-1 text-base font-extralight' href='#'>
            DARKVALE
          </Link>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-thin'>Marketplaces</h1>
          <span className='text-base font-extralight'>Steam</span>
          <span className='text-base font-extralight'>Itch.io</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-thin'>Company</h1>
          <span className='text-base font-extralight'>Zenthos Games</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-thin'>Contact Us</h1>
          <Link
            underline='hover'
            isExternal
            color='foreground'
            showAnchorIcon
            anchorIcon={<Image
              src='/static/discord.svg'
              alt='Discord'
              height={18}
              width={18}
            />}
            className='flex flex-row gap-x-1' href={discordLink}>
            Discord
          </Link>
          <Link
            underline='hover'
            isExternal
            color='foreground'
            className='flex flex-row gap-x-1 text-base font-extralight' href={`mailto:${email}`}>
            {email}
          </Link>
        </div>
      </div>
      <div className='fixed bottom-2'>
        <span className={`${notoSerif.className} text-sm`}>Zenthos Games | {new Date().getFullYear()}</span>
      </div>
    </div>
  )
}

export default Footer

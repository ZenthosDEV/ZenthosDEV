import Image from 'next/image'
import { notoSerif } from '../fonts/fonts'
import Link from 'next/link'

const Subscribe = () => {

  return (
    <div className='flex items-center justify-center mt-6 mb-12 mx-72'>
      <div className='flex flex-col items-center justify-center gap-y-1 backdrop-blur-xs bg-gray-100/10 px-12 py-4 rounded-tr-4xl rounded-bl-4xl'>
        <Image
          src='/static/eye-red-black.png'
          alt='Zenthos-Eyes'
          width={120}
          height={47}
        />
        <div className='flex flex-col items-center'>
          <h1 className={`${notoSerif.className} text-lg`}>Subscribe & Follow</h1>
          <h1 className={`${notoSerif.className} text-3xl font-thin`}>Zenthos Games</h1>
          <div className='flex flex-row gap-x-6 items-center mt-1'>
            <Link target='_blank' href={"#"}>
              <Image
                src='/static/LogosFacebook.png'
                alt='facebook'
                width={30}
                height={30}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src='/static/LogosTiktokIcon.png'
                alt='tiktok'
                width={26}
                height={26}
              />
            </Link>
            <Link target='_blank' href={"https://www.youtube.com/@ZenthosDEV"}>
              <Image
                src='/static/LogosYoutubeIcon.png'
                alt='youtube'
                width={32}
                height={32}
              />
            </Link>
            <Link target='_blank' href={"https://discord.gg/eSrP6YzC5R"}>
              <Image
                src='/static/LogosDiscordIcon.png'
                alt='discord'
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Subscribe

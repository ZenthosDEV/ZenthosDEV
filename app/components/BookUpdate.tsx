import { Divider } from '@heroui/divider'
import { notoSerif } from '../fonts/fonts'
import NextImage from 'next/image'
import { Image } from '@heroui/image'

const BookUpdate = () => {
  return (
    <div className='mt-12 flex flex-col items-center'>
      <div className='flex flex-col backdrop-filter backdrop-blur-sm bg-gray-100/10 border-none rounded-full py-3 px-6'>
        <span className={`${notoSerif.className} text-2xl`}>Darkvale Story Book</span>
        <div className='flex w-full justify-center items-center'>
          <Divider className='w-1/3 max-w-64 h-[1px] bg-white/50' />
          <Image
            src="/static/circle-fill.svg"
            alt="circle"
            width={8}
            height={8}
            as={NextImage}
          />
          <Divider className='w-1/3 max-w-64 h-[1px] bg-white/50' />
        </div>
      </div>
      <div className='flex items-center justify-center gap-x-12 my-6 px-8 rounded-4xl mx-72 backdrop-filter backdrop-blur-sm bg-gray-100/10 border-none'>
        <div className='flex flex-col items-center gap-y-4 p-4'>
          <h1 className={`${notoSerif.className} text-2xl text-center w-96`}>Step into the Shadows of &quot;DARKVALE&quot;</h1>
          <p className={`${notoSerif.className} text-lg w-[450px] text-justify`}>
            {`Step into Blackwood, where every whisper hides a secret and every shadow tells a story.
            DARKVALE the official storybook of the upcoming thriller-horror video game takes you
            deep into a world of mystery, fear, and the unknown. Follow a detective’s desperate search for a
            missing police officer as he unravels a web of mysterious deaths, haunted secrets, and restless
            spirits that refuse to stay buried. Be the first to experience the full story behind
            one of the most anticipated horror games of the year.`}
          </p>
          <p className={`${notoSerif.className} text-lg w-[450px] text-center uppercase`}>{`Limited copies available! grab yours before the darkness consumes it all`}</p>
        </div>
        <div className='w-[462px]'>
          <Image
            src="/static/book_mockup.png"
            alt="circle"
            width={462}
            height={400}
            as={NextImage}
          />
        </div>
      </div>
    </div>
  )
}

export default BookUpdate

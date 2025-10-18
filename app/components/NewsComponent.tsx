import NextImage from 'next/image'
import { notoSerif } from '../fonts/fonts'
import { Link } from "@heroui/link";

type NewsComponentProps = {
  date: string,
  title: string,
  content: string
}

const NewsComponent = ({ date, title, content }: NewsComponentProps) => {
  return (
    <div className='flex gap-x-4 rounded-xl justify-between p-3 w-[480px] shadow-2xl bg-gray-500/20'>
      <div className='flex flex-col justify-between items-start'>
        <span className={`text-sm ${notoSerif.className}`}>{date}</span>
        <div className='flex flex-col items-start justify-center'>
          <h1 className={`text-wrap ${notoSerif.className} text-xl font-thin`}>{title}</h1>
          <span className={`text- text-xl ${notoSerif.className} font-medium`}>{content}</span>
        </div>
        <Link href="/" className={`text-sm ${notoSerif.className}`} underline='always' color='foreground'>Read..</Link>
      </div>
      <NextImage
        className='border-2 border-white rounded-xl'
        alt='vlog-image'
        src={'/static/image_news_01.png'}
        height={80}
        width={145}
      />
    </div>
  )
}

export default NewsComponent

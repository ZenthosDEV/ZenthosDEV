import { YouTubeEmbed } from '@next/third-parties/google'
import NewsComponent from './NewsComponent'
import { notoSerif } from '../fonts/fonts'

const News = () => {
  const data: {
    date: string,
    title: string,
    content: string
  }[] = [
      {
        date: '10th Oct 2024',
        title: 'Dev Update',
        content: 'Darkvale Game Development'
      },
      {
        date: '10th Sep 2025',
        title: 'Dev Update',
        content: 'Unity Animation Rigging'
      },
      {
        date: '27th Dec 2025',
        title: 'Game Update',
        content: '3D Model Creation in Blender'
      }
    ]

  return (
    <div className='flex items-center justify-center gap-x-12 my-6 mx-72'>
      <div className='flex flex-col gap-y-4 items-center'>
        <h1 className={`${notoSerif.className} uppercase text-3xl`}>Latest News!</h1>
        <div className='w-[500px]'>
          <YouTubeEmbed videoid="87jY6ViRebI" params="controls=0" />
        </div>
        <h1 className={`${notoSerif.className} text-xl`}>Official Trailer</h1>
      </div>
      <div className='flex flex-col gap-y-4'>
        {
          data.map(({ date, title, content }, index) => {
            return (
              <NewsComponent key={index} content={content} date={date} title={title} />
            )
          })
        }
      </div>
    </div>
  )
}

export default News

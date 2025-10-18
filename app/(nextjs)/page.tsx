import BookUpdate from '../components/BookUpdate'
import Hero from '../components/Hero'
import News from '../components/News'
import Subscribe from '../components/Subscribe'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <News/>
      <BookUpdate/>
      <Subscribe/>
    </div>
  )
}

export default page

import FloatingActionButton from './FloatingSocialButtons'
import ZenthosLogo from './Icons/ZenthosLogo'
import { Button, Card, Image, CardFooter } from '@heroui/react'
import VisitCounter from './VisitCounter'

const App = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dzgjua0zm/image/upload/h_1080,w_1920/q_auto:eco/5_jgs6up.png')" }}
    >
      <FloatingActionButton />
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 pt-16 items-center justify-center flex-col">
          <ZenthosLogo width={200} className='mb-8' />
          <img className="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded" alt="hero" src="/svg/darkvale.svg"></img>
        </div>
        <div className='flex justify-center text-red-800 font-light text-6xl mb-5 sm:text-8xl font-reborn uppercase'>Coming Zoon</div>
        <div className='flex justify-center mb-5 font-light text-4xl uppercase'>Posters</div>
        <div className='flex flex-col justify-center items-center gap-4 mb-5'>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_300/q_auto:eco/Poster_Portrait_txxiwg.jpg"
              width={300}
            />
            <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/nDTmgv8/Poster-Portrait.jpg', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_500/q_auto:eco/Poster_Landscape_bxrn3s.jpg"
              width={500}
            />
            <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/HXH4TYq/Poster-Landscape.jpg', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className='flex justify-center mb-5 mt-8 font-light text-4xl uppercase'>Ingame Footage</div>
        <div className='flex flex-wrap justify-center gap-4'>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_500/q_auto:eco/1_wnpkgm.png"
              width={450}
            />
            <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/VCGdPqz/1.png', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_500/q_auto:eco/2_svziqb.png"
              width={450}
            />
            <CardFooter className="justify-between overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/FhHCHTF/2.png', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_500/q_auto:eco/3_llvi5k.png"
              width={450}
            />
            <CardFooter className="justify-between overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/CzzchkW/3.png', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_500/q_auto:eco/4_ziy4xl.png"
              width={450}
            />
            <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/yffnTTS/4.png', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_500/q_auto:eco/5_jgs6up.png"
              width={450}
            />
            <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/PtKgGNT/5.png', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_500/q_auto:eco/6_wsmczf.png"
              width={450}
            />
            <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/6YRGBf0/6.png', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_500/q_auto:eco/7_y78ngt.png"
              width={450}
            />
            <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/YWfh2PW/7.png', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/w_500/q_auto:eco/8_gcm06n.png"
              width={450}
            />
            <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/VB4zzWM/8.png', "_blank")}
                className="text-base text-white bg-black/20"
                color="warning"
                radius="lg"
                size="md"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <div className='flex justify-center my-5'><VisitCounter /></div>
      <section className="text-white bg-gray-900 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-light uppercase title-font mb-2 text-white">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed italic text-base">"Every game is a symphony, ours is just beginning."</p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Madushan</h2>
                  <p className="text-gray-600">DevOps</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Sandupa</h2>
                  <p className="text-gray-600">3D Modeling & Environment</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Heshan</h2>
                  <p className="text-gray-600">Environment & Graphics Designing</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Sithnula</h2>
                  <p className="text-gray-600">Graphics Designing</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Nimsith</h2>
                  <p className="text-gray-600">Marketing</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Prakash H</h2>
                  <p className="text-gray-600">Audio Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center w-full mt-5">
            <p className="lg:w-2/3 mx-auto leading-relaxed italic text-base">2025 Zenthos, Zen Games</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

import { UilDiscord } from './Icons/UilDiscord'
import { UilGithub } from './Icons/UilGitub'
import { UilTwitter } from './Icons/UilTwitter'
import { UilWhatsapp } from './Icons/UilWhatsapp'
import { UilYoutube } from './Icons/UilYoutube'
import ZenthosLogo from './Icons/ZenthosLogo'
import { Button, Card, Image, Tooltip, CardFooter } from '@heroui/react'

const App = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/5_jgs6up.png')" }}
    >
      <div className="opacity-20 hover:opacity-100 transition-opacity duration-300 fixed bottom-10 right-4 flex flex-col gap-2" style={{ zIndex: 999 }}>
        <Tooltip className="capitalize bg-red-800 text-white" placement='left' content='WhatsApp'>
          <Button isIconOnly className='my-2 flex items-center justify-center bg-[#990d0f] text-white' radius='full'><UilWhatsapp height={25} width={25} /></Button>
        </Tooltip>
        <Tooltip className="capitalize bg-red-800 text-white" placement='left' content='Github'>
          <Button
            onPress={() => window.open('https://github.com/ZenthosDEV', "_blank")}
            isIconOnly className='my-2 flex items-center justify-center bg-[#990d0f] text-white' radius='full'><UilGithub height={25} width={25} /></Button>
        </Tooltip>
        <Tooltip className="capitalize bg-red-800 text-white" placement='left' content='Discord'>
          <Button
            onPress={() => window.open('https://discord.gg/KhN8BBtGYD', "_blank")}
            isIconOnly className='my-2 flex items-center justify-center bg-[#990d0f] text-white' radius='full'><UilDiscord height={25} width={25} /></Button>
        </Tooltip>
        <Tooltip className="capitalize bg-red-800 text-white" placement='left' content='YouTube'>
          <Button isIconOnly className='my-2 flex items-center justify-center bg-[#990d0f] text-white' radius='full'><UilYoutube height={25} width={25} /></Button>
        </Tooltip>
        <Tooltip className="capitalize bg-red-800 text-white" placement='left' content='Twitter'>
          <Button isIconOnly className='my-2 flex items-center justify-center bg-[#990d0f] text-white' radius='full'><UilTwitter height={25} width={25} /></Button>
        </Tooltip>
      </div>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
          <ZenthosLogo width={200} className='mb-8' />
          <img className="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded" alt="hero" src="/svg/darkvale.svg"></img>
        </div>
        <div className='flex justify-center mb-5 font-light text-4xl uppercase'>Posters</div>
        <div className='flex flex-col justify-center items-center gap-4 mb-5'>
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover"
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/Poster_Portrait_txxiwg.jpg"
              width={300}
            />
            <CardFooter className="justify-between  border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/nDTmgv8/Poster-Portrait.jpg', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
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
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/Poster_Landscape_bxrn3s.jpg"
              width={500}
            />
            <CardFooter className="justify-between  border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/HXH4TYq/Poster-Landscape.jpg', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
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
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/1_wnpkgm.png"
              width={450}
            />
            <CardFooter className="justify-between  border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/VCGdPqz/1.png', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
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
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/2_svziqb.png"
              width={450}
            />
            <CardFooter className="justify-between overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/FhHCHTF/2.png', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
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
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/3_llvi5k.png"
              width={450}
            />
            <CardFooter className="justify-between  border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/CzzchkW/3.png', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
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
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/4_ziy4xl.png"
              width={450}
            />
            <CardFooter className="justify-between  border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/yffnTTS/4.png', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
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
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/5_jgs6up.png"
              width={450}
            />
            <CardFooter className="justify-between  border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/PtKgGNT/5.png', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
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
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/6_wsmczf.png"
              width={450}
            />
            <CardFooter className="justify-between  border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/6YRGBf0/6.png', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
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
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/7_y78ngt.png"
              width={450}
            />
            <CardFooter className="justify-between  border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/YWfh2PW/7.png', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
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
              src="https://res.cloudinary.com/dzgjua0zm/image/upload/q_auto:low/8_gcm06n.png"
              width={450}
            />
            <CardFooter className="justify-between  border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                onPress={() => window.open('https://i.ibb.co/VB4zzWM/8.png', "_blank")}
                className="text-tiny text-white bg-black/20"
                color="warning"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Download
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="text-white mt-5 bg-gray-900 body-font">
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
                  <h2 className="text-white title-font font-medium">Chalangana</h2>
                  <p className="text-gray-600">Graphics Designing & Marketing</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">Nimsith</h2>
                  <p className="text-gray-600">Marcketing</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">H Wave Studio</h2>
                  <p className="text-gray-600">Audio Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

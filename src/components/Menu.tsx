import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
export default function Menu() {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 3,
      spacing: 1,
    },
  })
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Il nostro menù
        </h2>
        <p className="mt-4 leading-7 text-gray-600">
          Il nostro menù è ricco di piatti tipici della tradizione pugliese,
          come le orecchiette cime di rape, purè di fave e cicorielle e molto
          altro ancora.
        </p>
      </div>
      <div className="mt-16 w-full flex flex-col items-center">
        <div ref={sliderRef} className="keen-slider h-96">
          <div className="keen-slider__slide">
            <Zoom>
              <img alt="" src="/menu.jpg" className="rounded-lg h-96" />
            </Zoom>
          </div>
          <div className="keen-slider__slide">
            <Zoom>
              <img alt="" src="/menu.jpg" className="rounded-xl h-96" />
            </Zoom>
          </div>
          <div className="keen-slider__slide ">
            <Zoom>
              <img alt="" src="/menu.jpg" className="rounded-xl h-96" />
            </Zoom>
          </div>
        </div>
        <a
          href="#"
          className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-20"
        >
          Scarica il menù
        </a>
      </div>
    </div>
  )
}

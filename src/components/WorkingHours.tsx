import React from 'react'
import Image from 'next/image'

const workingHours = [
  {
    day: 'Lunedì',
    hours: 'Chiuso',
  },
  {
    day: 'Martedì',
    hours: '19:00 - 22:30',
  },
  {
    day: 'Mercoledì - Domenica',
    hours: '12:00 - 14:30 / 19:00 - 22:30',
  },
]
export default function WorkingHours() {
  return (
    <div className="bg-white py-16 px-6">
      <div
        id="orari"
        className="mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-2"
      >
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Orari di apertura
          </h2>
          <div className="leading-7 text-gray-600 mt-10">
            {workingHours.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-1 text-sm md:text-base text"
              >
                <p>{item.day}</p>
                <p className="text-right">{item.hours}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-5 md:mt-10 lg:mx-10 ">
          <Image
            src="/contact.avif"
            alt="Orari di apertura"
            width={1200}
            height={800}
            style={{ width: '100%', height: 'auto' }}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

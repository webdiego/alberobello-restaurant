import React from 'react'
import Image from 'next/image'

const workingHours = [
  {
    day: 'Lunedì',
    hours: 'Chiuso',
  },
  {
    day: 'Martedì',
    hours: '12:00 - 14:30 / 19:00 - 22:30',
  },
  {
    day: 'Mercoledì',
    hours: '12:00 - 14:30 / 19:00 - 22:30',
  },
  { day: 'Giovedì', hours: '12:00 - 14:30 / 19:00 - 22:30' },
  { day: 'Venerdì', hours: '12:00 - 14:30 / 19:00 - 22:30' },
  { day: 'Sabato', hours: '12:00 - 14:30 / 19:00 - 22:30' },
  { day: 'Domenica', hours: '12:00 - 14:30 / 19:00 - 22:30 ' },
]
export default function WorkingHours() {
  return (
    <div className="bg-white mt-28 px-6">
      <div
        id="orari"
        className="mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2"
      >
        <div className="max-w-sm">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Orari di apertura
          </h2>
          <div className="leading-7 text-gray-600 mt-10">
            {workingHours.map((item, index) => (
              <div key={index} className="flex justify-between py-1">
                <p>{item.day}</p>
                <p>{item.hours}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-5 md:mt-0">
          <Image
            src="/contact.avif"
            alt="Orari di apertura"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

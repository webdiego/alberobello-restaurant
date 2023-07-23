import React from 'react'

export default function Map() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-28">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Dove siamo
        </h2>
        <p className="mt-4 leading-7 text-gray-600">
          Se desideri prenotare o avere informazioni, contattaci ai seguenti
          recapiti:
        </p>
      </div>
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11175.600707594893!2d9.0897469!3d45.5523336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478695d6fe4f7a59%3A0x2e9d774a229fa6f0!2sAlberobello!5e0!3m2!1sit!2ses!4v1690021083724!5m2!1sit!2ses"
          width="100%"
          height="450"
          style={{
            border: 0,
            borderRadius: '.8rem',
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

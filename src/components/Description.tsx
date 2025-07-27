/* eslint-disable @next/next/no-img-element */
import Gallery from './Gallery'
export default function Example() {
  return (
    <div className="overflow-hidden bg-white mt-28">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              La nostra filosofia
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Il nostro ristorante è il luogo ideale per gustare i piatti tipici
              della cucina pugliese, preparati con ingredienti freschi e di
              stagione, e per trascorrere una serata in compagnia.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              La nostra filosofia è quella di offrire ai nostri clienti
              un’esperienza culinaria unica, che li faccia sentire a casa, in un
              ambiente accogliente e familiare.
            </p>
          </div>
          <div className="hidden lg:flex flex-wrap items-start justify-end gap-6 sm:gap-8  ">
            <div className=" w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="https://images.unsplash.com/photo-1571081538808-612772b00e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Burrata"
                className="hidden lg:block aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover object-left"
              />
              <img
                src="https://images.unsplash.com/photo-1571081538808-612772b00e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Pizza"
                className="lg:hidden aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover object-left"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="https://static.gamberorosso.it/2021/04/orecchiette-con-le-cime-di-rapa.jpg"
                  alt="Orecchiette con le cime di rapa"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="https://plus.unsplash.com/premium_photo-1669261880961-ea68f9a2b7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Polpo alla griglia"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-fill"
                />
              </div>
              <div className="border-2 hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Pizza"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden mt-10">
        <Gallery />
      </div>
    </div>
  )
}

import Image from 'next/image'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'
const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })
import { motion } from 'framer-motion'
export default function Example() {
  return (
    <div className="bg-white">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-10 lg:px-8 ">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <Image src="/logo.png" width={125} height={125} alt="logo" />
              <h1
                className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-5 ${pacifico.className}`}
              >
                Ristorante Alberobello
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                La Puglia è una regione ricca di storia e di tradizioni, che si
                riflettono anche nella sua cucina. La cucina pugliese è semplice
                e genuina, fatta di ingredienti semplici e di stagione, che
                vengono lavorati con cura e passione per ottenere piatti gustosi
                e ricchi di sapore.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/menu"
                  className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Scopri il menù
                </Link>
                <Link
                  href="/#contatti"
                  className="rounded-md border-2 border-gray-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-slate-00 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Contatti
                </Link>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <motion.img
                    initial={{ y: '-10px', opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    src="https://plus.unsplash.com/premium_photo-1676528716924-2ce3caaec811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2591&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <motion.img
                    initial={{ y: '-10px', opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    src="https://images.unsplash.com/photo-1565855307023-a04f63ba6a4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                </div>
                <div className="relative">
                  <motion.img
                    initial={{ y: '-10px', opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    src="https://images.unsplash.com/photo-1642114979822-c130e1db32d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <motion.img
                    initial={{ y: '-10px', opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    src="https://images.unsplash.com/photo-1634469489748-3cb1c5fe4148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                </div>
                <div className="relative">
                  <motion.img
                    initial={{ y: '-10px', opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    src="https://images.unsplash.com/photo-1571403712587-f99cedc8cf99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

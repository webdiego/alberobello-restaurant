import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  return (
    <div className="bg-white pyt-10 px-6">
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div
            className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3"
            id="contatti"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contatti
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Se desideri prenotare o avere informazioni, contattaci ai
                seguenti recapiti:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-5">
              <div className="rounded-2xl bg-gray-50 p-10 border">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2">
                    <PhoneIcon />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Telefono
                  </h3>
                </div>
                <dl className="mt-2 space-y-1  text-gray-600">
                  <div>
                    <dd>
                      <a className="text-gray-700" href="tel:+39 02 8129 0676">
                        +39 02 8129 0676
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 border">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2">
                    <AtSymbolIcon />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Email
                  </h3>
                </div>
                <dl className="mt-2 space-y-1  text-gray-600">
                  <div>
                    <dd>
                      <a
                        className="text-gray-700"
                        href="mailto: alberobelloristorante@gmail.com"
                      >
                        alberobelloristorante@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

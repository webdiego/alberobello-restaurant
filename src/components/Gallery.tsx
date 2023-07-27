import React from 'react'

export default function Gallery() {
  return (
    <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="pointer-events-none relative flex gap-10 overflow-hidden">
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
          <img
            className="img-gallery"
            src="https://static.gamberorosso.it/2021/04/orecchiette-con-le-cime-di-rapa.jpg"
            alt=""
          />
          <img
            className="img-gallery"
            src="https://plus.unsplash.com/premium_photo-1669261880961-ea68f9a2b7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
          <img
            className="img-gallery"
            src="https://blog.giallozafferano.it/sayummy/wp-content/uploads/2014/10/04-ottobre-2014-04-50-11-DSC_4138.jpg"
            alt=""
          />
          <img
            className="img-gallery"
            src="https://images.unsplash.com/photo-1555072930-714bba1d24e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <img
            className="img-gallery"
            src="https://images.unsplash.com/photo-1627626775846-122b778965ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div
          aria-hidden="true"
          className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10"
        >
          <img
            className="img-gallery"
            src="https://static.gamberorosso.it/2021/04/orecchiette-con-le-cime-di-rapa.jpg"
            alt=""
          />
          <img
            className="img-gallery"
            src="https://plus.unsplash.com/premium_photo-1669261880961-ea68f9a2b7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
          <img
            className="img-gallery"
            src="https://blog.giallozafferano.it/sayummy/wp-content/uploads/2014/10/04-ottobre-2014-04-50-11-DSC_4138.jpg"
            alt=""
          />
          <img
            className="img-gallery"
            src="https://images.unsplash.com/photo-1555072930-714bba1d24e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <img
            className="img-gallery"
            src="https://images.unsplash.com/photo-1627626775846-122b778965ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

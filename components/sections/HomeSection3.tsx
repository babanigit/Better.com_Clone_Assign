import React from 'react'
import Image from "next/image";

const HomeSection3 = () => {
  return (
    
    <section className="section w-full pb-base lg:pb-12">
    <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
      <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
        <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 text-xl md:text-2xl md:tracking-tight w-full max-w-lg !text-3xl tracking-tight">
          Got questions <br /> We&apos;ve got answers
        </h2>{" "}
        <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&amp;::-webkit-scrollbar]:w-0 [&amp;::-webkit-scrollbar]:h-0">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary">
            Our products
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto">
            Calculators
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto">
            Guides &amp; FAQs
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6">
        <a
          className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&amp;>Image]:h-[100%] md:[&amp;>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&amp;>img]:max-w-none lg:[&amp;:nth-child(2)>*]:flex-1 lg:[&amp;:nth-child(2)>img]:h-[100%] lg:[&amp;:nth-child(2)>img]:max-w-[285px] lg:[&amp;:nth-child(2)]:max-w-none lg:[&amp;:nth-child(2)]:basis-3/5 lg:[&amp;:nth-child(2)]:flex-row lg:[&amp;:nth-child(2)]:gap-10 lg:[&amp;:nth-child(3)>*]:flex-1 lg:[&amp;:nth-child(3)>img]:h-[100%] lg:[&amp;:nth-child(3)>img]:max-w-[285px] lg:[&amp;:nth-child(3)]:max-w-none lg:[&amp;:nth-child(3)]:basis-3/5 lg:[&amp;:nth-child(3)]:flex-row-reverse lg:[&amp;:nth-child(3)]:gap-10"
          href="/content/buying-your-first-home-with-better-mortgage/"
        >
          <div className="flex flex-col gap-6">
            <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
              Buying your first home with Better
            </h4>
            <div className="flex items-end justify-between">
              <div className="group">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.843384"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#A4A8A4"
                  ></rect>
                  <path
                    d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                    fill="#004733"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Image
            alt="First Home"
            rel="preconnect"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
            style={{ color: "transparent" }}
            src="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
          />
        </a>
        <a
          className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&amp;>img]:h-[100%] md:[&amp;>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&amp;>img]:max-w-none lg:[&amp;:nth-child(2)>*]:flex-1 lg:[&amp;:nth-child(2)>img]:h-[100%] lg:[&amp;:nth-child(2)>img]:max-w-[285px] lg:[&amp;:nth-child(2)]:max-w-none lg:[&amp;:nth-child(2)]:basis-3/5 lg:[&amp;:nth-child(2)]:flex-row lg:[&amp;:nth-child(2)]:gap-10 lg:[&amp;:nth-child(3)>*]:flex-1 lg:[&amp;:nth-child(3)>img]:h-[100%] lg:[&amp;:nth-child(3)>img]:max-w-[285px] lg:[&amp;:nth-child(3)]:max-w-none lg:[&amp;:nth-child(3)]:basis-3/5 lg:[&amp;:nth-child(3)]:flex-row-reverse lg:[&amp;:nth-child(3)]:gap-10"
          href="/b/one-day-mortgage/"
        >
          <div className="flex flex-col gap-6">
            <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
              One Day Mortgage<sup>1</sup>
            </h4>
            <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
              Kick your home loan into hyperdrive. Going from locked rate to
              Commitment Letter takes weeks for traditional lenders. We do
              it in a single day. Traditional lenders deliver a Commitment
              Letter in a few weeks.<sup>1</sup>
            </p>
            <div className="flex items-end justify-between">
              <div className="group">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.843384"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#A4A8A4"
                  ></rect>
                  <path
                    d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                    fill="#004733"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Image
            alt="One day mortgage"
            rel="preconnect"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
            style={{ color: "transparent" }}
            src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
          />
        </a>
        <a
          className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&amp;>img]:h-[100%] md:[&amp;>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&amp;>img]:max-w-none lg:[&amp;:nth-child(2)>*]:flex-1 lg:[&amp;:nth-child(2)>img]:h-[100%] lg:[&amp;:nth-child(2)>img]:max-w-[285px] lg:[&amp;:nth-child(2)]:max-w-none lg:[&amp;:nth-child(2)]:basis-3/5 lg:[&amp;:nth-child(2)]:flex-row lg:[&amp;:nth-child(2)]:gap-10 lg:[&amp;:nth-child(3)>*]:flex-1 lg:[&amp;:nth-child(3)>img]:h-[100%] lg:[&amp;:nth-child(3)>img]:max-w-[285px] lg:[&amp;:nth-child(3)]:max-w-none lg:[&amp;:nth-child(3)]:basis-3/5 lg:[&amp;:nth-child(3)]:flex-row-reverse lg:[&amp;:nth-child(3)]:gap-10"
          href="/b/heloc/"
        >
          <div className="flex flex-col gap-6">
            <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
              Better HELOC
            </h4>
            <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">
              Introducing One Day HELOC™—your express lane to getting cash
              from your home with our Home Equity Line of Credit<sup>2</sup>
              . Access up to 90% of your home equity as cash in as little as
              7 days.<sup>3</sup>
            </p>
            <div className="flex items-end justify-between">
              <div className="group">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.843384"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#A4A8A4"
                  ></rect>
                  <path
                    d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                    fill="#004733"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Image
            alt="Better HELOC"
            rel="preconnect"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
            style={{ color: "transparent" }}
            src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
          />
        </a>
        <a
          className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&amp;>img]:h-[100%] md:[&amp;>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&amp;>img]:max-w-none lg:[&amp;:nth-child(2)>*]:flex-1 lg:[&amp;:nth-child(2)>img]:h-[100%] lg:[&amp;:nth-child(2)>img]:max-w-[285px] lg:[&amp;:nth-child(2)]:max-w-none lg:[&amp;:nth-child(2)]:basis-3/5 lg:[&amp;:nth-child(2)]:flex-row lg:[&amp;:nth-child(2)]:gap-10 lg:[&amp;:nth-child(3)>*]:flex-1 lg:[&amp;:nth-child(3)>img]:h-[100%] lg:[&amp;:nth-child(3)>img]:max-w-[285px] lg:[&amp;:nth-child(3)]:max-w-none lg:[&amp;:nth-child(3)]:basis-3/5 lg:[&amp;:nth-child(3)]:flex-row-reverse lg:[&amp;:nth-child(3)]:gap-10"
          href="https://www.bettercover.com"
        >
          <div className="flex flex-col gap-6">
            <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
              Insurance
            </h4>
            <div className="flex items-end justify-between">
              <div className="group">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.843384"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#A4A8A4"
                  ></rect>
                  <path
                    d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                    fill="#004733"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Image
            alt="Insurance"
            rel="preconnect"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="w-full rounded-base object-cover h-[160px] md:h-[130px]"
            style={{ color: "transparent" }}
            src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
          />
        </a>
      </div>
    </div>
  </section>
  )
}

export default HomeSection3
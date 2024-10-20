
import React from 'react'

const McSection1 = () => {
  return (
    <section className="bg-successBackground py-16">
    <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
      <div className="flex·flex-col·justify-between·gap-x-lg">
        <div className="flex-1">
          <h1 className="font-bold text-textPrimary leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter">
            Mortgage calculator
          </h1>
          <p className="font-normal leading-body m-0 p-0 text-left text-base my-lg pb-base text-textSecondary lg:max-w-3xl">
            Our mortgage calculator includes key factors like homeowners
            association fees, property taxes, and private mortgage insurance
            (PMI). Get the whole picture and calculate your total monthly
            payment.
          </p>
          <div className="mb-lg flex w-full items-end gap-base">
            <div className="grow">
              <div className="w-full max-w-[300px]">
                <label
                  className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-sm md:text-base"
                  htmlFor="home-price"
                >
                  Home price
                </label>
                <div className="z-0 relative w-full text-lg md:text-[40px]">
                  <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl lg:h-4xl">
                    <div
                      aria-hidden="true"
                      data-testid="input-icon-box"
                      className="top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 text-xl lg:text-3xl w-lg h-lg flex items-center justify-center lg:top-[30px] left-xs"
                    >
                      $
                    </div>
                    <input
                      data-qa="home-price"
                      name="home-price"
                      type="tel"
                      data-labelalign="top"
                      id="input-home-price"
                      autoCapitalize="off"
                      autoCorrect="off"
                      aria-invalid="false"
                      className="text-left relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border pl-[32px] text-xl lg:text-3xl"
                      value="300,000"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="w-full max-w-[300px]">
                <p className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-sm md:text-base">
                  Monthly payment
                </p>
                <p
                  className="leading-body m-0 p-0 text-left my-lg flex h-[30px] items-baseline overflow-hidden text-xl font-bold text-textPrimary md:my-none md:h-2xl lg:h-4xl lg:text-3xl"
                  data-qa="monthly-payment"
                >
                  $2,146/mo
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center min-w-[220px]"
                href="/preapproval/nxt-purchase"
              >
                Get pre-approved
              </a>
            </div>
          </div>
          <div className="relative mx-lg mt-8 mb-lg">
            <input
              type="range"
              min="50000"
              max="3000000"
              step="100"
              className="bg-textPrimary [&amp;::-webkit-slider-thumb]:bg-textPrimary rounded-base w-full cursor-pointer appearance-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;::-moz-range-thumb]:h-2.5 [&amp;::-moz-range-thumb]:w-2.5 [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:rounded-full [&amp;::-moz-range-thumb]:border-4 [&amp;::-moz-range-thumb]:transition-all [&amp;::-moz-range-thumb]:duration-150 [&amp;::-moz-range-thumb]:ease-in-out [&amp;::-moz-range-track]:h-2 [&amp;::-moz-range-track]:w-full [&amp;::-moz-range-track]:rounded-full [&amp;::-moz-range-track]:bg-gray-100 [&amp;::-webkit-slider-runnable-track]:h-1 [&amp;::-webkit-slider-runnable-track]:w-full [&amp;::-webkit-slider-runnable-track]:rounded-full [&amp;::-webkit-slider-runnable-track]:bg-gray-100 [&amp;::-webkit-slider-runnable-track]:dark:bg-neutral-700 [&amp;::-webkit-slider-thumb]:-mt-1.5 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:transition-all [&amp;::-webkit-slider-thumb]:duration-150 [&amp;::-webkit-slider-thumb]:ease-in-out [&amp;::-webkit-slider-thumb]:dark:bg-neutral-700"
              id="min-and-max-range-slider-usage"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(41, 43, 41) 8.47%, #c8c9c6 8.47% 100%)",
              }}
              value="300000"
            />
          </div>
          <div className="mt-xl hidden md:block">
            <div className="gap-x-5xl gap-y-px lg:flex">
              <div className="flex flex-col md:flex-row flex-1 mb-base gap-base">
                <div className="flex-1">
                  <div className="z-0 relative">
                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                      <label
                        htmlFor="input-1"
                        id="1-label"
                        className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                      >
                        ZIP code
                      </label>{" "}
                      <input
                        type="tel"
                        data-labelalign="top"
                        id="input-1"
                        autoCapitalize="off"
                        autoCorrect="off"
                        className="text-left px-sm pb-none pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                        value="400017"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="w-9/12 ">
                    <div className="z-0 relative [&amp;>div:first-of-type]:rounded-r-none">
                      <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                        <label
                          htmlFor="input-downpayment"
                          id="downpayment-label"
                          className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                        >
                          Down payment
                        </label>
                        <div
                          aria-hidden="true"
                          data-testid="input-icon-box"
                          className="mr-xs absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center top-[24px] left-xs"
                        >
                          $
                        </div>
                        <input
                          data-qa="downpayment"
                          name="downpayment"
                          type="tel"
                          data-labelalign="top"
                          id="input-downpayment"
                          autoCapitalize="off"
                          autoCorrect="off"
                          aria-invalid="false"
                          className="text-left px-sm pb-none pl-[32px] pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                          value="60,000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-3/12 min-w-3xl">
                    <div className="z-0 relative flex [&amp;>div:first-of-type]:rounded-l-none [&amp;>div:first-of-type]:border-l-0">
                      <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                        <div
                          aria-hidden="true"
                          data-testid="input-icon-box"
                          className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center right-xs"
                        >
                          %
                        </div>
                        <input
                          data-qa="down-payment-ratio"
                          data-labelalign="top"
                          id="input-2"
                          autoCapitalize="off"
                          autoCorrect="off"
                          className="text-left px-sm pb-none relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                          value="20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row flex-1 mb-base gap-base">
                <div className="flex-1">
                  <div className="z-0 relative">
                    <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                      <label
                        htmlFor="input-3"
                        id="3-label"
                        className="leading-body text-interactiveForegroundMuted absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal"
                      >
                        Interest rate
                      </label>
                      <div
                        aria-hidden="true"
                        data-testid="input-icon-box"
                        className="mr-xs absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center top-[24px] right-xs"
                      >
                        %
                      </div>
                      <input
                        data-labelalign="top"
                        id="input-3"
                        autoCapitalize="off"
                        autoCorrect="off"
                        className="text-left px-sm pb-none pt-[10px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                        value="6.500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative w-full">
                    <label
                      className="leading-body m-0 p-0 text-left text-interactiveForegroundMuted absolute left-base origin-top-left transition-all duration-300 ease-in-out z-1 top-[7px] text-xs font-normal"
                      htmlFor="4"
                    >
                      Length of loan
                    </label>
                    <select
                      id="4"
                      className="truncate font-bold text-interactiveForegroundTertiary appearance-none bg-backgroundTertiary outline-none rounded-base border border-solid border-strokeBorder px-base w-full h-3xl p-2xs pb-none pt-base duration-300 ease-in-out z-0 focus:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] focus:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_3px_inset] hover:shadow-accentBorderSecondary flex-1"
                    >
                      <option value="30" label="30 years">
                        30 years
                      </option>
                      <option value="20" label="20 years">
                        20 years
                      </option>
                      <option value="15" label="15 years">
                        15 years
                      </option>
                    </select>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-xs"
                    >
                      <path d="M7 9.5L12 14.5L17 9.5H7Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "var(--spacing-xsmall)", // Assuming 'spacing.xsmall' is defined in your CSS or a design system
                rowGap: "var(--spacing-xsmall)", // Replace with actual value if not defined in CSS
              }}
            >
              <a
                className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center min-w-[220px]"
                href="/preapproval/nxt-purchase"
              >
                Get pre-approved
              </a>
            </div>
            <button className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundTertiary bg-transparent border border-solid border-strokeBorder hover:text-interactivePrimary hover:border-transparent hover:shadow-[0_0_0_4px_inset] hover:shadow-accentBorderSecondary focus:border-transparent focus:shadow-accentBorderSecondary active:text-interactivePrimary px-xl h-3xl mt-lg flex w-full items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-plus "
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add details
            </button>
            <div
              className="p-base bg-backgroundPrimary px-lg shadow-lg fixed left-0 top-[70px] w-full z-[10000] invisible opacity-0"
              data-qa="mobile-header"
              style={{
                transition: `opacity var(--motion-easing-universal) var(--motion-timing-T3) 0s, visibility 0s var(--motion-timing-T4)`,
              }}
            >
              <div className="grid grid-cols-2 gap-xl">
                <div>
                  <p className="leading-body m-0 p-0 text-left text-textSecondary text-sm mb-xs font-bold">
                    Home price
                  </p>
                  <p
                    className="leading-body m-0 p-0 text-base rounded-base bg-interactiveForegroundSecondary py-xs text-center font-bold text-textInversePrimary"
                    data-qa="mobile-header-home-price"
                  >
                    $300,000
                  </p>
                </div>
                <div>
                  <p className="leading-body m-0 p-0 text-left text-textSecondary text-sm mb-xs font-bold">
                    Monthly payment
                  </p>
                  <p
                    className="leading-body m-0 p-0 text-left text-textSecondary text-base pt-xs font-bold"
                    data-qa="mobile-header-monthly-payment"
                  >
                    $2,146/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default McSection1
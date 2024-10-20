import React from "react";

const McSection2 = () => {
  return (
    <>
      <section className="bg-accentBorderInverseSecondary pt-4xl">
        <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
          <div className="grid md:grid-cols-2">
            <div>
              <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
                Monthly payment breakdown
              </h4>
              <p
                className="leading-body m-0 p-0 text-left mt-lg overflow-hidden text-3xl font-bold text-textPrimary"
                data-testid="sum"
              >
                $2,146/mo
              </p>
              <div className="mt-2xl">
                <svg
                  height="100"
                  id="svgelem"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    data-testid="principalPill"
                    height="80"
                    rx="40"
                    ry="40"
                    className="duration-300 ease-in-out fill-backgroundInverseSecondary"
                    width="373.2413793103448"
                    x="0"
                    y="0"
                  ></rect>
                  <rect
                    data-testid="taxesPill"
                    height="80"
                    rx="32.60018639328984"
                    ry="32.60018639328984"
                    className="duration-300 ease-in-out fill-infoSecondary"
                    width="65.20037278657968"
                    x="373.2413793103448"
                    y="0"
                  ></rect>
                  <rect
                    data-testid="insurancePill"
                    height="80"
                    rx="16.238583410997204"
                    ry="16.238583410997204"
                    className="duration-300 ease-in-out fill-graph2Tertiary"
                    width="32.47716682199441"
                    x="438.4417520969245"
                    y="0"
                  ></rect>
                  <rect
                    data-testid="hoaPill"
                    height="80"
                    rx="16.238583410997204"
                    ry="16.238583410997204"
                    className="duration-300 ease-in-out fill-graph4Tertiary"
                    width="32.47716682199441"
                    x="470.9189189189189"
                    y="0"
                  ></rect>
                  <rect
                    data-testid="utilitiesPill"
                    height="80"
                    rx="12.301957129543336"
                    ry="12.301957129543336"
                    className="duration-300 ease-in-out fill-graph3Tertiary"
                    width="24.60391425908667"
                    x="503.3960857409133"
                    y="0"
                  ></rect>
                  0
                </svg>
                <div className="md: block p-lg mt-2xl rounded-base shadow-[0_0_12px_rgba(41,43,41,0.12)] opacity-0 duration-300 ease-in-out">
                  <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg mb-lg">
                    Homeowners insurance
                  </h4>
                  <p
                    className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                    data-testid="description"
                  >
                    This is an estimate of your monthly premium.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between h-3xl mb-base">
                <div className="flex items-center text-textPrimary w-1/2">
                  <div className="rounded-sm h-base w-[5px] mr-xs bg-backgroundInverseSecondary"></div>
                  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
                    Principal &amp; interest
                  </p>
                </div>
                <p
                  className="leading-body m-0 p-0 text-base pt-0 items-center text-left w-1/2 sm:w-[160px] flex font-bold text-interactiveForegroundSecondary"
                  data-testid="principal-&amp;-interest"
                >
                  $1,517
                </p>
              </div>
              <div className="flex justify-between h-3xl mb-base">
                <div className="flex items-center text-textPrimary w-1/2">
                  <div className="rounded-sm h-base w-[5px] mr-xs bg-infoSecondary"></div>
                  <label
                    className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                    htmlFor="input-taxes"
                    id="taxes-label"
                  >
                    Property taxes
                  </label>
                </div>
                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                  <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                    <div
                      aria-hidden="true"
                      data-testid="input-icon-box"
                      className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                    >
                      $
                    </div>
                    <input
                      aria-describedby="taxes-help-text"
                      name="taxes"
                      role="textbox"
                      type="number"
                      data-labelalign="top"
                      id="input-taxes"
                      autoCapitalize="off"
                      autoCorrect="off"
                      aria-errormessage="taxes-help-text"
                      className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                      value="265"
                    />
                  </div>
                  <div
                    className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                    id="taxes-help-text"
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-3xl mb-base">
                <div className="flex items-center text-textPrimary w-1/2">
                  <div className="rounded-sm h-base w-[5px] mr-xs bg-graph2Tertiary"></div>
                  <label
                    className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                    htmlFor="input-insurance"
                    id="insurance-label"
                  >
                    Homeowners insurance
                  </label>
                </div>
                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                  <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                    <div
                      aria-hidden="true"
                      data-testid="input-icon-box"
                      className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                    >
                      $
                    </div>
                    <input
                      aria-describedby="insurance-help-text"
                      name="insurance"
                      role="textbox"
                      type="number"
                      data-labelalign="top"
                      id="input-insurance"
                      autoCapitalize="off"
                      autoCorrect="off"
                      aria-errormessage="insurance-help-text"
                      className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                      value="132"
                    />
                  </div>
                  <div
                    className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                    id="insurance-help-text"
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-3xl mb-base">
                <div className="flex items-center text-textPrimary w-1/2">
                  <div className="rounded-sm h-base w-[5px] mr-xs bg-graph4Tertiary"></div>
                  <label
                    className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                    htmlFor="input-hoa"
                    id="hoa-label"
                  >
                    HOA fees
                  </label>
                </div>
                <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                  <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl">
                    <div
                      aria-hidden="true"
                      data-testid="input-icon-box"
                      className="mr-xs top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 w-lg h-lg flex items-center justify-center left-xs"
                    >
                      $
                    </div>
                    <input
                      aria-describedby="hoa-help-text"
                      name="hoa"
                      role="textbox"
                      type="number"
                      data-labelalign="top"
                      id="input-hoa"
                      autoCapitalize="off"
                      autoCorrect="off"
                      aria-errormessage="hoa-help-text"
                      className="text-right px-sm pb-none pl-[32px] relative outline-none border-none rounded-sm px-sm pb-none text-default font-bold w-full h-full box-border"
                      value="132"
                    />
                  </div>
                  <div
                    className="font-normal leading-body m-0 p-0 text-left text-xs flex pt-xs text-interactiveForegroundMuted flex-row-reverse pl-auto pr-sm"
                    id="hoa-help-text"
                  >
                    {" "}
                  </div>
                </div>
              </div>
              <div className="mb-lg" data-orientation="vertical">
                <div
                  data-state="closed"
                  data-orientation="vertical"
                  className=""
                >
                  <h3
                    data-orientation="vertical"
                    data-state="closed"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-:R5d6m:"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="radix-:R1d6m:"
                      className="flex flex-1 items-center justify-between py-4 font-bold transition-all [&amp;[data-state=open]>svg]:rotate-180"
                      data-radix-collection-item=""
                    >
                      <div
                        className="flex justify-between h-3xl h-auto mb-0 w-full"
                        data-testid="open-utilities"
                      >
                        <div className="flex items-center text-textPrimary w-auto">
                          <div className="rounded-sm h-base w-[5px] mr-xs bg-graph3Tertiary"></div>
                          <p
                            className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base"
                            id="utilities-label"
                          >
                            Utilities
                          </p>
                        </div>
                        <span className="leading-body m-0 p-0 text-textPrimary text-base w-[144px] text-left font-bold">
                          $100
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="radix-:R5d6m:"
                    role="region"
                    aria-labelledby="radix-:R1d6m:"
                    data-orientation="vertical"
                    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style={
                      {
                        "--radix-accordion-content-height":
                          "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width":
                          "var(--radix-collapsible-content-width)",
                      } as React.CSSProperties
                    }
                  ></div>
                </div>
              </div>
              <button
                className="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary focus:shadow-accentBorderSecondary active:bg-accentSecondary px-xl h-3xl w-auto mb-xs"
                data-testid="copyLink"
              >
                Copy estimate link
              </button>
            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default McSection2;

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex overflow-hidden flex-col pb-9">
      <section className="pl-20 lg:pb-24 w-full max-md:pl-0 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col-reverse">
          {/* Text Section */}
          <article className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2 max-md:mt-6 lg:text-left text-center">
              <Image
                loading="lazy"
                src="/Home/FoodTruckLogo.png"
                width={107}
                height={83}
                className="hidden lg:block object-contain max-w-full aspect-[1.29] w-[107px] mt-[33px]"
                alt="Food Truck Logo"
              />

              <h4 className="mt-28 text-[38px] lg:text-[62px] font-bold font-sourcesans text-primary-blue leading-[46px] lg:leading-[69px] max-md:mt-10 max-md:text-4xl max-md:leading-[49px] px-3 md:px-0">
                Discover the <br />
                <span className="text-prime-orange">Best</span> Food and Drinks
              </h4>
              <p className="mt-7 text-[11px] md:text-base leading-[18px] md:leading-7 text-primary-gray-1 font-opensans">
                Naturally made Healthcare Products for the better care & support
                of your body.
              </p>

              <div className="flex justify-center md:justify-start items-center">
                <Link
                  className="font-opensans gap-[6px] md:gap-[7px] md:py-[14px] items-center py-1 md:px-[34px] px-[30px] mt-7 w-fit h-[40px] md:w-[190px] md:h-[63px] text-[12.27px] md:text-lg font-bold md:tracking-normal leading-[31.54px] md:leading-9 text-bgwhitecol-1 hover:text-prime-orange bg-prime-orange hover:bg-bgwhitecol-1 hover:border-2 hover:border-prime-orange rounded-[34px]"
                  href="#"
                >
                  Explore Now!
                </Link>
              </div>
            </div>
          </article>

          {/* Image Section */}
          <figure className="relative flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <div className="relative w-full h-[450px] lg:h-[804px]">
              <Image
                loading="lazy"
                src="/Home/Vector1.svg"
                width={375}
                height={476}
                className="absolute top-0 right-0 w-[375px] lg:w-[752px] h-[476px] lg:h-[839px] object-cover z-10"
                alt="Vector Graphic"
              />
              <div className="lg:w-[735px]">
                <img
                  loading="lazy"
                  src="/Home/PizzaBanner.jpeg"
                  className="absolute top-0 right-0 w-[378.21px] h-[413.72px] lg:w-[735px] lg:h-[804px] object-cover lg:rounded-bl-[198.9px] rounded-bl-[102.35px]"
                  alt="Pizza Banner"
                />
              </div>
              <div className="absolute top-5 md:top-10 right-2 md:right-10 w-auto p-2 bg-transparent border border-bgwhitecol-1 lg:rounded-[21px] rounded-[27px] z-20">
                <Link
                  href="#"
                  className="text-[11px] md:text-[16px] md:leading-[24px] h-[31px] md:w-[122px] md:h-[42px] items-center font-semibold text-bgwhitecol-1 px-4 py-1 lg:px-6 lg:py-1"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Hero;

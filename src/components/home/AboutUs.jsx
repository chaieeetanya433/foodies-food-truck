import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-16 max-md:px-5 bg-custom-gradient">
      <div className="w-full max-w-[1031px] max-md:max-w-full pt-16 md:pt-0">
        <div className="flex gap-5 max-md:flex-col">
          <figure className="hidden lg:flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/Home/aboutus.jpeg"
              alt="About Us Image"
              className="object-cover ml-0.5 h-[468px] w-[384px] rounded-none aspect-[0.82]"
            />
            <figcaption className="sr-only">Image representing our company</figcaption>
          </figure>
          <div className="flex flex-col ml-5 w-6/12 justify-between max-md:ml-0 max-md:w-full" style={{ height: '468px' }}>
            <article className="flex flex-col self-stretch w-full h-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[447px] text-center md:text-start md:pt-24">
                <header className="flex flex-col w-full">
                  <h2 className="text-[26px] md:text-[45px] leading-[35px] md:leading-[45px] font-semibold font-poppins text-primary-blue max-md:max-w-full max-md:text-4xl">
                    About Us
                  </h2>
                </header>
                <p className="mt-7 text-[11px] md:text-[15px] leading-[27px] text-primary-gray-1 md:w-[447px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries.
                </p>
              </div>
              <footer className="flex justify-center lg:justify-start mt-8">
                <Link href="#" className="px-7 py-1 text-base font-semibold font-sourcesans tracking-wide leading-9 text-bgwhitecol-1 hover:text-prime-orange bg-prime-orange hover:bg-bgwhitecol-1 hover:border-2 hover:border-prime-orange rounded-3xl min-h-[42px] w-fit">
                  Read More
                </Link>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

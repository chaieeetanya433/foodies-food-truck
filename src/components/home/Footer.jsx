import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-custom-gradient px-2 py-8 md:py-16 md:px-14">
      <section className="flex flex-col justify-between lg:flex-row gap-6 md:gap-24 items-start w-full px-8">
        <Image
          loading="lazy"
          src="/Home/FoodTruckLogo.png"
          width={161}
          height={125}
          className="object-contain w-[75px] md:w-[161px] md:h-[125px] h-[55px] mx-auto md:mx-0"
        />
        <div className="flex flex-col items-start text-base leading-loose text-zinc-500 md:w-[232px]">
          <h2 className="font-sourcesans text-[15.77px] md:text-[18.84px] font-semibold tracking-[3%] leading-[34.8px] md:leading-[27.22px] md:tracking-[3%] text-primary-blue">
            Contact Us
          </h2>
          <div className="text-[8.76px] md:text-[14.66px] leading-[12.27px] md:leading-[23.03px] font-[400] text-primary-gray-3">
          <p className="mt-2">
            Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p className="mt-4">example2020@gmail.com</p>
          <p className="mt-4">(904) 443-0343</p>
          </div>
        </div>
        <nav className="flex flex-col items-start text-base leading-relaxed">
          <h2 className="font-sourcesans text-[15.77px] md:text-[18.84px] font-semibold tracking-[3%] leading-[34.8px] md:leading-[27.22px] md:tracking-[3%] text-primary-blue">
            More
          </h2>
          <ul className="text-primary-gray-3 mt-2 space-y-2 text-[8.76px] md:text-[14.66px] leading-[12.27px] md:leading-[23.03px] font-[400]">
            <li><Link href="#" className="hover:text-primary-gray-2">About Us</Link></li>
            <li><Link href="#" className="hover:text-primary-gray-2">Products</Link></li>
            <li><Link href="#" className="hover:text-primary-gray-2">Career</Link></li>
            <li><Link href="#" className="hover:text-primary-gray-2">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="flex flex-col-reverse lg:flex-col items-center lg:items-end mx-auto md:mx-0">
        <h2 className="font-opensans hidden lg:block text-xl font-semibold tracking-wide leading-none text-primary-blue pb-3">
            Social Links
          </h2>
          <div className="flex gap-6">
            <img
              loading="lazy"
              src="/Home/instagram.svg"
              className="object-contain aspect-square w-[12px] h-[12px] md:w-[21px] md:h-[21px]"
              alt="Instagram"
            />
            <img
              loading="lazy"
              src="/Home/twitter.svg"
              className="object-contain aspect-square w-[12px] h-[12px] md:w-[21px] md:h-[21px]"
              alt="Twitter"
            />
            <img
              loading="lazy"
              src="/Home/facebook.svg"
              className="object-contain aspect-square w-[12px] h-[12px] md:w-[21px] md:h-[21px]"
              alt="Facebook"
            />
          </div>
          <p className="font-roboto lg:mt-20 text-[8.76px] md:text-[14.66px] leading-[32.13px] md:leading-[25.12px] text-footer-col-1 text-center md:text-start">
            © 2022 Food Truck Example
          </p>
        </div>
      </section>
    </footer>
  );
};

export default FooterComponent;

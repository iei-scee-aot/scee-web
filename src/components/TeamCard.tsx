import Image from "next/image";
import { useState } from "react";

interface CardProps {
  Name?: string;
  Designation?: string;
  imagePath?: string;
  links?: string[];
}

const TeamCard = ({
  Name = "Member Name",
  Designation = "Designation",
  imagePath = "",
  links = [
    "https://facebook.com",
    "https://instagram.com",
    "https://x.com/",
    "https://threads.net",
    "https://linkedin.com",
  ],
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  // Map known domains to their corresponding icon file names
  const domainToIconMap: { [key: string]: string } = {
    "facebook.com": "icons/facebook.jpg",
    "instagram.com": "icons/instagram.jpg",
    "x.com": "icons/x.jpg",
    "threads.net": "icons/threads.jpg",
    "linkedin.com": "icons/linkedin.jpg",
  };

  // Function to extract the domain from a URL
  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace("www.", "");
      return domain;
    } catch {
      console.error("Invalid URL:", url);
      return null;
    }
  };

  return (
    <div className="h-[440px] md:h-[280px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] m-1 md:m-2 lg:m-3 xl:m-4 2xl:m-5 mb-6 md:mb-8 lg:mb-9 xl:mb-10 2xl:mb-12">
      <div
        className={`relative cursor-pointer w-[16rem] md:w-[10rem] lg:w-[10rem] xl:w-[10rem] 2xl:w-[15rem] flex flex-col items-center justify-start transition-all duration-0 overflow-hidden ${
          isExpanded
            ? "h-[28rem] md:h-[17rem] lg:h-[18.5rem] xl:h-[20rem] 2xl:h-[26.2rem]"
            : "h-[26rem] md:h-[15.5rem] lg:h-[16.2rem] xl:h-[18rem] 2xl:h-[23.2rem]"
        }`}
        onClick={toggleCard}
      >
        <svg
          className="absolute top-0 right-[1.4rem] md:right-[0.9rem] lg:right-[1rem] xl:right-[1.2rem] 2xl:right-[1rem] z-10 w-10 h-14 md:w-5 md:h-7 lg:w-8 lg:h-10 xl:w-9 xl:h-12 2xl:w-10 2xl:h-13 origin-top-right"
          viewBox="0 0 28 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4141 32.9229C20.9366 35.2353 17.5013 36.6703 13.7146 36.6703C6.14131 36.6703 6.10352e-05 30.9385 6.10352e-05 23.87V-0.000347137H4.14694V22.6646C4.14694 27.5928 8.4344 31.5945 13.7146 31.5945C16.3592 31.5945 18.7489 30.594 20.4797 28.9786C22.2105 27.3632 23.2824 25.1328 23.2824 22.6646V-0.000347137H27.4292V23.87C27.4292 27.4042 25.9005 30.6022 23.4141 32.9229Z"
            fill="var(--primary)"
          />
          <path
            d="M13.7146 27.0024C10.6044 27.0024 8.09167 24.649 8.09167 21.7543V-0.000391006H11.6938V20.8769C11.6938 21.9183 12.5988 22.7712 13.7234 22.7712C14.2856 22.7712 14.7864 22.558 15.1554 22.2136C15.5244 21.8691 15.7529 21.4017 15.7529 20.8769V-0.000391006H19.355V21.7543C19.355 23.2058 18.7225 24.5178 17.7033 25.469C16.6754 26.412 15.2696 27.0024 13.7146 27.0024Z"
            fill="var(--primary)"
          />
        </svg>

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,0 100,0 100,100 0,90"
            stroke="#6B7280"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>

        {/* Inner Content */}
        <div className="absolute inset-0 top-0 flex flex-col z-0 text-center">
          <div className="flex justify-center items-center w-full">
            <Image
              src={imagePath}
              alt={Name}
              loading="lazy"
              width={160}
              height={160}
              className="object-cover w-[16rem] h-[16rem] md:w-[10rem] md:h-[10rem] lg:w-[10rem] lg:h-[10rem] xl:w-[10rem] xl:h-[10rem] 2xl:w-[15rem] 2xl:h-[15rem]"
              priority={false}
            />
          </div>
          <div className="border-t-[0.5px] h-[6rem] md:h-[3.5rem] lg:h-[4rem] xl:h-[4.5rem] 2xl:h-[5.5rem] border-gray-500 text-left pt-2 md:pt-1.5 lg:pt-2 xl:pt-2.5 2xl:pt-3 px-[1rem] md:px-[0.7rem] lg:px-[0.8rem] xl:px-[1rem] 2xl:px-[1.2rem]">
            <h2 className="font-pxg font-thin leading-[1.8rem] md:leading-[1.2rem] lg:leading-[1.4rem] xl:leading-[1.6rem] 2xl:leading-[1.8rem] text-xl md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              {Name}
            </h2>
            <p className="text-xl md:text-sm lg:text-sm xl:text-base 2xl:text-base font-thin font-pxg text-primary">
              {Designation}
            </p>
          </div>

          {/* Links Section */}
          {isExpanded && (
            <div className="flex items-center justify-around border-dashed border-gray-500 border-t-[0.5px] px-2 md:px-1.5 lg:px-2 xl:px-2.5 2xl:px-3 pt-3 md:pt-2 lg:pt-2.5 xl:pt-3 2xl:pt-4 mt-3 lg:mt-2 xl:mt-2.5 2xl:mt-3 mx-[1rem] md:mx-[0.7rem] lg:mx-[0.8rem] xl:mx-[1rem] 2xl:mx-[1.2rem]">
              {links.map((link, index) => {
                const domain = getDomainFromUrl(link);
                const icon =
                  domain && domainToIconMap[domain]
                    ? domainToIconMap[domain]
                    : "default.jpg";

                return (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/${icon}`}
                      alt={domain || "link"}
                      width={24}
                      height={24}
                      className="w-6 h-6 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 object-contain"
                      loading="lazy"
                    />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

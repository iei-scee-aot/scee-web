"use client";

import Countdown from "@/components/iotricity/Countdown";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Divider2 from "@/components/ui/Divider";
import Headlines from "@/components/ui/Headlines";
import { ArrowRight, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQData {
  faqs: FAQ[];
  metadata: {
    lastUpdated: string;
    organization: string;
    contact: string;
  };
}

const HomePage = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [faqData, setFaqData] = useState<FAQ[]>([]);
  const [faqLoading, setFaqLoading] = useState(true);
  const [faqError, setFaqError] = useState<string | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setFaqLoading(true);
        const response = await fetch("/data/faq.json");

        if (!response.ok) {
          console.error(
            "Response not OK:",
            response.status,
            response.statusText
          );
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.error("Invalid content type:", contentType);
          const text = await response.text();
          console.error("Response body:", text.substring(0, 200));
          throw new Error(`Expected JSON but received: ${contentType}`);
        }

        const data: FAQData = await response.json();
        setFaqData(data.faqs);
        setFaqError(null);
      } catch (err) {
        console.error("Failed to fetch FAQs:", err);
        setFaqError(err instanceof Error ? err.message : "Failed to load FAQs");
      } finally {
        setFaqLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  // Date checks
  const isAfterAugust27 = currentDate
    ? currentDate >= new Date("2025-08-27T00:00:00")
    : false;
  const isAfterAugust30 = currentDate
    ? currentDate >= new Date("2025-08-30T00:00:00")
    : false;

  return (
    <>
      {/* Main Content */}
      <div>
        {/* Modern Hero Section */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFBE00' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Main Hero Content */}
          <div className="relative px-4 lg:px-8 py-16 lg:py-24 z-10">
            <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
              {/* IoTricity Logo */}
              <div className="relative mb-8 group">
                <div className="flex w-80 h-24 lg:w-[32rem] lg:h-36 xl:w-[40rem] xl:h-44 justify-center items-center">
                  <Image
                    src="/iotricity.svg"
                    alt="IoTricity Logo"
                    width={800}
                    height={200}
                    className="object-contain transform group-hover:scale-105 transition-transform duration-500 filter drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Glowing effect around logo */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Main Text */}

              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                <span className="text-lg lg:text-xl font-medium text-primary">
                  The Ultimate IoT Hackathon
                </span>
                <div className="h-1 w-16 bg-gradient-to-l from-primary to-transparent rounded-full"></div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Register Now
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  className="group border-primary/20 hover:border-primary/50"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <ExternalLink
                      size={18}
                      className="transition-transform group-hover:scale-110"
                    />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Divider2 />

        {/*Timeline*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          {/* Unified Header Section */}
          <div className="lg:flex lg:h-[10rem]">
            {/* Headline Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
              <div className="block lg:hidden w-full">
                <Headlines headLine="Timeline" />
              </div>
              <h1
                className="hidden lg:block text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px var(--primary)",
                  color: "transparent",
                }}
              >
                Timeline
              </h1>
            </div>

            {/* Button and GIF Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
              <Link href="/events">
                <div className="h-[3.75rem] w-[6rem] lg:absolute lg:bottom-0 lg:left-0 lg:w-[116px] lg:h-[81px] lg:z-10 bg-primary text-black py-1 px-3 lg:bg-primary flex flex-col items-start lg:items-center lg:justify-center gap-0 text-sm hover:bg-primary/90 transition-all duration-300 cursor-pointer">
                  <span className="lg:block">EVENTS</span>
                  <ArrowRight
                    size={14}
                    className="animate-float lg:mt-1 lg:size-[19px]"
                  />
                </div>
              </Link>
              <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
                <img
                  src="/images/GIF.gif"
                  alt="Campus GIF"
                  className="w-full h-[3.75rem] lg:w-full lg:h-full object-cover"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 lg:px-8 py-12 lg:py-8 text-sm lg:text-[2rem] font-pxg lg:font-light lg:leading-relaxed">
            {isAfterAugust30 ? (
              /* Event Started Message */
              <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem] text-center">
                <div className="mb-8">
                  <h3
                    className="text-2xl lg:text-4xl font-bold text-primary mb-4"
                    style={{ fontFamily: "KMR Apparat1" }}
                  >
                    🎉 Event Has Started! 🎉
                  </h3>
                  <p className="text-base lg:text-xl text-secondary/80">
                    IOTricity Season 2.0 is now live!
                    <br />
                    Check out the dedicated page for more details and updates.
                  </p>
                </div>

                {/* Checkout Button */}
                <div className="flex justify-center">
                  <Link href="/iotricity" className="w-full sm:w-auto max-w-xs">
                    <Button
                      variant="primary"
                      size="lg"
                      icon={<ExternalLink size={20} />}
                      className="justify-center"
                    >
                      Checkout IOTricity
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              /* Countdown and Buttons */
              <div className="flex flex-col justify-center items-center lg:min-h-[23.5rem]">
                <div className="w-full flex justify-center mb-8">
                  <Countdown />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
                  {!isAfterAugust27 && (
                    <Link
                      href="/iotricity#register"
                      className="w-full sm:w-auto"
                    >
                      <Button variant="primary" icon={<Users size={18} />}>
                        Register Now
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  )}
                  <Link href="/iotricity" className="w-full sm:w-auto">
                    <Button
                      variant="secondary"
                      icon={<ExternalLink size={18} />}
                    >
                      Checkout IOTricity
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <Divider2 />

        {/*About us*/}
        <div
          id="About-Us"
          className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0"
        >
          {/* Unified Header Section */}
          <div className="lg:flex lg:h-[10rem]">
            {/* Headline Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:border-r-[0.8px] lg:w-1/2 lg:pl-[1.6rem] overflow-hidden">
              <div className="block lg:hidden w-full">
                <Headlines headLine="About Us" />
              </div>
              <h1
                className="hidden lg:block text-[94px] font-bold leading-[72px] tracking-[-0.47px]"
                style={{
                  fontFamily: "KMR Apparat1",
                  WebkitTextStroke: "1px var(--primary)",
                  color: "transparent",
                }}
              >
                About
                <br />
                IoTricity
              </h1>
            </div>

            {/* Button and GIF Section */}
            <div className="flex items-center border-gray-500 border-b-[0.5px] lg:border-b-[0.8px] lg:w-1/2 lg:relative lg:overflow-hidden overflow-hidden">
              <Link href="/team">
                <div className="h-[3.75rem] w-[6rem] lg:absolute lg:bottom-0 lg:left-0 lg:w-[116px] lg:h-[81px] lg:z-10 bg-primary text-black py-1 px-3 lg:bg-primary flex flex-col items-start lg:items-center lg:justify-center gap-0 text-sm hover:bg-primary/90 transition-all duration-300">
                  <span className="lg:text-center">TEAM</span>
                  <span className="hidden lg:block"></span>
                  <ArrowRight
                    size={14}
                    className="animate-float lg:mt-1 lg:size-[19px]"
                  />
                </div>
              </Link>
              <div className="flex-1 lg:absolute lg:inset-0 lg:bg-black/20">
                <img
                  src="/images/GIF.gif"
                  alt="Campus GIF"
                  className="w-full h-[3.75rem] lg:w-full lg:h-full object-cover"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="px-[1.40625rem] lg:px-8 py-[1.40625rem] lg:py-8 text-[10.5px] lg:text-[1.2rem] font-light leading-relaxed font-pxg text-left lg:text-center">
            Welcome to the IEI Students&apos; Chapter of Electrical Engineering!
            We may be the newest community on the block, but we&apos;re
            definitely the most energetic and driven one.
            <br />
            <br />
            Our mission is to create a space where students can dive into both
            core and non-core topics, learn new skills, and push the limits of
            what they can achieve. We organize everything from hands-on
            workshops and ideathons to competitions and brainstorming sessions,
            all designed to spark creativity and innovation.
            <br />
            <br />
            It&apos;s not just about textbooks here - it&apos;s about real-world
            experiences and connecting with others who share the same passion
            for engineering.
            <br />
            <br />
            So, if you&apos;re looking to learn, grow, and have a ton of fun,
            join us on this exciting journey! We can&apos;t wait to see what we
            can achieve together.
          </div>

          {/* Team Image */}
          <div className="relative w-full h-[200px] md:h-[420px] lg:h-[609px] mt-4 lg:mt-0">
            <Image
              src={
                "https://bywh0yntxo.ufs.sh/f/k4bR25DaT9Rhlcdh5oLMNJOCXnKiHD7Ua35Ww8EVepuQtP4Z"
              }
              alt="About Us"
              loading="lazy"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="absolute inset-0 bg-gradient-to-b to-black/65 from-transparent"></div>
          </div>
        </div>
        <Divider2 />

        {/* HOD's Desk */}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="From The HOD's Desk" />
          </div>
          <div className="flex gap-2 lg:gap-10 items-center py-[1.9375rem] lg:py-[1.5rem] pl-[0.5rem] lg:pl-[2rem] pr-[0.5rem] lg:pr-[1rem] text-[9px] lg:text-[1rem] font-pxg tracking-tight leading-snug">
            <Image
              src={
                "https://bywh0yntxo.ufs.sh/f/k4bR25DaT9RhLv4BBIDz7N63BHlPeJLcnjgKxb4RGhXAq8D9"
              }
              loading="lazy"
              alt="HOD's PIC"
              width={135}
              height={135}
              className="border-2 rounded-md lg:w-[400px] lg:h-[400px]"
            />
            <p className="flex-1 font-light">
              <span className="font-bolder text-left text-primary">
                &quot;{" "}
              </span>
              Our department has created a platform to deliver strong
              fundamentals-based technical education. We strive to produce
              electrical engineers who are well suited for both industry and
              society.
              <br />
              <br className="hidden lg:block" />
              As HOD of this department, I endeavor to transform them into
              creators of technology with good human values and a commitment
              towards our nation.
              <span className="font-bolder text-left text-primary">
                {" "}
                &quot;
              </span>
              <br />
              <br className="hidden lg:block" />
              <span className="font-bolder text-left text-primary">
                {" "}
                - Prof. Sandip Saha Chowdhury
              </span>
              <br />
              <span className="font-bolder text-left text-grey italic">
                {" "}
                HOD, Department of Electrical Engineering
              </span>
            </p>
          </div>
        </div>

        <Divider2 />

        {/*FAQs*/}
        <div className="w-[calc(100%-30px)] lg:w-[calc(100%-14rem)] mx-auto border-[0.5px] border-gray-500 border-t-0 border-b-0">
          <div className="flex items-center border-gray-500 border-b-[0.5px] overflow-hidden">
            <Headlines headLine="FAQs" />
          </div>
          {faqLoading ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-lg">Loading FAQs...</p>
            </div>
          ) : faqError ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <p className="text-lg text-red-400 mb-2">Failed to load FAQs</p>
                <p className="text-sm text-gray-400">{faqError}</p>
              </div>
            </div>
          ) : (
            <Accordion items={faqData} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;

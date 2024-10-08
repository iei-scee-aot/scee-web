import React from "react";
import { Button } from "@/components/ui/button";

import ImageSlider from "@/app/components/ImageSlider";
import Divider from "./components/Divider";
import AboutSection from "./components/About";
import Events from "./components/Events";
import HeadOfTheDepartment from "./components/HeadOfTheDepartment";
import FacultyAdvisors from "./components/FacultyAdvisors";
import AccordianSection from "./components/AccordianSection";
import Reveal from "@/components/layout/Reveal";

const Apps = () => {
  const slides = [
    {
      url: "https://utfs.io/f/kQP3nlH8TqeSpHFgKicRM3Egt9wzXbuhLHZOkBT5iFU4r6DP",
      title: "Test",
    },
    {
      url: "https://utfs.io/f/kQP3nlH8TqeS3DUgzv2rPkapnMo4e8jVXyDIZK2rqwxCH1mW",
      title: "Test",
    },
    {
      url: "https://utfs.io/f/kQP3nlH8TqeSyTRxB9nokeRMbzdKJwA1aWGhcCPmIOt7jTgi",
      title: "Test",
    },
  ];
  return (
    <main className="pt-24">
      <ImageSlider slides={slides} />
      <div className="w-full flex justify-between items-center pt-10">
        <div className="p-20 w-[1200px]">
          <Reveal>
            <h1 className="text-4xl font-bold text-yellow-400">
              Home to the COOLEST Students&#x2019; Chapter of all Time
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-sm">
              Welcome to the IEI Students&#x2019; Chapter of EE AOT!
              We&#x2019;re all about innovation, tech vibes, and leveling up the
              skills. Join us for cool workshops, epic events, and a community
              that&#x2019;s as electric as you are! Let&#x2019;s make waves
              together! ⚡
            </p>
          </Reveal>
        </div>
        <div className="mr-20 flex">
          <Button className="mr-5">Join Us</Button>
          <Button variant="outline">Connect</Button>
        </div>
      </div>
      <AboutSection />
      <Divider />
      <Events />
      <Divider />
      <HeadOfTheDepartment />
      <FacultyAdvisors />
      <Divider />
      <AccordianSection />
      <Divider />
    </main>
  );
};

export default Apps;

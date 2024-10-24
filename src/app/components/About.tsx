import Image from "next/image";
import star from "@/assets/icons/star-icon.png";

interface AboutSectionProps {
  paddingHorizontal?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ paddingHorizontal = '20px' }) => {
  return (
    <div
      className="-mt-40 mx-auto h-[610px] rounded-3xl flex flex-col justify-between shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105" 
      style={{ 
        backgroundColor: "rgba(59, 60, 60, 0.75)", 
        width: 'calc(80% - 40px)',
        padding: `10px ${paddingHorizontal}`,
        position: "relative",
        top: "0",
        zIndex: 10,
      }}
    >
      <div className="flex items-center">
        <Image className="mt-[1.5rem]" src={star} alt="star" width={24} />
        <h2 className="mt-[1.5rem] ml-2 font-bold text-4xl">About Our Student Chapter</h2>
      </div>
      <div className="text-[1.5rem] h-full p-5 overflow-auto">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;

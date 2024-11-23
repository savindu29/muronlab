import { StaticImageData } from "next/image";

export default function Card1({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div className="w-full p-4 rounded-lg bg-white">
      {/* Title Section */}
      <div className="text-base font-semibold text-black">{title}</div>
      
      {/* Description Section */}
      <div className="text-sm text-zinc-500 mb-4">{description}</div>
      
      {/* Image Section */}
      <div
        className="relative w-[40rem] h-[20rem]  overflow-hidden "
        style={{
          backgroundImage: ` url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

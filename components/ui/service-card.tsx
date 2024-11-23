import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  index: number | string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description, index }) => {
  return (
    <div className="flex gap-8 p-8 rounded-3xl bg-zinc-100 hover:bg-zinc-300 relative transition">
      <div className="flex flex-col space-y-6">
        <div className="text-lg text-left lg:text-xl font-semibold text-sky-900 max-w-56">
          {title}
        </div>
        <div className="text-zinc-500 text-left leading-relaxed lg:leading-loose">
          {description}
        </div>
      </div>
      <div className="absolute top-8 right-8 text-4xl">{index}</div>
    </div>
  );
};

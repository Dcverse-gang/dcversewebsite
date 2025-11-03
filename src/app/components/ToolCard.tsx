import Image from 'next/image';

interface ToolCardProps {
  title: string;
  imageSrc: string;
}

export default function ToolCard({ title, imageSrc }: ToolCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={imageSrc} width={180} height={180} alt={title} />
      <p className="mt-2 text-md">{title}</p>
    </div>
  );
}

interface IconsProps {
  icon: string;
  alt: string;
  className?: string;
}

export default function Icons({ icon, alt, className }: IconsProps) {
  return (
    <>
      <img className={className} src={icon} alt={alt} />
    </>
  );
}

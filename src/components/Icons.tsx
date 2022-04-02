interface IconsProps {
  icon: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export default function Icons({ icon, alt, className, onClick }: IconsProps) {
  return (
    <>
      <button type="button" className="border-0">
        <img className={className} onClick={onClick} src={icon} alt={alt} />
      </button>
    </>
  );
}

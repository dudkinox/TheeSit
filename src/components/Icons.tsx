import { TypeButton } from "../enum/ButtonEnum";

interface IconsProps {
  icon: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  type?: TypeButton;
}

export default function Icons({
  icon,
  alt,
  className,
  onClick,
  type,
}: IconsProps) {
  return (
    <>
      {type === TypeButton.BUTTON ? (
        <button type={type} className="border-0">
          <img className={className} onClick={onClick} src={icon} alt={alt} />
        </button>
      ) : (
        <img className={className} onClick={onClick} src={icon} alt={alt} />
      )}
    </>
  );
}

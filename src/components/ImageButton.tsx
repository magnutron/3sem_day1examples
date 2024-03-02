type ImageButtonProps = {
  image: string;
  onClick: () => void;
};

export default function ImageButton({ image, onClick }: ImageButtonProps) {
  return <img src={image} width="100rem" height="100rem" onClick={onClick} />;
}

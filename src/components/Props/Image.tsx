type ImageSize = {
  width: number,
  height: number,
}

interface ImageProps {
  src: string
  alt: string
  size?: ImageSize
}


const CardImage = ({src, alt, size}: ImageProps) => {
  <img src={src} alt={alt} width={size?.width} height={size?.height}  />
}

export default CardImage
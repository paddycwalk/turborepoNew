import styles from './Image.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain';
  sizes?: string;
  fetchpriority?: 'high' | 'auto';
}

export const NextImage = ({
  className,
  src,
  alt,
  width,
  height,
  fill,
  quality,
  loading,
  priority,
  aspectRatio,
  objectFit,
  sizes,
  fetchpriority,
}: ImageProps) => {
  return (
    <figure
      className={clsx({
        [`${className}`]: className,
        [styles['Image']]: true,
        [styles[`Image-${aspectRatio}`]]: aspectRatio,
      })}
    >
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        fill={fill}
        quality={quality}
        loading={loading}
        fetchpriority={priority ? 'high' : 'auto'} // Attribut in Kleinbuchstaben
        className={clsx({
          [styles[`Image-${objectFit}`]]: objectFit,
        })}
        sizes={sizes}
      />
    </figure>
  );
};

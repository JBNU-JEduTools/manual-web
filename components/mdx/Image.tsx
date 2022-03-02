import { Box, theme, Text } from '@aksara-ui/react';
import Image from 'next/image';
import React from 'react';

export const ImageWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={24} textAlign="center" position={'relative'} {...rest} />;
};

const CaptionWrapper = (props) => {
  const { className, ...rest } = props;
  return (
    <Box
      className={className}
      backgroundColor={theme.colors.greylight03}
      border={`1px solid ${theme.colors.greylight04}`}
      color={theme.colors.greydark02}
      p={16}
      fontSize={14}
      lineHeight={'20px'}
      textAlign={'left'}
      {...rest}
    />
  );
};

const MAX_PORTRAIT_HEIGHT = 720;
const MAX_LANDSCAPE_WIDTH = 720;

const calculateImageDimension = ({ naturalHeight, naturalWidth }) => {
  // If layout is other than fill, onLoadingComplete will return small size for naturalHeight and naturalWidth
  if (naturalHeight === 0 || naturalWidth === 0) return { height: 0, width: 0, layout: 'fill' };

  if (naturalHeight > naturalWidth) {
    if (naturalHeight <= MAX_PORTRAIT_HEIGHT) {
      return {
        height: naturalHeight,
        width: naturalWidth > MAX_LANDSCAPE_WIDTH ? MAX_LANDSCAPE_WIDTH : naturalWidth,
        layout: 'intrinsic',
      };
    } else {
      return {
        height: MAX_PORTRAIT_HEIGHT,
        width: Math.floor((MAX_PORTRAIT_HEIGHT / naturalHeight) * naturalWidth),
        layout: 'intrinsic',
      };
    }
  } else {
    if (naturalWidth <= MAX_LANDSCAPE_WIDTH) {
      return {
        height: naturalHeight > MAX_PORTRAIT_HEIGHT ? MAX_PORTRAIT_HEIGHT : naturalHeight,
        width: naturalWidth,
        layout: 'intrinsic',
      };
    } else {
      // Resize using max width if larger than threshold
      return {
        height: Math.floor((MAX_LANDSCAPE_WIDTH / naturalWidth) * naturalHeight),
        width: MAX_LANDSCAPE_WIDTH,
        layout: 'responsive',
      };
    }
  }
};

export const NextImage = (props) => {
  const { src, alt, ...rest } = props;
  const [naturalDimension, setNaturalDimension] = React.useState({ naturalWidth: 0, naturalHeight: 0 });
  const dimension = React.useMemo(() => calculateImageDimension(naturalDimension), [naturalDimension]);
  return (
    <Image
      src={src}
      alt={alt}
      {...rest}
      width={dimension.width}
      height={dimension.height}
      layout={dimension.layout}
      onLoadingComplete={(naturalDimension) => setNaturalDimension(naturalDimension)}
    />
  );
};
const FigureWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={16} {...rest} />;
};

export const FigureImage = (props) => {
  const { src, alt, caption, ...rest } = props;
  return (
    <FigureWrapper>
      <ImageWrapper marginY={0}>
        <NextImage src={src} alt={alt} {...rest} />
      </ImageWrapper>
      {caption && (
        <CaptionWrapper>
          <Text mr={5}>
            <strong>{caption.title}</strong>
          </Text>
          <Text>{caption.description}</Text>
        </CaptionWrapper>
      )}
    </FigureWrapper>
  );
};

const Components = {
  FigureImage,
  ImageWrapper,
  NextImage,
};

export default Components;

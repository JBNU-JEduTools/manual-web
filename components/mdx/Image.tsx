import { Box, theme, Text } from '@aksara-ui/react';
import Image from 'next/image';

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

const FigureWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={16} {...rest} />;
};

const MAX_PORTRAIT_HEIGHT = 720;
const MAX_LANDSCAPE_WIDTH = 720;

export const NextImage = (props) => {
  const { src, alt, naturalWidth, naturalHeight, ...rest } = props;
  console.log(src, alt, naturalWidth, naturalHeight);
  if (naturalHeight > naturalWidth) {
    if (naturalHeight <= MAX_PORTRAIT_HEIGHT) {
      const width = naturalWidth > MAX_LANDSCAPE_WIDTH ? MAX_LANDSCAPE_WIDTH : naturalWidth;
      return <Image src={src} alt={alt} {...rest} width={width} height={naturalHeight} layout="intrinsic" />;
    } else {
      // Resize using max height if larger than threshold
      const height = MAX_PORTRAIT_HEIGHT;
      const width = Math.floor((height / naturalHeight) * naturalWidth);
      return <Image src={src} alt={alt} {...rest} width={width} height={height} layout="intrinsic" />;
    }
  } else {
    if (naturalWidth <= MAX_LANDSCAPE_WIDTH) {
      const height = naturalHeight > MAX_PORTRAIT_HEIGHT ? MAX_PORTRAIT_HEIGHT : naturalHeight;
      return <Image src={src} alt={alt} {...rest} width={naturalWidth} height={height} layout="intrinsic" />;
    } else {
      // Resize using max width if larger than threshold
      const width = MAX_LANDSCAPE_WIDTH;
      const height = Math.floor((width / naturalWidth) * naturalHeight);
      return <Image src={src} alt={alt} {...rest} width={width} height={height} layout="responsive" />;
    }
  }
};

export const ImageWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={24} textAlign="center" {...rest} />;
};

export const FigureImage = (props) => {
  const { src, alt, naturalWidth, naturalHeight, caption, ...rest } = props;
  return (
    <FigureWrapper>
      <ImageWrapper marginY={0}>
        <NextImage src={src} alt={alt} naturalWidth={naturalWidth} naturalHeight={naturalHeight} {...rest} />
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

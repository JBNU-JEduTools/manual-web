import { Box, Text, theme } from '@aksara-ui/react';
import { h1, h2, h3, h4, h5, h6, hr, p, ul, ol, li, table } from 'components/page/Markdown/MarkdownComponents';
import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const MAX_PORTRAIT_HEIGHT = 720;
const MAX_LANDSCAPE_WIDTH = 720;

const NextImage = (props) => {
  const { src, alt, naturalWidth, naturalHeight, ...rest } = props;

  if (naturalHeight > naturalWidth) {
    if (naturalHeight <= MAX_PORTRAIT_HEIGHT) {
      return <Image src={src} alt={alt} {...rest} width={naturalWidth} height={naturalHeight} layout="responsive" />;
    } else {
      // Resize using max height if larger than threshold
      const height = MAX_PORTRAIT_HEIGHT;
      const width = Math.floor((height / naturalHeight) * naturalWidth);
      return <Image src={src} alt={alt} {...rest} width={width} height={height} layout="intrinsic" />;
    }
  } else {
    if (naturalWidth <= MAX_LANDSCAPE_WIDTH) {
      return <Image src={src} alt={alt} {...rest} width={naturalWidth} height={naturalHeight} layout="responsive" />;
    } else {
      // Resize using max width if larger than threshold
      const width = MAX_LANDSCAPE_WIDTH;
      const height = Math.floor((width / naturalWidth) * naturalHeight);
      return <Image src={src} alt={alt} {...rest} width={width} height={height} layout="responsive" />;
    }
  }
};

const ImageWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={24} textAlign="center" {...rest} />;
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

const YoutubeEmbedWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={22} {...rest} />;
};

const YoutubeEmbed = LiteYouTubeEmbed;

const FigureWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={16} {...rest} />;
};

const FigureImage = (props) => {
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

const MDXComponents = {
  NextImage,
  ImageWrapper,
  FigureImage,
  YoutubeEmbedWrapper,
  YoutubeEmbed,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  hr,
  ul,
  ol,
  li,
  table,
};

export default MDXComponents;

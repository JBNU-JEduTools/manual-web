import { Box, Text, theme } from '@aksara-ui/react';
import { h1, h2, h3, h4, h5, h6, hr, p, ul, ol, li, table } from 'components/page/Markdown/MarkdownComponents';
import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const NextImage = (props) => {
  const { src, alt, width, height, ...rest } = props;
  if (height > 720) {
    return <Image src={src} alt={alt} width={width} height={height} {...rest} layout="intrinsic" />;
  } else {
    return <Image src={src} alt={alt} width={width} height={height} {...rest} />;
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
  const { src, alt, width, height, caption, ...rest } = props;
  return (
    <FigureWrapper>
      <ImageWrapper marginY={0}>
        <NextImage src={src} alt={alt} width={width} height={height} {...rest} />
      </ImageWrapper>
      <CaptionWrapper>
        <Text mr={5}>
          <strong>{caption?.title}</strong>
        </Text>
        <Text>{caption?.description}</Text>
      </CaptionWrapper>
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

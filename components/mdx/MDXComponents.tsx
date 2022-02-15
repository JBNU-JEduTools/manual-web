import { Box, Text, theme } from '@aksara-ui/react';
import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const NextImage = (props) => {
  const { src, alt, ...rest } = props;
  return <Image src={src} alt={alt} {...rest} />;
};

const ImageWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={24} {...rest} />;
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

const FigureImage = (props) => {
  const { src, alt, caption, ...rest } = props;
  return (
    <ImageWrapper>
      <Image src={src} alt={alt} {...rest} />
      <CaptionWrapper>
        <Text mr={5}>
          <strong>{caption?.title}</strong>
        </Text>
        <Text>{caption?.description}</Text>
      </CaptionWrapper>
    </ImageWrapper>
  );
};

const MDXComponents = { NextImage, ImageWrapper, FigureImage, YoutubeEmbedWrapper, YoutubeEmbed };

export default MDXComponents;

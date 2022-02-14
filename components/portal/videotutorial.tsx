import { Text, Box, Heading, theme, UnstyledAnchor } from '@aksara-ui/react';
import { Cards } from 'components/tutorials/components';
import { MarkdownContent } from 'interfaces/next';
import React from 'react';
import { HeaderSegment } from './components';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

interface TutorialsProps {
  tutorials?: MarkdownContent[];
}

const VideoTutorial: React.FC<TutorialsProps> = ({ tutorials }) => {
  return (
    <VideoTutorialWrapper>
      <HeaderSegment>
        <Heading scale={700} fontSize={24} mb={0}>
          Video Tutorial
        </Heading>
        <UnstyledAnchor
          fontSize={16}
          href="https://www.youtube.com/channel/UCrud2GevnuhBNM7C7RjakVg/playlists"
          target="_blank"
          cursor="pointer"
          color={theme.colors.blue07}
          _hover={{ textDecoration: 'underline', color: theme.colors.blue09, fontWeight: 500 }}
          fontWeight={500}
        >
          See all
        </UnstyledAnchor>
      </HeaderSegment>
      <Cards>
        <VideoWrapper>
          <LiteYouTubeEmbed
            id="fTMnCy9NE2w"
            title="Self-Onboarding"
            thumbnail="/assets/images/thumbnail/self-onboarding.png"
          />
          <Text textAlign="center" mb={10} mt={12} fontWeight={700} fontSize={16}>
            Kata Omnichat 2.0
          </Text>
        </VideoWrapper>
        <VideoWrapper>
          <LiteYouTubeEmbed
            id="eFWbrAObOXg"
            title="How to Set Up Qios"
            thumbnail="/assets/images/thumbnail/how-to-set-up-qios.png"
          />
          <Text textAlign="center" mb={10} mt={12} fontWeight={700} fontSize={16}>
            Qios Tutorial
          </Text>
        </VideoWrapper>
      </Cards>
    </VideoTutorialWrapper>
  );
};

export default VideoTutorial;

const VideoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${breakpoints.lg - 1}px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

const VideoTutorialWrapper = styled(Box)`
  margin-bottom: 48px;
  @media only screen and (min-width: ${breakpoints.lg}px) {
    margin-top: 96px;
  }
`;

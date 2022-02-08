import { Text, Box, Heading, theme, UnstyledAnchor } from '@aksara-ui/react';
import { Cards } from 'components/tutorials/components';
import { MarkdownContent } from 'interfaces/next';
import React from 'react';
import { HeaderSegment } from './components';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';

interface TutorialsProps {
  tutorials?: MarkdownContent[];
}

const VideoTutorial: React.FC<TutorialsProps> = ({ tutorials }) => {
  return (
    <Box>
      <HeaderSegment>
        <Heading scale={700} fontSize={24}>
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
        <Box display="flex" flexDirection="column">
          <LiteYouTubeEmbed id="fTMnCy9NE2w" title="Self-Onboarding" />
          <Text textAlign="center" mt={12} fontWeight={700} fontSize={16}>
            Kata Omnichat 2.0
          </Text>
        </Box>
        <Box display="flex" flexDirection="column">
          <LiteYouTubeEmbed id="eFWbrAObOXg" title="How to Set Up Qios" />
          <Text textAlign="center" mt={12} fontWeight={700} fontSize={16}>
            Qios Tutorial
          </Text>
        </Box>
      </Cards>
    </Box>
  );
};

export default VideoTutorial;

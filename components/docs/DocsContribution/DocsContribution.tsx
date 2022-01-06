import React from 'react';
import styled from 'styled-components';
import { theme, Text, Box, Button } from '@aksara-ui/react';
import { IconLike, IconDislike } from '@aksara-ui/icons';

const DocsContribution: React.FC = () => (
  <Wrapper mt="xl" pt="xl">
    <Text>
      Was this helpful?
    </Text>
    <Button icon={IconLike} iconPosition="left">Yes</Button>
    <Button icon={IconDislike} iconPosition="left">No</Button>
  </Wrapper>
);

export default DocsContribution;

const Wrapper = styled(Box)`
  margin-top: 24px;

  a {
    color: ${theme.colors.blue05}
  }

  a:hover {
    color: ${theme.colors.blue07}
  }

  h2 {
    margin-top: 0;
  }
`;

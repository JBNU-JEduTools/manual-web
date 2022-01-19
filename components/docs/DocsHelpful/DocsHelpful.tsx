import React from 'react';
import { Text, Box, Button as ButtonAksara, theme } from '@aksara-ui/react';
import { IconLike, IconDislike } from '@aksara-ui/icons';
import styled from 'styled-components';

const DocsHelpful: React.FC = () => (
  <Box display="flex" justifyContent="center" alignItems="center" mt={64}>
    <Text fontWeight={700} mr={12}>
      Was this helpful?
    </Text>
    <Button mr={12} icon={IconLike} iconPosition="left">
      Yes
    </Button>
    <Button icon={IconDislike} iconPosition="left">
      No
    </Button>
  </Box>
);

export default DocsHelpful;

const Button = styled(ButtonAksara)`
  background-color: ${theme.colors.greylight03};
  border-color: ${theme.colors.grey04};
  font-family: 'Inter';
`;

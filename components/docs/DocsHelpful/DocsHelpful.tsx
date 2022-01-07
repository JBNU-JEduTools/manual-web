import React from 'react';
import { Text, Box, Button } from '@aksara-ui/react';
import { IconLike, IconDislike } from '@aksara-ui/icons';

const DocsHelpful: React.FC = () => (
  <Box display="flex" justifyContent="center" alignItems="center" mt={64} >
    <Text fontWeight={700} mr={12}>
      Was this helpful?
    </Text>
    <Button mr={12} variant="secondary" icon={IconLike} iconPosition="left">Yes</Button>
    <Button variant="secondary" icon={IconDislike} iconPosition="left">No</Button>
  </Box>
);

export default DocsHelpful;

import React from 'react';
import { navigate } from '@reach/router';

const Index: React.FC = () => {
  React.useEffect(() => {
    navigate('/kata-platform/introduction/about');
  });
  return null;
};

export default Index;

import React from 'react';
import { navigate } from '@reach/router';

const Index: React.FC = () => {
  React.useEffect(() => {
    navigate('/qios/introduction');
  });
  return null;
};

export default Index;

import React from 'react';
import { SfxProvider } from './sfxContext';

const AppProviders = ({ children }) => {
  return <SfxProvider>{children}</SfxProvider>;
};

export default AppProviders;

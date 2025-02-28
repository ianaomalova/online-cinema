import React from 'react';

export interface ISeo {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

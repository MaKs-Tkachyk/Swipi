import React from 'react';
import { ComponentBasicProps } from './types';

const CarouselWrapper = ({ children }: ComponentBasicProps) => (
  <div
    style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}
  >
    {children}
  </div>
);

export default CarouselWrapper;

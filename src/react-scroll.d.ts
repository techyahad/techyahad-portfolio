declare module 'react-scroll' {
    import * as React from 'react';
  
    export interface LinkProps {
      to: string;
      smooth?: boolean;
      duration?: number;
      offset?: number;
      spy?: boolean;
      exact?: boolean;
      hashSpy?: boolean;
      onSetActive?: (to: string) => void;
      onSetInactive?: (to: string) => void;
      className?: string;
      activeClass?: string;
      onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
      children?: React.ReactNode;
    }
  
    export const Link: React.FC<LinkProps>;
  }
  
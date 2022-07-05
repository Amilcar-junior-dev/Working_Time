export interface PropsThemeDefault {
  fontSize?: fontSizeProps;
  borderRadius?: borderRadiusProps;
  spaces?: spacesProps;
}

interface fontSizeProps {
  smaller: number;
  small: number;
  average: number;
  big: number;
  xbig: number;
  xxbig: number;
}

interface borderRadiusProps {
  none: number;
  medium: number;
  big: number;
}

interface spacesProps {
  margins: {
    vertical: {
      micro: string;
      nano: string;
      smaller: string;
      small: string;
      medium: string;
      big: string;
      xbig: string;
      xxbig: string;
      xxxbig: string;
    };
    horizontal: {
      micro: string;
      nano: string;
      smaller: string;
      small: string;
      medium: string;
      big: string;
      xbig: string;
      xxbig: string;
      xxxbig: string;
    };
  };
}

export type PropsSpaceHorizontal =
  | 'micro'
  | 'nano'
  | 'smaller'
  | 'small'
  | 'medium'
  | 'big'
  | 'xbig'
  | 'xxbig'
  | 'xxxbig';
export type PropsSpaceVertical =
  | 'micro'
  | 'nano'
  | 'smaller'
  | 'small'
  | 'medium'
  | 'big'
  | 'xbig'
  | 'xxbig'
  | 'xxxbig';
export type PropsPadding =
  | 'smaler'
  | 'small'
  | 'medium'
  | 'big'
  | 'xbig'
  | 'xxbig'
  | 'xxxbig';

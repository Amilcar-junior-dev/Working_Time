export interface PropsThemeDefault {
  fontSize?: fontSizeProps;
  borderRadius?: borderRadiusProps;
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

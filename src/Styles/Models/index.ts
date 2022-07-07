export interface PropsThemeDefault {
  fontSize?: fontSizeProps;
  borderRadius?: borderRadiusProps;
  spaces?: spacesProps;
}
export interface Propscolors {
  PRIMARY_BASE_900: string;
  PRIMARY_BASE_800: string;
  PRIMARY_BASE_700: string;
  PRIMARY_BASE_600: string;
  PRIMARY_BASE_500: string;
  PRIMARY_BASE_400: string;
  ALERTY_BASE_900: string;
  ALERTY_BASE_800: string;
  SECUNDARY_BASE_02: string;
  SECUNDARY_BASE_03: string;
  SECUNDARY_BASE_04: string;
  SECUNDARY_BASE_05: string;
  SECUNDARY_BASE_06: string;
  SECUNDARY_BASE_07: string;
  SECUNDARY_BASE_08: string;
  LIGHT_BASE_900: string;
  LIGHT_BASE_800: string;
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
    padding: {
      smaller: string;
      small: string;
      big: string;
      xbig: string;
      xxbig: string;
      xxxbg: string;
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
  | 'smaller'
  | 'small'
  | 'medium'
  | 'big'
  | 'xbig'
  | 'xxbig'
  | 'xxxbig';

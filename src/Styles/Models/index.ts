export interface PropsThemeDefault {
  fontSize?: fontSizeProps;
  borderRadius?: borderRadiusProps;
  spaces?: spacesProps;
  colors?: colorsProps;
}
export interface colorsProps {
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
  huge: number;
}

interface borderRadiusProps {
  normal: number;
  medium: number;
  big: number;
  xbig: number;
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
export type PropsColors =
  | 'PRIMARY_BASE_900'
  | 'PRIMARY_BASE_800'
  | 'PRIMARY_BASE_700'
  | 'PRIMARY_BASE_600'
  | 'PRIMARY_BASE_500'
  | 'PRIMARY_BASE_400'
  | 'ALERTY_BASE_900'
  | 'ALERTY_BASE_800'
  | 'SECUNDARY_BASE_02'
  | 'SECUNDARY_BASE_03'
  | 'SECUNDARY_BASE_04'
  | 'SECUNDARY_BASE_05'
  | 'SECUNDARY_BASE_06'
  | 'SECUNDARY_BASE_07'
  | 'SECUNDARY_BASE_08'
  | 'LIGHT_BASE_900'
  | 'LIGHT_BASE_800';
export type PropsFontSize =
  | 'smaller'
  | 'small'
  | 'average'
  | 'big'
  | 'xbig'
  | 'xxbig'
  | 'huge';
export type PropsBorderRadius = 'normal' | 'medium' | 'big' | 'xbig';

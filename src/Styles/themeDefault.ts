import * as colors from '../Settings/colors';
import * as theme from '../Settings/environment';

const fontSize = {
  smaller: theme.FONT_SIZE_SMALLER,
  small: theme.FONT_SIZE_SMALL,
  average: theme.FONT_SIZE_AVERAGE,
  big: theme.FONT_SIZE_BIG,
  xbig: theme.FONT_SIZE_XBIG,
  xxbig: theme.FONT_SIZE_XXBIG,
  huge: theme.FONT_SIZE_HUGE,
};

const borderRadius = {
  normal: theme.BORDER_RADIUS_NORMAL,
  medium: theme.BORDER_RADIUS_MEDIUM,
  big: theme.BORDER_RADIUS_BIG,
  xbig: theme.BORDER_RADIUS_XBIG,
};

const spaces = {
  margins: {
    vertical: {
      micro: theme.MARGIN_VERTICAL_MICRO,
      nano: theme.MARGIN_VERTICAL_NANO,
      smaller: theme.MARGIN_VERTICAL_SMALLER,
      small: theme.MARGIN_VERTICAL_SMALL,
      medium: theme.MARGIN_VERTICAL_MEDIUM,
      big: theme.MARGIN_VERTICAL_BIG,
      xbig: theme.MARGIN_VERTICAL_XBIG,
      xxbig: theme.MARGIN_VERTICAL_XXBIG,
      xxxbig: theme.MARGIN_VERTICAL_XXXBIG,
    },
    horizontal: {
      micro: theme.MARGIN_HORIZONTAL_MICRO,
      nano: theme.MARGIN_HORIZONTAL_NANO,
      smaller: theme.MARGIN_HORIZONTAL_SMALLER,
      small: theme.MARGIN_HORIZONTAL_SMALL,
      medium: theme.MARGIN_HORIZONTAL_MEDIUM,
      big: theme.MARGIN_HORIZONTAL_BIG,
      xbig: theme.MARGIN_HORIZONTAL_XBIG,
      xxbig: theme.MARGIN_HORIZONTAL_XXBIG,
      xxxbig: theme.MARGIN_HORIZONTAL_XXXBIG,
    },
  },
  padding: {
    smaller: theme.PADDING_SMALLER,
    small: theme.PADDING_SMALL,
    medium: theme.PADDING_MEDIUM,
    big: theme.PADDING_BIG,
    xbig: theme.PADDING_XBIG,
    xxbig: theme.PADDING_XXBIG,
    xxxbig: theme.PADDING_XXXBIG,
  },
};
const fontWeigth = {
  ligth: theme.FONT_WEIGTH_LIGTH,
  medium: theme.FONT_WEIGTH_MEDIUM,
  bold: theme.FONT_WEIGTH_BOLD,
  black: theme.FONT_WEIGTH_BLACK,
};
const colorsEnvironment = {
  PRIMARY_BASE_900: colors.PRIMARY_BASE_900,
  PRIMARY_BASE_800: colors.PRIMARY_BASE_800,
  PRIMARY_BASE_700: colors.PRIMARY_BASE_700,
  PRIMARY_BASE_600: colors.PRIMARY_BASE_600,
  PRIMARY_BASE_500: colors.PRIMARY_BASE_500,
  PRIMARY_BASE_400: colors.PRIMARY_BASE_400,
  ALERTY_BASE_900: colors.ALERTY_BASE_900,
  ALERTY_BASE_800: colors.ALERTY_BASE_800,
  SECUNDARY_BASE_02: colors.SECUNDARY_BASE_02,
  SECUNDARY_BASE_03: colors.SECUNDARY_BASE_04,
  SECUNDARY_BASE_04: colors.SECUNDARY_BASE_04,
  SECUNDARY_BASE_05: colors.SECUNDARY_BASE_05,
  SECUNDARY_BASE_06: colors.SECUNDARY_BASE_07,
  SECUNDARY_BASE_07: colors.SECUNDARY_BASE_07,
  SECUNDARY_BASE_08: colors.SECUNDARY_BASE_08,
  LIGHT_BASE_900: colors.LIGHT_BASE_900,
  LIGHT_BASE_800: colors.LIGHT_BASE_800,
};

export default {
  fontSize,
  borderRadius,
  spaces,
  fontWeigth,
};

export const themes = {
  ...colors,
  fontSize,
  colorsEnvironment,
};

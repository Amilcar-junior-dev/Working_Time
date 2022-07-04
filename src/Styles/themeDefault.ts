import * as colors from '../Settings/colors';
import * as theme from '../Settings/environment';

export const defaultColors = {
  ...colors,
};

const fontSize = {
  smaller: theme.FONT_SIZE_SMALLER,
  small: theme.FONT_SIZE_SMALL,
  average: theme.FONT_SIZE_AVERAGE,
  big: theme.FONT_SIZE_BIG,
  xbig: theme.FONT_SIZE_XBIG,
  xxbig: theme.FONT_SIZE_XXBIG,
};

const borderRadius = {
  none: theme.BORDER_RADIUS_NONE,
  medium: theme.BORDER_READIUS_MEDIUM,
  big: theme.BORDER_RADIUS_BIG,
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
};

export default {
  fontSize,
  borderRadius,
  spaces,
};

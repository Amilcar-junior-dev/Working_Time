import * as breadh from '../../Settings/environment';
import {colorsProps} from '../../Styles/Models';
import * as theme from '../../Styles/themeDefault';

type MapOptions = {
  [key: string]: any;
};
const mapHorizontalMargin: MapOptions = {
  micro: breadh.MARGIN_HORIZONTAL_MICRO,
  nano: breadh.MARGIN_HORIZONTAL_NANO,
  smaller: breadh.MARGIN_HORIZONTAL_SMALLER,
  small: breadh.MARGIN_HORIZONTAL_SMALL,
  medium: breadh.MARGIN_HORIZONTAL_MEDIUM,
  big: breadh.MARGIN_HORIZONTAL_BIG,
  xbig: breadh.MARGIN_HORIZONTAL_XBIG,
  xxbig: breadh.MARGIN_HORIZONTAL_XXBIG,
  xxxbig: breadh.MARGIN_HORIZONTAL_XXXBIG,
};

export const transformMarginHorizontal = (margin?: string) => {
  if (margin) {
    return mapHorizontalMargin.hasOwnProperty(margin)
      ? mapHorizontalMargin[margin]
      : mapHorizontalMargin.undefined;
  }
  return mapHorizontalMargin.undefined;
};

const mapVerticalMargin: MapOptions = {
  micro: breadh.MARGIN_VERTICAL_MICRO,
  nano: breadh.MARGIN_VERTICAL_NANO,
  smaller: breadh.MARGIN_VERTICAL_SMALLER,
  small: breadh.MARGIN_VERTICAL_SMALL,
  medium: breadh.MARGIN_VERTICAL_MEDIUM,
  big: breadh.MARGIN_VERTICAL_BIG,
  xbig: breadh.MARGIN_VERTICAL_XBIG,
  xxbig: breadh.MARGIN_VERTICAL_XXBIG,
  xxxbig: breadh.MARGIN_VERTICAL_XXXBIG,
};

export const transformMarginVertical = (margin?: string) => {
  if (margin) {
    return mapHorizontalMargin.hasOwnProperty(margin)
      ? mapVerticalMargin[margin]
      : mapVerticalMargin.undefined;
  }
  return mapVerticalMargin.undefined;
};

const mapPadding: MapOptions = {
  smaller: theme.default.spaces.padding.smaller,
  small: theme.default.spaces.padding.small,
  big: theme.default.spaces.padding.big,
  xbig: theme.default.spaces.padding.xbig,
  xxbig: theme.default.spaces.padding.xxbig,
  xxxbig: theme.default.spaces.padding.xxxbig,
};

export const transformPadding = (padding: string) => {
  if (padding) {
    return mapPadding.hasOwnProperty(padding)
      ? mapPadding[padding]
      : mapPadding.undefined;
  }
  return mapPadding.undefined;
};

const mapFontSize: MapOptions = {
  smaller: theme.default.fontSize.smaller,
  small: theme.default.fontSize.small,
  average: theme.default.fontSize.average,
  big: theme.default.fontSize.big,
  xbig: theme.default.fontSize.xbig,
  xxbig: theme.default.fontSize.xxbig,
  huge: theme.default.fontSize.huge,
};

export const transformFontSize = (fontSize: string) => {
  if (fontSize) {
    return mapFontSize.hasOwnProperty(fontSize)
      ? mapFontSize[fontSize]
      : mapFontSize.undefined;
  }
  return mapFontSize.undefined;
};
const mapBorderRadius: MapOptions = {
  normal: theme.default.borderRadius.normal,
  medium: theme.default.borderRadius.medium,
  big: theme.default.borderRadius.big,
  xbig: theme.default.borderRadius.xbig,
};
export const transformBorderRadius = (borderRadius?: string) => {
  if (borderRadius) {
    return mapBorderRadius.hasOwnProperty(borderRadius)
      ? mapBorderRadius[borderRadius]
      : mapBorderRadius.undefined;
  }
  return mapBorderRadius.undefined;
};

export const mapColors = (color: colorsProps, token: string) => {
  const data: MapOptions = {
    PRIMARY_BASE_900: color.PRIMARY_BASE_900,
    PRIMARY_BASE_800: color.PRIMARY_BASE_800,
    PRIMARY_BASE_700: color.PRIMARY_BASE_700,
    PRIMARY_BASE_600: color.PRIMARY_BASE_600,
    PRIMARY_BASE_500: color.PRIMARY_BASE_500,
    PRIMARY_BASE_400: color.PRIMARY_BASE_400,
    ALERTY_BASE_900: color.ALERTY_BASE_900,
    ALERTY_BASE_800: color.ALERTY_BASE_800,
    SECUNDARY_BASE_02: color.SECUNDARY_BASE_02,
    SECUNDARY_BASE_03: color.SECUNDARY_BASE_03,
    SECUNDARY_BASE_04: color.SECUNDARY_BASE_04,
    SECUNDARY_BASE_05: color.SECUNDARY_BASE_05,
    SECUNDARY_BASE_06: color.SECUNDARY_BASE_06,
    SECUNDARY_BASE_07: color.SECUNDARY_BASE_07,
    SECUNDARY_BASE_08: color.SECUNDARY_BASE_08,
    LIGHT_BASE_900: color.LIGHT_BASE_900,
    LIGHT_BASE_800: color.LIGHT_BASE_800,
    transparente: 'transparente',
    undefined: color.LIGHT_BASE_800,
  };
  return data.hasOwnProperty(token) ? data[token] : data.undefined;
};

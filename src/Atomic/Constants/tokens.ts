import * as breadh from '../../Settings/environment';

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

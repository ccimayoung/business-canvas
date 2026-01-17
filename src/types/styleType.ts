export type divProps = {
  w?: string;
  h?: string;
  m?: string;
  cGap?: string;
  rGap?: string;
  align?: string;
  justify?: string;
  bgColor?: string;
  padding?: string;
};

export type fontProps = {
  w?: string;
  h?: string;
  m?: string;
  align?: string;
  color?: string;
  padding?: string;
  fontType: fontHandleType;
};

export type fontHandleType = 'heading_heading5' | 'base_strong' | 'base_normal';

import { css } from 'styled-components';

type MediaFn = (...args: any[]) => string;

interface Media {
  desktop: MediaFn;
  tablet: MediaFn;
  mobile: MediaFn;
  lg: MediaFn;
  md: MediaFn;
  sm: MediaFn;
  xs: MediaFn;
}

const sizes: { [key: string]: number } = {
  tablet: 768,
  mobile: 576,
  xs: 320,
};

const media: any = Object.keys(sizes).reduce((acc: { [key: string]: any }, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      // @ts-ignore
      ${css(...args)}
    }
  `;

  return acc;
}, {});

media.desktop = (...args: any[]) => css`
  @media (min-width: ${769 / 16}em) {
    // @ts-ignore
    ${css(...args)}
  }
`;

media.sm = media.mobile;
media.md = media.tablet;
media.lg = media.desktop;

export default media as Media;

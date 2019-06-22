import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamilyBase: string;
    fontFamilySecondary: string;
    textShadowBase: string;
    overlayBase: string;
  }
}

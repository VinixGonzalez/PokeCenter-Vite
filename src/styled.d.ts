import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      purpleHover: string;
      black: string;
      white: string;
      red: string;
      green: string;
      backgrounds: {
        emptyBg: string;
        selectedBg: string;
        shadowBg: string;
        opacityBg: string;
      };
    };
  }
}

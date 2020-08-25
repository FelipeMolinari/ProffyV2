import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      firsBackground: string;
      secondBackground: string;
      thirdBackground: string;
      input: string;
      inputText: string;
      border: string;
      mainText: string;
      titleText: string;
      complementText: string;
      colorComplement: string;
    };
  }
}

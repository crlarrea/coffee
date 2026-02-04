type ItemProps = {
  description: string;
  backgroundColourStart: string;
  backgroundColourEnd: string;
  textColour: string;
  imgURL: string;
  decorativeBkg: string;
  updateStyle: (
    descriptoin:string,
    backgroundColourStart: string,
    backgroundColourEnd: string,
    textColour: string,
    imgURL: string,
  ) => void;
};


export type {ItemProps}
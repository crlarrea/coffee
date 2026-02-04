type ItemProps = {
  description: string;
  backgroundColourStart: string;
  backgroundColourEnd: string;
  textColour: string;
  imgURL: string;
  backgroundImgURL: string;
  updateStyle: (
    backgroundColourStart: string,
    textColour: string,
    imgURL: string,
  ) => void;
};


export type {ItemProps}
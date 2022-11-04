interface Result {
  question: string;
  answer: string | number;
}

interface ThreeDimention {
  name: string;  
}

interface TwoDimention extends ThreeDimention {
  properties: Array<string>;
  symmetry: number;
};

type Unit = {
  name: string;
  count: number;
};
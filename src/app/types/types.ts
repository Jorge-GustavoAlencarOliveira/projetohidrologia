export type EquacaoIDFprops = {
  k?: string;
  a?: string;
  b?: string;
  c?: string;
};

export type DataProps = { data: string[][] };

export type objProps = {
  2: number;
  5: number;
  10: number;
  15: number;
  20: number;
  25: number;
  30: number;
  50: number;
  duracao: number;
};

export type objInitialProps = Omit<objProps, '2' | '5' | '10'| '15'| '20' | '25' | '30'| '50'>
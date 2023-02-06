type OperatorsInput = {
  a: number;
  b: number;
};

export function add({ a, b }: OperatorsInput): Promise<number> {
  return Promise.resolve(a + b);
}

export function subtract({ a, b }: OperatorsInput): Promise<number> {
  return Promise.resolve(a - b);
}

export function multiply({ a, b }: OperatorsInput): Promise<number> {
  return Promise.resolve(a * b);
}

export function divide({ a, b }: OperatorsInput): Promise<number> {
  return Promise.resolve(a / b);
}

export function equals({ a, b }: OperatorsInput): Promise<number> {
  return Promise.resolve(a === b);
}

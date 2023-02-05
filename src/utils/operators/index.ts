type Args = [number, number, ...number[]];

export function add(...args: Args): number {
  return args.reduce((previousValue, value) => {
    return previousValue + value;
  }, 0);
}

export function subtract(...[firstArg, ...restArgs]: Args): number {
  return restArgs.reduce((previousValue, value) => {
    return previousValue - value;
  }, firstArg);
}

export function multiply(...[firstArg, ...restArgs]: Args): number {
  return restArgs.reduce((previousValue, value) => {
    return previousValue * value;
  }, firstArg);
}

export function divide(...[firstArg, ...restArgs]: Args): number {
  return restArgs.reduce((previousValue, value) => {
    return previousValue / value;
  }, firstArg);
}

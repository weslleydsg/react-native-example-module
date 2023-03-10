import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { utils } from 'react-native-example-package';

const { add, subtract, multiply, divide, power, equals } = utils.operators;

export default function App() {
  const [addResult, setAddResult] = React.useState<number | undefined>();
  const [subtractResult, setSubtractResult] = React.useState<
    number | undefined
  >();
  const [multiplyResult, setMultiplyResult] = React.useState<
    number | undefined
  >();
  const [divideResult, setDivideResult] = React.useState<number | undefined>();
  const [powerResult, setPowerResult] = React.useState<number | undefined>();
  const [equalsResult, setEqualsResult] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    setAddResult(add(-3, 7, 2, 1));
    setSubtractResult(subtract(3, 7));
    setMultiplyResult(multiply(3, 7, 10));
    setDivideResult(divide(8, 2, 2));
    setPowerResult(power(3, 3));
    setEqualsResult(equals(2, 2, 2, 2));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Add Result: {addResult}</Text>
      <Text>Subtract Result: {subtractResult}</Text>
      <Text>Multiply Result: {multiplyResult}</Text>
      <Text>Divide Result: {divideResult}</Text>
      <Text>Power Result: {powerResult}</Text>
      <Text>Equals Result: {String(equalsResult)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

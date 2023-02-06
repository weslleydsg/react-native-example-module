import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import {
  add,
  divide,
  equals,
  multiply,
  subtract,
} from 'react-native-example-package';

export default function App() {
  const [addResult, setAddResult] = React.useState<number | undefined>();
  const [subtractResult, setSubtractResult] = React.useState<
    number | undefined
  >();
  const [multiplyResult, setMultiplyResult] = React.useState<
    number | undefined
  >();
  const [divideResult, setDivideResult] = React.useState<number | undefined>();
  const [equalsResult, setEqualsResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    add({ a: 3, b: 7 }).then(setAddResult);
    subtract({ a: 3, b: 7 }).then(setSubtractResult);
    multiply({ a: 3, b: 7 }).then(setMultiplyResult);
    divide({ a: 10, b: 2 }).then(setDivideResult);
    equals({ a: 2, b: 2 }).then(setEqualsResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Add Result: {addResult}</Text>
      <Text>Subtract Result: {subtractResult}</Text>
      <Text>Multiply Result: {multiplyResult}</Text>
      <Text>Divide Result: {divideResult}</Text>
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

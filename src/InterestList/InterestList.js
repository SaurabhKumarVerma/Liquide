import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InterestList = ({route}) => {
  console.log('route', route.params.data);
  const renderItem = () => {
    return route.params.data.map((item, index) => (
      <View key={index} style={styles.container}>
        <Text style={styles.textStyle}>{item}</Text>
      </View>
    ));
  };
  return <View>{renderItem()}</View>;
};

export default InterestList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    height: 30,
    justifyContent: 'center',
  },
  textStyle: {
    marginLeft: 10,
  },
});

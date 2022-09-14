import {StyleSheet, Dimensions, SafeAreaView, Button} from 'react-native';
import React, {useState} from 'react';
import Interest from './Interests.json';
import BubbleSelect, {Bubble} from '@vahesaroyan/react-native-bubble-select';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const exampleData = Interest.map(item => ({
  borderColor: '#fff',
  selectedColor: 'blue',
  key: item.id,
  marginScale: 1.3,
  color: '#19de19',
  text: item.interestName,
  id: item.id.toString(),
}));

const BubbleScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() =>
            navigation.navigate('InterestList', {
              data: selected,
            })
          }
          title="DONE"
          disabled={selected.length >= 3 ? false : true}
        />
      ),
    });
  }, [navigation, selected]);

  const onSelected = bubble => {
    setSelected([...selected, bubble.text]);
  };

  const onDeselect = bubble => {
    setSelected(selected.filter(item => item !== bubble.text));
  };
  return (
    <SafeAreaView style={styles.container}>
      <BubbleSelect
        onSelect={onSelected}
        onDeselect={onDeselect}
        fontSize={20}
        width={width}
        height={height}
        bubbleSize={30}>
        {exampleData.map(item => (
          <Bubble {...item} />
        ))}
      </BubbleSelect>
    </SafeAreaView>
  );
};

export default BubbleScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,

    flexDirection: 'row',
  },
});

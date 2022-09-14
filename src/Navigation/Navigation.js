import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BubbleScreen from '../Bubble/Bubble';
import InterestList from '../InterestList/InterestList';

const MainScreenNavigator = createStackNavigator();

function MyStack() {
  return (
    <MainScreenNavigator.Navigator>
      <MainScreenNavigator.Screen name="Bubble" component={BubbleScreen} />
      <MainScreenNavigator.Screen
        name="InterestList"
        component={InterestList}
      />
    </MainScreenNavigator.Navigator>
  );
}
export default MyStack;

//import library for making a Component
import React from 'react';
import { Text, View } from 'react-native';
// make a header Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
     //(headerText ke jagah kuchh bhi likh sakte hai jaise 'thingsToShow' ya 'Chutiya')
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
);
};
const styles = {
  viewStyle: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#2c3e50',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 1.0,

    /* This 'elevation' property is must to apply shadow property because there is a bug
    in react-native*/
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
};
// make the component available to other parts of the App
export { Header };

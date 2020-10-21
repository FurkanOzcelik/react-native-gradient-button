import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const My_Gradient_Button = ({
  button_text = 'Button',
  gradient_style = styles.gradientStyle,
  modify_gradient_style = {},
  text_style = styles.textStyle,
  modify_text_style = {},
  onPress = () => {},
  on_press_opacity = 0.4,
  is_vertical = true,
  colors = ['#6034ac', '#d07911'],
}) => {
  return (
    <TouchableOpacity activeOpacity={on_press_opacity} onPress={onPress}>
      <LinearGradient
        start={is_vertical ? {x: 0, y: 1} : {x: 0, y: 1}}
        end={is_vertical ? {x: 0, y: 0} : {x: 1, y: 0}}
        colors={colors}
        style={[gradient_style, modify_gradient_style]}>
        <Text style={[text_style, modify_text_style]}>{button_text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    minWidth: 120,
    width: 'auto',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  },
});

export default My_Gradient_Button;

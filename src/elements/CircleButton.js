import React from "react";
import { Font } from 'expo';
import { StyleSheet, View, Text } from "react-native";

import fontAwesom from "../../assets/fonts/fa-solid-900.ttf";

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Font.loadAsync({
      'fontAwesom': fontAwesom,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;

    let bgColor = "#e31676";
    let textColor = "#fff";

    if (color === "white") {
      bgColor = "#fff";
      textColor = "#e31676";
    }
    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {this.state.fontLoaded ? (
          <Text style={[styles.circleButtonTitle, { color: textColor }]}>
            {this.props.children}
          </Text>
        ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    
    position: "absolute",
    bottom: 12,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: "fontAwesom",
    fontSize: 24,
    lineHeight: 24,
  }
});

export default CircleButton;
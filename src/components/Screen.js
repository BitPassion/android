import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import { Icon, Header } from "react-native-elements";
import FastImage from "react-native-fast-image";
import { black } from "../helpers/Color";
import { getStatusBarHeight } from "react-native-status-bar-height";

import MenuIcon from "../assets/open-menu.png";

const Container = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: black,
        marginTop: getStatusBarHeight(),
      }}
    >
      {children}
    </SafeAreaView>
  );
};
class Screen extends Component {
  render() {
    const { children, type, navigation } = this.props;
    return (
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent
        />
        <View style={styles.headerView}>
          <View>
            <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
              <FastImage source={MenuIcon} style={styles.navIcon} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.headerTitleView}>
            <Text style={styles.headerTitle}>MQX Stream+</Text>
          </View>
          <View>
            <Icon
              name={"search"}
              size={20}
              onPress={() => navigation.navigate("Search", { type })}
              color="white"
            />
          </View>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {children}
        </ScrollView>
      </Container>
    );
  }
}
Screen.propTypes = {
  navigation: PropTypes.object,
  children: PropTypes.any.isRequired,
};
const styles = StyleSheet.create({
  headerView: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  navIcon: {
    width: 20,
    height: 20,
  },
  headerTitleView: {
    flex: 1,
  },
  headerTitle: {
    color: "#e50913",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Screen;

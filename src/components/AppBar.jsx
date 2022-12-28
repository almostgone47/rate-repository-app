import { ScrollView, View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000000",
    height: 70,
    padding: 9,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Link to="/" style={{ marginRight: 15 }}>
            <Text fontWeight="bold" style={{ color: "#ffffff" }}>
              Repositories
            </Text>
          </Link>
          <Link to="/signin">
            <Text fontWeight="bold" style={{ color: "#ffffff" }}>
              Sign In
            </Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;

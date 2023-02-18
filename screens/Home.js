import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import React from "react";
import Title from "../components/Title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.bannerContainer}>
        <Image
          source={require("../images/banner.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>

      {/* <TouchableOpacity>
            <Text>Start</Text>
        </TouchableOpacity> */}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Quiz");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 300,
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },

  button: {
    width: "100%",
    backgroundColor: "#2196F3",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});

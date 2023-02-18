import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Result = ({ navigation, route }) => {
  const params = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.scoreboardcontainer}>
        <Text style={styles.scoreboardtext}>Score Board</Text>
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={require("../images/grades.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.scoreContainer}>
        <Text style={styles.score}>Your Score is : {params.score}</Text>
      </TouchableOpacity>

      <View style={styles.homebuttoncontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.homebutton}
        >
          <Text style={styles.hometext}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: "100%",
  },

  banner: {
    width: 300,
    height: 300,
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  homebutton: {
    width: "40%",
    backgroundColor: "#2196F3",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  hometext: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  scoreContainer: {
    alignItems: "center",
  },
  score: {
    fontSize: 25,
    fontWeight: "600",
  },
  homebuttoncontainer: {
    alignItems: "center",
  },

  scoreboardcontainer: {
    alignItems: "center",
    paddingTop: 12,
  },

  scoreboardtext: {
    fontSize: 25,
    fontWeight: "600",
  },
});

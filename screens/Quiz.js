import {
  Image,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();

  const [ques, setQues] = useState(0);

  const [options, setOptions] = useState([]);

  const [score, setScore] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);

    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";

    const res = await fetch(url);

    const data = await res.json();

    setQuestions(data.results);

    setOptions(generateOptionsAndShuffle(data.results[0]));

    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];

    options.push(_question.correct_answer);

    shuffleArray(options);

    return options;
  };

  const handleSelectorOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 1);
    }

    if (ques !== 9) {
      setQues(ques + 1);

      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }

    if (ques === 9) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    navigation.navigate("Result", { score: score });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "600" }}>Loading ...</Text>
        </View>
      ) : (
        questions && (
          <View style={{ height: "100%" }}>
            <View style={styles.top}>
              <Text style={{ fontSize: 28 }}>
                Q.
                {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>

            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={styles.options}
                onPress={() => handleSelectorOption(options[0])}
              >
                <Text style={styles.text}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.options}
                onPress={() => handleSelectorOption(options[1])}
              >
                <Text style={styles.text}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.options}
                onPress={() => handleSelectorOption(options[2])}
              >
                <Text style={styles.text}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.options}
                onPress={() => handleSelectorOption(options[3])}
              >
                <Text style={styles.text}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
              {/* <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Prev</Text>
            </TouchableOpacity> */}
              {ques !== 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
              )}

              {ques == 9 && (
                <TouchableOpacity
                  onPress={() => {
                    handleShowResult();
                  }}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Show Results</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },

  top: {
    marginVertical: 16,
  },
  optionContainer: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  options: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    marginBottom: 8,
    paddingLeft: 5,
    paddingVertical: 5,
  },

  text: {
    color: "white",
    fontSize: 18,
  },

  button: {
    backgroundColor: "#1e7cc7",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
});

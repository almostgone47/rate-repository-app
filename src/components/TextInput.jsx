import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 10,
    padding: 15,
    borderRadius: 5,
    borderColor: "grey",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={[textInputStyle, styles.input]} {...props} />;
};

export default TextInput;

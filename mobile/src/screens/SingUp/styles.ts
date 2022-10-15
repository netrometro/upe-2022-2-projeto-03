import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'brown',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: "5%",
    width: "80%",
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
    alignSelf: "center",
  },
});
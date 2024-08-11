import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollview: {
    flexDirection: "column",
    width: "100%",
    
  },
  viewOvne: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    
  },
  viewForm: {
    
  },
  textInput: {
    backgroundColor: "gray",
    width: "100%",
    color: "black",
    fontSize: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,

  },
  text: {
    color: "white",
    paddingTop: 15,
    fontSize: 16
  },
  textInputLong:{
    textAlign: "center",
    backgroundColor: "gray",
    width: "100%",
    minHeight: 200,
    color: "black",
    fontSize: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  }
});

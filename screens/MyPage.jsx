import { StyleSheet, View, Text } from "react-native";

export default function MyPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
  },
});

import { StyleSheet, View, Text } from "react-native";

function DayOfWeek() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <View style={styles.days}>
      {days.map((day, idx) => (
        <View style={styles.box} key={idx}>
          <Text style={changeColor(day).days}>{day}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  days: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: "14.2%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
});

const changeColor = (day) =>
  StyleSheet.create({
    days: {
      color: day === "Sun" ? "red" : day === "Sat" ? "blue" : "gray",
      fontSize: 16,
    },
  });

export default DayOfWeek;

import { StyleSheet, View, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

function Header(props) {
  const monthNames = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <View style={styles.container}>
      <Pressable onPress={props.prevMonth}>
        <Entypo name="chevron-left" size={30} color="lightblue" />
      </Pressable>
      <Text style={styles.month}>{monthNames[props.month]}</Text>
      <Text style={styles.year}>{props.year}</Text>
      <Pressable onPress={props.nextMonth}>
        <Entypo name="chevron-right" size={30} color="lightblue" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  month: {
    fontSize: 24,
  },
  year: {
    marginLeft: 10,
    fontSize: 24,
  },
});

export default Header;

// 외부
import { StyleSheet, View, Text } from "react-native";
import TotalDays from "../../utils/TotalDays";

// 내부
import DayOfWeek from "./DayOfWeek";

function Body(props) {
  return (
    <View style={styles.container}>
      <DayOfWeek />
      <TotalDays year={props.year} month={props.month} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Body;

// 외부
import { StyleSheet, View } from "react-native";

// 내부
import CalendarCon from "../components/calendar/CalendarCon";

export default function Calendar() {
  return (
    <View style={styles.container}>
      <CalendarCon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

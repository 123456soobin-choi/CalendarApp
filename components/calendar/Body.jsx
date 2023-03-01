// 외부
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// 내부
import DayOfWeek from "./DayOfWeek";
import TotalDays from "./TotalDays";

function Body({ year, month, date, today, toSelectedMonth }) {
  return (
    <View style={styles.container}>
      <DayOfWeek />
      <TotalDays
        year={year}
        month={month}
        date={date}
        today={today}
        toSelectedMonth={toSelectedMonth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default Body;

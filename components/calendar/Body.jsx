// 외부
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// 내부
import DayOfWeek from "./DayOfWeek";
import TotalDays from "./TotalDays";

function Body({ year, month, date }) {
  return (
    <View style={styles.container}>
      <DayOfWeek />
      <TotalDays year={year} month={month} date={date} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // flexDirection: "row",
    // backgroundColor: "yellow",
  },
});

export default Body;

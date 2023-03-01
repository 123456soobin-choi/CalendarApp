// 외부
import { useState } from "react";
import { StyleSheet, View } from "react-native";

// 내부
import Header from "./Header";
import Body from "./Body";

function CalendarCon() {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [date, setDate] = useState(DAY);

  const prevMonth = () => {
    if (month === 1) {
      setYear((prev) => prev - 1);
      setMonth(12);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setYear((prev) => prev + 1);
      setMonth(1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  const toSelectedMonth = (year, month) => {
    setYear(year);
    setMonth(month);
  };

  return (
    <View style={styles.container}>
      <Header
        year={year}
        month={month}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <Body
        year={year}
        month={month}
        date={date}
        toSelectedMonth={toSelectedMonth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});

export default CalendarCon;

// 외부
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { v4 as uuidv4 } from "uuid";

function TotalDays({ year, month, date }) {
  const [totalDayDivide, setTotalDayDivide] = useState([]);
  const [week, setWeek] = useState(0);
  const [totalDays, setTotalDays] = useState({});

  const [selectedDate, setSelectedDate] = useState({
    state: "",
    year: 0,
    month: 0,
    date: 0,
  });

  const getTotalDays = (year, month) => {
    const previousMonthLastDate = new Date(year, month - 1, 0).getDate();
    const previousMonthLastDay = new Date(year, month - 1, 0).getDay();
    const currentMonthLastDate = new Date(year, month, 0).getDate();
    const currentMonthLastDay = new Date(year, month, 0).getDay();

    const previousDays = Array.from(
      { length: previousMonthLastDay + 1 },
      (v, i) => previousMonthLastDate - previousMonthLastDay + i
    );
    const currentDays = Array.from(
      { length: currentMonthLastDate },
      (v, i) => i + 1
    );
    const nextDays = Array.from(
      { length: 6 - currentMonthLastDay },
      (v, i) => i + 1
    );

    setTotalDays({
      prev: previousMonthLastDay !== 6 ? previousDays : [],
      curr: currentDays,
      next: nextDays,
    });

    setTotalDayDivide(
      divideDay([...previousDays, ...currentDays, ...nextDays], 7)
    );
  };

  function divideDay(data = [], size = 1) {
    const arr = [];
    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size));
    }
    return arr;
  }

  function handleSelectDate(selectedDate) {
    setSelectedDate(selectedDate);
  }

  useEffect(() => {
    getTotalDays(year, month);
  }, [year, month]);

  useEffect(() => {
    totalDayDivide.forEach((el, idx) => {
      if (el.includes(date)) {
        setWeek(idx);
      }
    });
  }, [totalDays]);

  return (
    <View style={styles.container}>
      {totalDays?.prev?.map((el, idx) => (
        <View style={styles.box}>
          <Text style={styles.prev} key={idx}>
            {el}
          </Text>
        </View>
      ))}
      {totalDays?.curr?.map((el, idx) => (
        <View style={styles.box}>
          <Text style={styles.curr} key={idx}>
            {el}
          </Text>
        </View>
      ))}
      {totalDays?.next?.map((el, idx) => (
        <View style={styles.box}>
          <Text style={styles.next} key={idx}>
            {el}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  box: {
    width: "14.2%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  prev: {
    color: "gray",
    fontSize: 16,
  },
  next: {
    color: "gray",
    fontSize: 16,
  },
  curr: {
    color: "black",
    fontSize: 16,
  },
});

export default TotalDays;

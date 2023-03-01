// 외부
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { v4 as uuidv4 } from "uuid";

function TotalDays({ year, month, date, toSelectedMonth }) {
  const [totalDayDivide, setTotalDayDivide] = useState([]);
  const [week, setWeek] = useState(0);
  const [totalDays, setTotalDays] = useState({});
  const today = new Date();

  const [selected, setSelected] = useState({
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
    // 일요일 0부터 시작 토요일 6으로 끝남

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

  const handleSelectDate = ({ year, month, date }) => {
    setSelected({ state: "", year, month, date });
  };

  const handleToMonth = ({ year, month, date }) => {
    setSelected({ state: "", year, month, date });
    toSelectedMonth(year, month);
  };

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
      {totalDays?.prev?.map((day, idx) => (
        <View style={styles.box}>
          <Pressable
            onPress={() => handleToMonth({ year, month, date: day })}
            style={
              selected.date === day &&
              selected.month === month &&
              selected.year === year
                ? styles.selectedDate
                : null
            }
          >
            <Text style={styles.prev} key={idx}>
              {day}
            </Text>
          </Pressable>
        </View>
      ))}
      {totalDays?.curr?.map((day, idx) => (
        <View style={styles.box}>
          <Pressable
            onPress={() => handleSelectDate({ year, month, date: day })}
            style={[
              selected.date === day &&
              selected.month === month &&
              selected.year === year
                ? styles.selectedDate
                : null,
              // 오늘 날짜일 경우
              //   today.toDateString() === date.toDateString()
              //     ? styles.today
              //     : null,
            ]}
          >
            <Text style={styles.curr} key={idx}>
              {day}
            </Text>
          </Pressable>
        </View>
      ))}
      {totalDays?.next?.map((day, idx) => (
        <View style={styles.box}>
          <Pressable
            onPress={() => handleToMonth({ year, month, date: day })}
            style={[
              selected.date === day &&
              selected.month === month &&
              selected.year === year
                ? styles.selectedDate
                : null,
            ]}
          >
            <Text style={styles.next} key={idx}>
              {day}
            </Text>
          </Pressable>
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
  selectedDate: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  today: {
    color: "#2196f3",
    fontSize: 24,
  },
});

export default TotalDays;

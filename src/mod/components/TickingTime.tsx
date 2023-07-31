import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {calculateTimeLeft, timeLeftDisplay} from '../utils/IndexUtils';

type TickingTimeType = {
  endingTime: number;
  endsAt: number;
  highestBid: number;
};
const TickingTime = ({endingTime, endsAt, highestBid}: TickingTimeType) => {
  const [currentTime, setCurrentTime] = useState<number>(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000); // Update the timer every second

    return () => clearInterval(timer);
  }, []);

  const {hours, minutes, seconds} = calculateTimeLeft(endingTime, currentTime);
  const calculateTimerText = timeLeftDisplay(hours, minutes, seconds);

  return (
    <View style={styles.container}>
      <Text
        style={styles.endingTimeText}>{`Auction ends in ${endsAt} hours`}</Text>
      <Text style={styles.timerText}>{calculateTimerText}</Text>
      <Text style={styles.highesBid}>{`highestBid: ${highestBid}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  endingTimeText: {
    marginTop: 20,
    fontSize: 15,
    color: 'red',
  },
  highesBid: {
    marginTop: 20,
  },
});

export default TickingTime;

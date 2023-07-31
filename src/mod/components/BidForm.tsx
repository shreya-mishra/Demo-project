import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

type BidFormType = {
  highestBid: number;
  setHighestBid: (highestBid: number) => void;
  onClose: () => void;
};
const BidForm = ({highestBid, setHighestBid, onClose}: BidFormType) => {
  const [userBid, setUserBid] = useState<number>('');
  const [error, setError] = useState('');

  const handleBidChange = (bid: string) => {
    setUserBid(Number(bid));
    setError('');
  };

  const handlePlaceBid = () => {
    const bidAmount = userBid;

    if (isNaN(bidAmount) || bidAmount <= highestBid) {
      setError('Your bid must be higher than the current highest bid.');
    } else {
      setHighestBid(bidAmount);
      setError('');
    }
    onClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Highest Bid: Rs. {highestBid}</Text>
      </View>
      <View style={styles.field}>
        <Text>Your Bid:</Text>
        <TextInput
          style={styles.input}
          value={userBid.toString()}
          onChangeText={handleBidChange}
          keyboardType="numeric"
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handlePlaceBid}>
        <Text>Place Bid</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default BidForm;

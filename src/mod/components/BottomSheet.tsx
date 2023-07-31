import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import BidForm from './BidForm';

type BottomSheetType = {
  isVisible: boolean;
  onClose: () => void;
  highestBid: number;
  setHighestBid: (highestBid: number) => void;
};
const BottomSheet = ({
  isVisible,
  onClose,
  highestBid,
  setHighestBid,
}: BottomSheetType) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      style={styles.modal}>
      <View style={styles.sheet}>
        <BidForm
          highestBid={highestBid}
          setHighestBid={setHighestBid}
          onClose={onClose}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  sheet: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default BottomSheet;

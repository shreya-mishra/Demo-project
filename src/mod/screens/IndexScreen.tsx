import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../components/PrimaryButton';
import BottomSheet from '../components/BottomSheet';
import ProductDetails from '../components/ProductDetails';
import {IndexUtils} from '../utils/IndexUtils';
import TickingTime from '../components/TickingTime';

const IndexScreen = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [highestBid, setHighestBid] = useState(IndexUtils.cost);

  const endingTime = Date.now() + IndexUtils.autionEndsAt * 60 * 60 * 1000;

  const handleOpenBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: IndexUtils.image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <ProductDetails name={IndexUtils.name} price={IndexUtils.cost} />
      <TickingTime
        endingTime={endingTime}
        endsAt={IndexUtils.autionEndsAt}
        highestBid={highestBid}
      />

      <PrimaryButton title={'PLACE BID'} onPress={handleOpenBottomSheet} />
      <BottomSheet
        isVisible={isBottomSheetVisible}
        onClose={handleCloseBottomSheet}
        highestBid={highestBid}
        setHighestBid={setHighestBid}
      />
    </View>
  );
};

export default IndexScreen;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  imageContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    padding: 2,
    backgroundColor: 'grey',
    margin: 10,
  },
  image: {
    width: screenWidth,
    height: screenWidth * 0.6,
  },
});

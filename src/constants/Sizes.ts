import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Sizes = {
  width,
  height,
  small: width < 375,
  medium: width >= 375 && height <= 766,
  large: height > 766,
};

export default Sizes;

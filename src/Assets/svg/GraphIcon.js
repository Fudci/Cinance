import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="#FFDD"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={4}
      d="M12 19v-8M7 19v-4M17 19V6"
    />
  </Svg>
);
export default SvgComponent;

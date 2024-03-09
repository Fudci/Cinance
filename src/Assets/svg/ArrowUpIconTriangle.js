import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={10}
    height={10}
    fill="#4E5867"
    viewBox="0 0 123.959 123.959"
    {...props}>
    <Path d="M66.18 29.742c-2.301-2.3-6.101-2.3-8.401 0l-56 56c-3.8 3.801-1.1 10.2 4.2 10.2h112c5.3 0 8-6.399 4.2-10.2l-55.999-56z" />
  </Svg>
);
export default SvgComponent;

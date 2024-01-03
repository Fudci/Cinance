import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={10}
    height={10}
    fill="#4E5867"
    viewBox="0 0 96.154 96.154"
    {...props}>
    <Path d="m.561 20.971 45.951 57.605c.76.951 2.367.951 3.127 0l45.956-57.609c.547-.689.709-1.716.414-2.61a2.686 2.686 0 0 0-.186-.437 2.004 2.004 0 0 0-1.765-1.056H2.093c-.736 0-1.414.405-1.762 1.056a2.62 2.62 0 0 0-.184.426c-.297.905-.136 1.934.414 2.625z" />
  </Svg>
);
export default SvgComponent;

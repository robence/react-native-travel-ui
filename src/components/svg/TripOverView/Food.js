import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={68} height={68} viewBox="0 0 68 68" fill="none" {...props}>
      <Path
        d="M23.964 13v4.316h13.072V13H23.964zm6.536 6.474c-13.718 0-24.892 10.444-26.008 23.737H0V54h61V43.21h-4.494C55.395 29.919 44.218 19.475 30.5 19.475zm0 4.316a21.744 21.744 0 0114.636 5.543A21.35 21.35 0 0152.15 43.21H8.85C9.924 32.236 19.114 23.79 30.5 23.79zM4.357 47.526h52.286v2.158H4.357v-2.158z"
        fill="#27AE60"
        fillOpacity={0.1}
      />
    </Svg>
  );
}

export default SvgComponent;

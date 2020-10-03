import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={68} height={68} viewBox="0 0 68 68" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M8.5 14.375v55.25h23.375v-8.5h4.25v8.5H59.5v-55.25h-51zm4.25 4.25h42.5v46.75H40.375v-8.5h-12.75v8.5H12.75v-46.75zm4.25 4.25v4.25h8.5v-4.25H17zm12.75 0v4.25h8.5v-4.25h-8.5zm12.75 0v4.25H51v-4.25h-8.5zm-25.5 8.5v4.25h8.5v-4.25H17zm12.75 0v4.25h8.5v-4.25h-8.5zm12.75 0v4.25H51v-4.25h-8.5zm-25.5 8.5v4.25h8.5v-4.25H17zm12.75 0v4.25h8.5v-4.25h-8.5zm12.75 0v4.25H51v-4.25h-8.5zm-25.5 8.5v4.25h8.5v-4.25H17zm12.75 0v4.25h8.5v-4.25h-8.5zm12.75 0v4.25H51v-4.25h-8.5zm-25.5 8.5v4.25h8.5v-4.25H17zm25.5 0v4.25H51v-4.25h-8.5z"
          fill="#45AAF2"
          fillOpacity={0.1}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h68v68H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;

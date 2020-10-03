import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg width={68} height={68} viewBox="0 0 68 68" fill="none" {...props}>
      <Path
        d="M6.375 20.75V33.5h4.25V59h-4.25v4.25h21.25V48.375A6.383 6.383 0 0134 42a6.383 6.383 0 016.375 6.375V63.25h21.25V59h-4.25V33.5h4.25V20.75H6.375zm4.25 4.25h46.75v4.25h-46.75V25zm4.25 8.5h38.25V59h-8.5V48.375c0-5.859-4.766-10.625-10.625-10.625s-10.625 4.766-10.625 10.625V59h-8.5V33.5z"
        fill="#FF7979"
        fillOpacity={0.1}
      />
    </Svg>
  );
}

export default SvgComponent;

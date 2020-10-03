import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg width={68} height={68} viewBox="0 0 68 68" fill="none" {...props}>
      <Path
        d="M19.125 8.5c-4.675 0-8.5 3.825-8.5 8.5v10.625h-4.25V34h4.25v23.375c0 1.169.956 2.125 2.125 2.125h6.375l.731-2.125h28.288l.731 2.125h6.375a2.131 2.131 0 002.125-2.125V34h4.25v-6.375h-4.25V17c0-4.675-3.825-8.5-8.5-8.5h-29.75zm0 4.25h29.75a4.217 4.217 0 014.25 4.25h-38.25a4.217 4.217 0 014.25-4.25zm-4.25 8.5h17v14.875h-17V21.25zm21.25 0h17v14.875h-17V21.25zm-21.25 19.125h38.25v12.75h-38.25v-12.75zM17 44.625v4.25h8.5v-4.25H17zm25.5 0v4.25H51v-4.25h-8.5z"
        fill="#FFBE76"
        fillOpacity={0.15}
      />
    </Svg>
  );
}

export default SvgComponent;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
      <Path
        d="M18 3.375c-2.096 0-3.823 1.437-4.325 3.375h-10.3v22.5h29.25V6.75h-10.3C21.823 4.812 20.096 3.375 18 3.375zm0 2.25c.91 0 1.609.435 1.969 1.125H16.03c.36-.69 1.059-1.125 1.969-1.125zM5.625 9h24.75v10.125H5.625V9zM18 15.75c-.619 0-1.125.506-1.125 1.125S17.381 18 18 18s1.125-.506 1.125-1.125S18.619 15.75 18 15.75zM5.625 21.375h24.75V27H5.625v-5.625z"
        fill="#FFBE76"
      />
    </Svg>
  );
}

export default SvgComponent;

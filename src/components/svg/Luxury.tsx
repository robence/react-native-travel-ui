import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
      <Path
        d="M10.722 6.75l-5.975 7.172-.562.668.562.738 12.375 15.75.88 1.125.878-1.125 12.375-15.75.562-.738-.562-.668-5.976-7.172H10.722zM11.778 9h4.113l-3.024 4.5H8.016L11.778 9zm8.331 0h4.113l3.762 4.5h-4.852L20.11 9zM18 9.95l2.39 3.55h-4.78L18 9.95zm-10.09 5.8h4.746l2.672 9.457L7.91 15.75zm7.067 0h6.011L18 26.227 14.977 15.75zm8.367 0h4.746l-7.418 9.422 2.672-9.422z"
        fill="#45AAF2"
      />
    </Svg>
  );
}

export default SvgComponent;

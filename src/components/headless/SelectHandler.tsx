import React, { useState } from 'react';

export type SelectHandlerProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

type SelectHandlerType = {
  initialValue?: string;
  children: (childProps: SelectHandlerProps) => React.ReactNode;
};

export default function SelectHandler(props: SelectHandlerType) {
  const { children, initialValue } = props;

  const [selected, setSelected] = useState(initialValue ?? '');

  const childProps = { selected, setSelected };

  return <>{children(childProps)}</>;
}

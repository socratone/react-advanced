import { useImperativeHandle, useRef, Ref, forwardRef } from 'react';

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputRef = {
  activate: () => void;
};

const Input = forwardRef((props: InputProps, ref: Ref<InputRef>) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const activate = () => {
    inputRef?.current?.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      activate,
    };
  });

  return <input ref={inputRef} value={props.value} onChange={props.onChange} />;
});

export default Input;

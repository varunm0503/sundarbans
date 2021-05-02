import { useState } from "react";

export const useInput = (defaultValue) => {
  const [value, setValue] = useState<string>('');
  function onChange(e) {
    if(typeof e.target.value === 'string')
      setValue(e.target.value.toString());
  }
  return {
    value,
    onChange,
  };
}
import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setValue(e.target.value);
  }

  function validate(callback: (value: string) => string | null) {
    const result = callback(value);
    setError(result);
    return result;
  }

  function reset() {
    setValue("");
    setError(null);
  }

  return {
    value,
    error,
    onChange,
    validate,
    reset
  };
}
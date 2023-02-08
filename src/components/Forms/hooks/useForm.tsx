import { useState, ChangeEvent, FocusEvent, FormEvent } from "react";

const useForm = <T extends Record<string, any>>(
  callback: Function,
  validator: (args: T) => T,
  validationErrors: T,
  initialFormValues: T
) => {
  const [values, setValues] = useState<T>(initialFormValues);
  const [errors, setErrors] = useState<T>(validationErrors);

  const getInputEntry =(element: HTMLInputElement| HTMLSelectElement): [string,string| boolean] => ([
    element.name,
    element instanceof HTMLInputElement && element.type === "checkbox"
      ? element.checked
      : element.value,
  ]);

  const handleValueChange = (name: string, value: string | boolean) => {
    const errorHolder = { ...errors } as T;
    if (errorHolder[name]) {
      delete errorHolder[name];
      setErrors(errorHolder);
    }
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { target } = event;
    const [name, value] = getInputEntry(target);
    setValues({ ...values, [name]: value } as T);
    handleValueChange(name, value);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    const [name, value] = getInputEntry(target);

    if (values && value && value !== values[name]) {
      handleValueChange(name, value);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const err = validator(values as T);
    if (Object.keys(err).length === 0) {
      callback();
    } else {
      setErrors(err);
    }
  };

  return {
    values,
    errors,
    onChange,
    onBlur,
    onSubmit,
  };
};

export type Form = ReturnType<typeof useForm>;

export default useForm;

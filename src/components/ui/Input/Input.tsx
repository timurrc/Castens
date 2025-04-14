import styles from "./Input.module.scss";

interface IInput {
  label?: string | null;
  name: string;
  type: "password" | "email" | "text";
  placeholder: string;
  value: string;
  maxLength?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disable?: boolean;
}

const Input = (props: IInput) => {
  return (
    <div className={styles.inputView}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        required={props.required ?? false}
        autoCapitalize="false"
        autoComplete="false"
        autoCorrect="false"
        type={props.type}
        disabled={props.disable ?? false}
        name={props.name}
        placeholder={props.placeholder}
        className={`${styles.input} ${props.className}`}
        value={props.value}
        onChange={props.onChange}
        maxLength={props.maxLength}
      />
    </div>
  );
};

export default Input;

import { FC } from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
interface inputProps {
  type: any;
  name: string;
  placeholder: string;
  required?: boolean;
  inputFull?: boolean;
  inputHalf?: boolean;
  isCurve?: boolean;
  bold?: boolean;
  rounded?: boolean;
  registers?: any;
  errors?: any;
  inputRef?: any;
  value?: string;
  onChange?: any;
  multipleFile?: any;
  isWhiteBg?: boolean;
  borderBottom?: boolean;
  Width?: string;
  isBlackBg?: boolean;
}
const style = {
  input: `my-[10px]  py-[15px] px-[23px]  text-[.9375rem]   pr-[23px] outline-none`,
  mainInputStyle: ` bg-[#f1f1f1] outline-none text-[#9a9a9a]`,
  inputHalf: `w-[80%]`,
  inputFull: ` w-full`,
  curve: `rounded-[10px]`,
  rounded: `rounded-[25px]`,
  bold: `font-bold`,
  isWhiteBg: `border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-pink-500 `,
  isBlackBg: `border border-[#C4C4C4] border-solid bg-[#2b2b2b] text-white placeholder-white  `,
  borderBottom: ` border-bottom border-t-0 border-l-0 border-r-0 border-b-2  py-[1px] px-[2px]`,
  errors: ``,
};
// focus:ring-1 focus:ring-sky-500
const input: FC<inputProps> = (props) => {
  const { register } = useForm();
  const {
    type,
    placeholder,
    required,
    inputHalf,
    inputFull,
    isCurve,
    rounded,
    inputRef,
    registers,
    name,
    bold,
    errors,
    value,
    onChange,
    multipleFile,
    isWhiteBg,
    Width,
    borderBottom,
    isBlackBg,
    ...rest
  } = props;
  let Input = {
    [`${style.input}`]: true,
    [`${style.inputFull}`]: inputFull,
    [`${style.inputHalf}`]: inputHalf,
    [`${style.curve}`]: isCurve,
    [`${style.rounded}`]: rounded,
    [`${style.bold}`]: bold,
    [`${style.isWhiteBg}`]: isWhiteBg,
    [`${style.isBlackBg}`]: isBlackBg,
    [`${style.borderBottom}`]: borderBottom,
  };
  return (
    <>
      {/* {multipleFile} */}
      <input
        className={classnames(Input)}
        type={type}
        placeholder={placeholder}
        required={required}
        {...inputRef}
        value={value}
        onChange={onChange}
        // autoComplete="off"
        autoComplete="new-password"
        multiple
        style={{
          width: Width,
        }}
      />
      {/* <p className={style.errors}>
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </p> */}
    </>
  );
};

export default input;

// "react-hook-form": "^7.39.4",

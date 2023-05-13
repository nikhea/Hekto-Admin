import { FC, ReactNode } from "react";
import classnames from "classnames";

type IButton = {
  children: ReactNode;
  primary?: boolean;
  rounded?: boolean;
  full?: boolean;
  isCurve?: boolean;
  uppercase?: boolean;
  disabled?: boolean;
  padding?: boolean;
  shadow?: boolean;
  types?: any;
  onClick?: any;
  Color?: string;
};
const style = {
  btn: `border-0 border-solid bg-transparen min-w-[10px] w-fit not-italic font-[400] text-[14px] outline-none cursor-pointer mx-0 py-[1em] px-0`,
  disabled: `cursor-not-allowed`,
  primary: `text-white font-bold bg-primary `,
  rounded: `rounded-[40px] `,
  full: `w-full`,
  curve: `rounded-[8px] `,
  uppercase: `uppercase`,
  padding: `!px-[5em] !py-[1em]`,
  shadow: `shadow-xl shadow-pink-100`,
};
// bg-[#06c4e5]
const Button: FC<IButton> = ({
  children,
  primary,
  rounded,
  full,
  isCurve,
  disabled,
  uppercase,
  padding,
  types,
  Color,
  onClick,
  shadow,
}) => {
  let btn = {
    [`${style.btn}`]: true,
    [`${style.curve}`]: isCurve,
    [`${style.rounded}`]: rounded,
    [`${style.primary}`]: primary,
    [`${style.full}`]: full,
    [`${style.disabled}`]: disabled,
    [`${style.uppercase}`]: uppercase,
    [`${style.padding}`]: padding,
    [`${style.shadow}`]: shadow,
  };
  return (
    <button
      style={{
        backgroundColor: Color,
      }}
      onClick={onClick}
      type={types}
      className={classnames(btn)}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder25: "rounded-radius25",
  RoundedBorder5: "rounded-radius5",
  icbRoundedBorder24: "rounded-radius245",
  icbRoundedBorder10: "rounded-radius10",
};
const variants = {
  OutlineGreen60063: "bg-green_600 shadow-bs3 text-white_A700",
  FillBlack900: "bg-black_900 text-white_A700",
  OutlineBlack900: "border-black_900 border-bw3 border-solid text-black_900",
  icbFillWhiteA70023: "bg-white_A700_23",
  icbOutlineRed3007c: "bg-red_300 shadow-bs1",
  icbOutlineCyan40087: "bg-cyan_400 shadow-bs",
  icbOutlineLime80087: "bg-lime_801 shadow-bs2",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  md: "lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px]",
  smIcn: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder25",
    "RoundedBorder5",
    "icbRoundedBorder24",
    "icbRoundedBorder10",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGreen60063",
    "FillBlack900",
    "OutlineBlack900",
    "icbFillWhiteA70023",
    "icbOutlineRed3007c",
    "icbOutlineCyan40087",
    "icbOutlineLime80087",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbRoundedBorder10",
  variant: "OutlineGreen60063",
  size: "smIcn",
};

export { Button };

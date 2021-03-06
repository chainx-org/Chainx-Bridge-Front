import { FC } from "react";

interface BalanceSpanProps {
  balance: { toNumber: () => number } | number | undefined;
}

export const BalanceSpan: FC<BalanceSpanProps> = ({ balance }) => {
  let value;
  if (balance) {
    if (typeof balance === "number") {
      value =  parseFloat( (balance / 100000000).toFixed(4))
    } else {
      value = parseFloat(  (balance.toNumber() / 100000000).toFixed(4))
    }
  } else {
    value = "-";
  }
  return <span>{value}</span>;
};

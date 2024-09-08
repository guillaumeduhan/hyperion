import dayjs from "dayjs";
import numeral from "numeral";
import { useState } from "react";

export const useHelpers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(undefined);
  const [selected, setSelected] = useState<any>(undefined);
  const [open, setOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const getDollars = (amount = 0) => {
    const hasDecimal = amount % 1 !== 0;
    if (hasDecimal) {
      return numeral(amount).format("$0,0.00");
    }
    return numeral(amount).format("$0,0");
  };

  const openUrl = (link: string) => {
    if (!link) return;
    if (process.browser) window.open(link, "_blank");
  };

  const trimString = (str: string, limit = 22) => {
    if (!str) return;
    return str.length <= limit ? str : `${str.slice(0, limit)}...`;
  }

  const toDate = (date: Date) => {
    return dayjs(date.toString()).format("D MMMM YYYY");
  }

  return {
    data,
    loading,
    open,
    disabled,
    selected,
    show,
    error,
    setData,
    setLoading,
    setOpen,
    setDisabled,
    setSelected,
    setShow,
    trimString,
    getDollars,
    openUrl,
    toDate,
    setError
  };
};

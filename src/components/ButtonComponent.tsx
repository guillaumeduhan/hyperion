'use client';
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export default function ButtonComponent({
  loading, disabled, onClick, label, children, variant, className
}: any) {
  return <Button
    className={`${!variant ? 'bg-black dark:bg-neutral-900' : 'text-black-500'} dark:text-white ${className}`}
    variant={variant}
    disabled={loading || disabled}
    onClick={onClick}
  >
    {!loading && <>
      {children}
      {label}
    </>}
    {loading && <Loader2 className="animate-spin" />}
  </Button>;
}
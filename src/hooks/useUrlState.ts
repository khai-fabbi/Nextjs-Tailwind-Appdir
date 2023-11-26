import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function useURLState(query: string): [string, (value: string) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [state, setState] = useState(searchParams?.get(query) ?? "");

  const updateState = (value: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const current = new URLSearchParams([...(searchParams?.entries() || [])]);

    if (!value.trim()) {
      current.delete(query);
    } else {
      current.set(query, value);
    }

    setState(value);

    const search = current.toString();

    const newUrl = `${pathname}${search ? `?${search}` : ""}`;

    router.push(newUrl as never);
  };

  return [state, updateState];
}
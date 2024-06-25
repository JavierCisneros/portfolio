"use client";
import { useRouter } from "next/navigation";

export default function ReturnButton() {
  const router = useRouter();
  return (
    <button
      className="pb-1 mt-2 text-base font-medium text-markup uppercase border-b border-transparent hover:border-markup text-right"
      onClick={() => router.back()}
    >
      Go back
    </button>
  );
}

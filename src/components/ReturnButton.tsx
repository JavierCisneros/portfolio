"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function ReturnButton() {
  const router = useRouter();
  return (
    <Button
      variant={"ghost"}
      className="pb-1 mt-2 text-base mb-4 font-medium text-markup uppercase border-b border-transparent hover:border-markup text-right"
      onClick={() => router.back()}
    >
      Go back
    </Button>
  );
}

// "use client";

// import Link from "next/link";

// const SearchFormReset = () => {
//   const reset = () => {
//     const form = document.querySelector(".search-form") as HTMLFormElement;
//     if (form) form.reset();
//   };
//   return (
//     <div className="absolute top-[50%] right-2 translate-y-[-50%]  text-white">
//       <Link href="/">
//         <button type="reset" onClick={reset} className="search-btn">
//           X
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default SearchFormReset;

"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <Button
      type="reset"
      variant="outline"
      onClick={reset}
      className="flex justify-center items-center rounded-full w-8 h-8 bg-black"
    >
      <Link href="/">
        <X className="size-10" />
      </Link>
    </Button>
  );
};

export default SearchFormReset;

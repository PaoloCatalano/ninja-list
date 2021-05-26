import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  const [count, setCount] = React.useState(3);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevcount) => prevcount - 1);
    }, 1000);
    setTimeout(() => {
      // router.go(-1) per andare indietro,
      // router.go(1) per andare avanti,
      router.push("/");
      return clearInterval(interval);
    }, 3500);
  }, []);

  return (
    <center className="not-found">
      <h1> ERROR ERROR ERROR</h1>
      <h2>Tha page cunt bee faund!</h2>
      <p>
        Redirect to the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>{" "}
        in: {count} sec
      </p>
    </center>
  );
}

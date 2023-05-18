import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  return (
    <footer>
      <hr />
      <p className="text-center italic-font">
        © Copyright 2023 by <b>Jenni</b>
      </p>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></Script>
    </footer>
  );
}

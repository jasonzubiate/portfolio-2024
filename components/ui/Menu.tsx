import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({ isMenuActive }: { isMenuActive: boolean }) {
  const pathname = usePathname();

  const variants = {
    open: {
      width: 300,
      height: 400,
    },
    closed: {
      width: 48,
      height: 48,
    },
  };

  return (
    <motion.div
      className={`flex flex-col gap-6 lg:gap-8 rounded-md lg:rounded-lg p-4 lg:p-8 ${
        pathname === "/work" ? "bg-cod-gray " : "bg-demo-smoke"
      }`}
      variants={variants}
      animate={isMenuActive ? "open" : "closed"}
      initial="closed"
    >
      <p className="uppercase text-sm lg:text-base text-clay-toff">Menu</p>
      <div className="flex flex-col gap-5">
        <Link
          href="/"
          className={`${
            pathname === "/work" ? "text-demo-smoke" : "text-cod-gray"
          } ${pathname === "/" ? "text-clay-toff" : "text-cod-gray"}  text-2xl`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/work" ? "text-demo-smoke" : "text-cod-gray"
          } ${
            pathname === "/about" ? "text-clay-toff" : "text-cod-gray"
          }  text-2xl`}
        >
          About
        </Link>
        <Link
          href="/work"
          className={`${
            pathname === "/work" ? "text-demo-smoke" : "text-cod-gray"
          } ${
            pathname === "/work" ? "text-clay-toff" : "text-cod-gray"
          }  text-2xl`}
        >
          Work
        </Link>
        <a
          href="https://open.spotify.com/playlist/0NWr5vXsKMh7LEZeGNl7gB?si=c3f8eb40a2974177"
          target="_blank"
          className={`${
            pathname === "/work" ? "text-demo-smoke" : "text-cod-gray"
          } text-2xl`}
        >
          Tunes
        </a>
      </div>
    </motion.div>
  );
}

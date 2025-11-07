import {motion} from "framer-motion";

export default function AboutUs() {
  return (
    <motion.h1
      initial={{ y:200, opacity: 0 }}
      animate= {{ y:0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="text-4xl font-bold"
    >
      Hi, Welcome To About Us Page.
    </motion.h1>
  );
}

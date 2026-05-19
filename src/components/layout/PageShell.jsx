import { motion } from "framer-motion";
import { pageTransition } from "../../animation/motionVariants";
import { useLenis } from "../../hooks/useLenis";
import { cx } from "../../utils/classNames";
import Atmosphere from "../ui/Atmosphere";

export default function PageShell({ children, className }) {
  useLenis();

  return (
    <motion.div
      className={cx("page-shell", className)}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Atmosphere />
      {children}
    </motion.div>
  );
}

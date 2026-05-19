import { cx } from "../../utils/classNames";

export default function LuxuryContainer({ as: Tag = "div", className, children }) {
  return <Tag className={cx("luxury-container", className)}>{children}</Tag>;
}

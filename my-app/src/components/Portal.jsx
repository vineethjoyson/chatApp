import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function ClientPortal({ children, targetId = "portal-root" }) {
  const [el, setEl] = useState(null);
  useEffect(() => setEl(document.getElementById(targetId)), [targetId]);
  return el ? createPortal(children, el) : null;
}

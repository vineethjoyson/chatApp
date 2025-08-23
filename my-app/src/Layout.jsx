import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import { ClientPortal } from "./components/Portal";
import Login from "./components/Login";
import { useModalStore } from "./store/useModalStore";
function Layout() {
  const showLogin = useModalStore((state) => state.showLogin);
  const closeLogin = useModalStore((state) => state.closeLogin);
  return (
    <div className="relative">
      <Outlet />
      {showLogin && (
        <ClientPortal>
          {/* Overlay with blur */}
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" />
          {/* Modal */}
          <div className="fixed inset-0 z-50">
            <Login onClose={closeLogin} />
          </div>
        </ClientPortal>
      )}
    </div>
  );
}
export default Layout;

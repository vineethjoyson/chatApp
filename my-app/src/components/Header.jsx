import { useModalStore } from "../store/useModalStore";

const Header = () => {
  const openLogin = useModalStore((state) => state.openLogin);
  return (
    <header className="w-full flex items-center px-4 py-3 bg-white/90 shadow-md">
      <div className="flex-1" />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition ml-auto"
        onClick={openLogin}
      >
        Login
      </button>
    </header>
  );
};

export default Header;

import Header from "./Header";
import { useModalStore } from "../store/useModalStore";
import Shimmer from "./Shimmer";
const Body = () => {
  const showLoading = useModalStore((state) => state.profileDataLoading);
  console.log("showLoading>>>>", showLoading);
  return showLoading ? <Shimmer /> : <Header />;
};
export default Body;

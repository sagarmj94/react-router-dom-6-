import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div>
      <p>React router tutorial</p>
      {/* Header  */}
      <Header />
      {/* Loading  */}
      {isLoading && <div>Loading...</div>}
      {/* Body */}
      <Outlet />
    </div>
  );
};

export default AppLayout;

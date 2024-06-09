// components/Layout.js
import { Provider } from "react-redux";
import Header from "@/app/components/common/Header/index";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // <Provider store={store}>
    <div>
      <Header />
      <div className="mt-[70px]">{children}</div>
    </div>
    // </Provider>
  );
};

export default Layout;

import AppRoutes from "./Routes";
import { Layout } from "antd";
const { Header, Content } = Layout;
import AppHeader from "./components/Header";

function App() {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <AppHeader />
        </Header>
        <Content style={{ padding: "50px" }}>
          <AppRoutes />
        </Content>
      </Layout>
    </>
  );
}

export default App;

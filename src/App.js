import './App.css';
import Blog from './Blog';
import { Layout } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{ background: '#3289a8', padding: '10px', marginBottom: '10px' }}>
          <div className="logo" style={{ float: "left", marginLeft: '15px', fontSize: "1.3rem", color: "white" }}>
            Kelompok 19
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="Components">
            <Blog bgcolor="#ededed" />
          </div>
        </Content>
      </Layout>

      {/* <p>Kelompok 19</p>
      <br />
      <Blog /> */}
    </div>
  );
}

export default App;

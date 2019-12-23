import Head from "next/head";

const Layout: React.FC<{}> = props => (
  <div>
    <Head>
      <title>My styled page</title>
      <link href="/styles.css" rel="stylesheet" />
    </Head>
    {props.children}
  </div>
);

const Home: React.FC<{}> = props => (
  <Layout>
    <h1>Bismillah</h1>
  </Layout>
);

export default Home;

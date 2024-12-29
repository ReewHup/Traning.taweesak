import Layout from "../Template/Layout"

const Home = () => {
  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-6">Home</h1>
      <hr />
      <img src="images/class.jpg" alt="" />
      <p className="mt-4">This is a home page.</p>
    </Layout>
  )
}

export default Home
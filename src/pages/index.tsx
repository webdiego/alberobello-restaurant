import Hero from '../components/Hero'
import Description from '../components/Description'
import Map from '../components/Map'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Description />
      <Map />
      <Contact />
    </Layout>
  )
}

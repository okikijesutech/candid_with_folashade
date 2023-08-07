import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Footer from '../../components/footer/Footer'
import Cta from '../../components/cta/Cta'

export default function Home() {
  return (
    <>    
      <Header/>
      <h3 className='postsTitle'>Blog</h3>
      <Posts/>
      <Cta/>
      <Footer/>
    </>
  )
}

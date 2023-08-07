import './blogs.css'
import Posts from '../../components/posts/Posts'
import Footer from '../../components/footer/Footer'

export default function Blogs() {
    return(
        <div className="blogs">
            <h3>WELLNES</h3>
            <Posts/>
            <h3>LIVING</h3>
            <Posts/>
            <Footer/>
        </div>
    )
}
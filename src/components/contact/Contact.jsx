import './contact.css'

export default function contact() {
    return (
        <div className="contact">
            <div className="socials">
                <a href="https://instagram.com/rheelshadie"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://tiktok.com/@rheelshadie"><i class="fa-brands fa-tiktok"></i></a>
                <a href="https://pin.it/6CRgBTB"><i class="fa-brands fa-pinterest"></i></a>
                <a href="https://twitter.com/rheelshadie"><i class="fa-brands fa-twitter"></i></a>   
            </div>
            <div className="sub">
                <h3>LET'S <b>CONNECT.</b></h3>
                <form action="" className='contactForm'>
                    <input type="email" placeholder='Email'/>
                </form>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    )
}
import "./cta.css"

export default function Cta() {
  return (
    <div className="cta">
        <div className="ctaTitle">
            <h3>LET'S STAY CONNECTED</h3>
            <p>We will learn together over mail</p>
        </div>
        <div className="ctaFormAndSUB">
            <form className="ctaForm">
              <label htmlFor=""><i class="fa-solid fa-envelope"></i></label>
             <input type="email" placeholder="Your Email" />
            </form>
            <button className="ctaBtn">Subscribe</button>
        </div>
    </div>
  )
}

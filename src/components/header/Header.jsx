import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSn"> CANDID</span>
            <span className='headerTitleCn'> with </span>
            <span className="headerTitleLg"> FOLASHADE</span>
        </div>
        <img className="headerImg" src="images/header.png" alt="" />
    </div>
  )
}

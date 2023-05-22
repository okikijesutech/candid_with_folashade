import './sidebar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src="images/stock.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum unde repellat natus quae, 
                et error sapiente quos adipisci architecto.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Me</span>
            <div className="sidebarSocials">
                <i class="sidebarIcon  fa-brands fa-facebook"></i>
                <i class="sidebarIcon fa-brands fa-twitter"></i>
                <i class="sidebarIcon fa-brands fa-pinterest"></i>
                <i class="sidebarIcon fa-brands fa-instagram"></i>   
            </div>
        </div>
    </div>
  )
}

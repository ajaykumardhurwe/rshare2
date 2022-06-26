import './Profile.css';
function Profile(){
    return(
        <>
        <main>
<nav>
 <a href="#"><i class="fa fa-angle-left" ></i></a>
 <a href="#" >My Profile</a>
 <a href="#" class="menu-btn"><i class="fa fa-ellipsis-v" ></i>
   <ul class="menu" >
     <li>About</li>
     <li>Contact</li>
     <li>Work</li>
   </ul>
 </a>
</nav>
<div class="profile" >
  <div class="profile-img">
  <img src={require('../Images/myphoto.jpg').default} height={200} width={200}/>
    {/* <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" /> */}
  </div>
  <div class="overlay" ></div>
  <h1>AjaY Kumar Dhurwe😉</h1>
  <h3>Coder</h3>
  {/* <p><i class="fa fa-map-marker" > </i> Earth</p> */}
</div>
<div class="follower">
  <div>
  <h1>180</h1>
  <p>followers</p>
  </div>
  <div>
  <h1>20</h1>
  <p>following</p>
  </div>
  {/* <div>
   <h1>4718 XP</h1>
   <p>Level 8</p>
  </div> */}
</div>
<div class="btn-group" >
 <a href="https://www.instagram.com/ajay_dhurwe_750/" class="btn1" >Follow</a>
 <a href="https://www.instagram.com/direct/new/" class="btn2" >Message</a>
</div>
<div class="about" >
 {/* <h2>About</h2>
 <p>
  Hello guys Lamya here, I am full stack web developer.
 </p> */}
</div>
{/* <footer>
<a href="#" ><i class="fa fa-facebook" ></i></a>
<a href="#" ><i class="fa fa-twitter" ></i></a>
<a href="#" ><i class="fa fa-instagram" ></i></a>
<a href="#" ><i class="fa fa-github" ></i></a>
</footer> */}
</main>
        </>
    )
}

export default Profile;
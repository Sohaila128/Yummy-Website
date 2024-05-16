// # This function is responsible for building and displaying the main navigation bar for an e-commerce website.
function ECommerceNavigation() {
  document.write(`
  <nav class="navbar navbar-expand-lg">
  <div class="container-lg d-flex align-items-center justify-content-between">
      <!-- logo -->
      <a href="home-page.html" class="navbar-brand d-flex align-items-center">
        <div>
          <img src="images/logo.svg" alt="">
        </div>
      </a>
        <div class="collapse navbar-collapse key" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3 text-warning">
            <li class="nav-item me-3 fw-semibold ">
                <a class="nav-link link-hover text-black link-primary active" href="clothes.html">Clothes</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                  <a class="nav-link link-hover text-black link-primary" href="clothes.html">Supplements</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                <a class="nav-link link-hover text-black link-primary" href="clothes.html">Cafe</a>
            </li>
            </ul>
      </div>

      <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class="collapse navbar-collapse key mx-n3" id="navbarSupportedContent">
        <form action=""class="form-group has-search">
          <div>
            <img src="images/Search.svg" class="form-control-feedback mx-2 my-2" id="icon" width="24" alt="">
          </div>
            <input type="email" class="form-control rounded-2 border-0 bg-info px-md-5 px-sm-6" placeholder="search....." name="" id="">
        </form>
        <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3 text-warning align-items-center">
          <li class="nav-item me-3 fw-semibold ">
              <a class="nav-link link-hover text-black link-primary" href="index.html">Club</a>
            </li>
          <li class="nav-item me-3 fw-semibold ">
              <a class="nav-link text-black link-primary" href="empty-fav.html">
                <img src="images/Heart.png" alt="">
              </a>
            </li>
          <li class="nav-item me-3 fw-semibold ">
              <a class="nav-link text-black link-primary" href="empty-cart.html">
                <img src="images/Bag.svg" alt="">
              </a>
            </li>
            <li class="nav-item me-3 fw-semibold">
              <a class="nav-link text-black link-primary" href="login.html">Login</a>
            </li>
          </ul>
          <a href="sign-up.html" class="text-decoration-none">
            <button class="btn btn-primary d-none d-xl-block" style="white-space: nowrap;">Get started</button>
          </a>
      </div>

      
  </div>
  
</nav>
  `);
}
// This function is called after login to update the main navigation menu
function AfterLoginNavigation() {
  document.write(`
  <nav class="navbar navbar-expand-lg">
  <div class="container-lg d-flex align-items-center justify-content-between">
      <!-- logo -->
      <a href="home-page.html" class="navbar-brand d-flex align-items-center">
        <div>
          <img src="images/logo.svg" alt="">
        </div>
      </a>
        <div class="collapse navbar-collapse key" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3 text-warning">
            <li class="nav-item me-3 fw-semibold ">
                <a class="nav-link link-hover text-black link-primary active" href="clothes.html">Clothes</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                  <a class="nav-link link-hover text-black link-primary" href="clothes.html">Supplements</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                <a class="nav-link link-hover text-black link-primary" href="clothes.html">Cafe</a>
            </li>
            </ul>
      </div>

      <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class="collapse navbar-collapse key mx-n3" id="navbarSupportedContent">
        <form action=""class="form-group has-search">
          <div>
            <img src="images/Search.svg" class="form-control-feedback mx-2 my-2" id="icon" width="24" alt="">
          </div>
            <input type="email" class="form-control rounded-2 border-0 bg-info px-md-5 px-sm-6" placeholder="search....." name="" id="">
        </form>
        <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3 text-warning align-items-center">
          <li class="nav-item me-3 fw-semibold ">
              <a class="nav-link link-hover text-black link-primary" href="index.html">Club</a>
            </li>
          <li class="nav-item me-3 fw-semibold ">
              <a class="nav-link text-black link-primary" href="empty-fav.html">
                <img src="images/Heart.png" alt="">
              </a>
            </li>
          <li class="nav-item me-3 fw-semibold ">
              <a class="nav-link text-black link-primary" href="cart-page.html">
                <img src="images/Bag.svg" alt="">
              </a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div>
                  <img src="images/Ellipse 2.svg" alt="" class="" width="45" height="45">
                </div>
              </a>
              <ul class="dropdown-menu rounded-4 border-0 shadow" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="my-profile-ec.html"> My Profile </a></li>
                <li><a class="dropdown-item" href="my-profile-ec.html"> My Orders </a></li>
                <li><a class="dropdown-item" href="my-profile-ec.html"> My Addresses </a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt fa-fw"></i> Log Out</a></li>
              </ul>
            </li>
        
          </ul>
      </div>
  </div>
</nav>
  `);
}
// # This function is designed to create and display the navigation bar specific to user authentication (auth) in a web application.
// # In the context of authentication, this navigation bar typically includes links or buttons related to user account management and authentication processes.
function UserAuthNavigation() {
  document.write(`
  <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
  <div class="container-md">
    <a class="navbar-brand" href="index.html">
      <img src="images/logo.svg" alt="">
    </a>
    <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <span class="navbar-toggler-icon"> </span>
  </button>
  </div>
</nav>
  `);
}
// # This function constructs and displays the main navigation bar for the website.
function GlobalNavigation() {
  document.write(`
  <!-- Start NavBar  -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-lg d-flex align-items-center justify-content-between">
        <!-- logo -->
        <a href="index.html" class="navbar-brand">
          <div>
            <img src="images/logo.svg" width="80" alt="">
          </div>
        </a>

        <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse key mx-n3" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3 text-warning">
                <li class="nav-item me-3 fw-semibold ">
                    <a class="nav-link link-hover text-black link-primary active" href="membership.html">Memberships</a>
                </li>
                <li class="nav-item me-3 fw-semibold">
                    <a class="nav-link link-hover text-black link-primary" href="find-trainers.html">Find trainers</a>
                </li>
                <li class="nav-item me-3 fw-semibold">
                    <a class="nav-link link-hover text-black link-primary" href="about-us.html">About us</a>
                </li>
                <li class="nav-item me-3 fw-semibold">
                    <a class="nav-link link-hover text-black link-primary" href="home-page.html">Store</a>
                </li>
              </ul>
        </div>
        <ul class="navbar-nav d-lg-flex d-none">
        <li class="nav-item fw-semibold">
        <a class="nav-link text-black link-primary" href="" data-bs-toggle="modal" data-bs-target="#exampleModal"> <img src="images/search-two.svg" alt=""> </a>
        </li>
        </ul>
        <a href="login.html" class="btn btn-white rounded-5 fw-semibold mx-1 text-black d-flex align-items-center text-decoration-none  d-none d-lg-flex" href="">
          Login
        </a>
        <a href="sign-up.html" class="btn btn-color-primary-two d-flex align-items-center text-decoration-none d-none d-lg-flex text-decoration-none">
          Get started
        </a>
        
    </div>
  </nav>

  <!-- start search popup -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0 rounded-4">
        
        <div class="modal-body mt-3">
          <form action=""class="form-group has-search">
            <div>
              <img src="images/Search.svg" class="form-control-feedback mx-2 my-2" id="icon" width="24" alt="">
            </div>
              <input type="email" class="form-control rounded-2 border-0 bg-info px-md-5 px-sm-6" placeholder="search....." name="" id="">
          </form>
          <div class="pb-8 py-4">
            <h6>Search result for “Men”</h6>
            <div class="row">
              <div class="col-md-4 col-4 position-relative mb-3">
                <div style="text-align: center;">
                    <img src="images/Group 1000002855.png" class="rounded-4 img-fluid" alt="">
                    <h5 class="text-white" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Men</h5>
                </div>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <!-- end search popup  -->
<!-- End NavBar  -->
  `);
}
// <!-- This navbar is specific to Cub and appears after logging in. -->
function showCubNavbarAfterLogin() {
  document.write(`
  <nav class="navbar navbar-expand-lg">
  <div class="container-lg d-flex align-items-center justify-content-between">
      <!-- logo -->
      <a href="index.html" class="navbar-brand">
        <div>
          <img src="images/logo.svg" width="80" alt="">
        </div>
      </a>

      <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class="collapse navbar-collapse key mx-n3" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex text-warning">
              <li class="nav-item me-3 fw-semibold ">
                  <a class="nav-link link-hover text-black link-primary active" href="membership.html">Memberships</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                  <a class="nav-link link-hover text-black link-primary" href="find-trainers.html">Find trainers</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                  <a class="nav-link link-hover text-black link-primary" href="about-us.html">About us</a>
              </li>
              <li class="nav-item me-3 fw-semibold">
                  <a class="nav-link link-hover text-black link-primary" href="home-page.html">Store</a>
              </li>
            </ul>
      </div>

      <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex text-warning align-items-center d-none d-lg-flex">
        <li class="nav-item fw-semibold ">
            <a class="nav-link link-hover text-black link-primary active" href="loyalty-points.html">Loyalty points</a>
        </li>
        <li class="nav-item fw-semibold" >
          <a class="nav-link text-black link-primary px-3" href="" data-bs-toggle="modal" data-bs-target="#exampleModal"> <img src="images/search-two.svg" alt=""> </a>
      </li>        
        <li class="nav-item fw-semibold  dropdown notification-dropdown">
            <a class="nav-link text-black link-primary active" href="" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">  <img src="images/Notification.svg" alt="">
              </a>
              <ul class="dropdown-menu rounded-4 border-0 shadow" aria-labelledby="navbarDropdown2">
                <li>
                  <a class="dropdown-item py-3" href="#"> 
                  <div class="d-flex align-items-center">
                    <div>
                      <img src="images/Group 39777.svg" width="45" alt="">
                    </div>
                    <div class="mx-3">
                      <span class="fw-semibold fs-7">Your reservation for class is confirmed </span>
                    </div>
                  </div>
                </a>
              </li>
                <li>
                  <a class="dropdown-item py-3" href="#"> 
                  <div class="d-flex align-items-center">
                    <div>
                      <img src="images/Group 39777.svg" width="45" alt="">
                    </div>
                    <div class="mx-3">
                      <span class="fw-semibold fs-7">Your reservation for class is confirmed </span>
                    </div>
                  </div>
                </a>
              </li>
                
                <li><a class="dropdown-item py-3 fw-semibold mt-4" href="notification.html"></i> View all notifications</a></li>
              </ul>
        </li>

      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <div>
            <img src="images/Ellipse 2.svg" alt="" class="" width="45" height="45">
          </div>
        </a>
        <ul class="dropdown-menu rounded-4 border-0 shadow" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item fw-semibold" href="my-profile-club.html"> My Profile </a></li>
          <li><a class="dropdown-item fw-semibold" href="membership.html"> Membership </a></li>
          <li><a class="dropdown-item fw-semibold" href="my-profile-classes-history.html"> Classes history </a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item fw-semibold" href="#"><i class="fas fa-sign-out-alt fa-fw"></i> Log Out</a></li>
        </ul>
      </li>

      <li class="nav-item fw-semibold ">
        <a class="nav-link link-hover text-black link-primary px-3" href=""> </a>
    </li>
    </ul>
  </div>
  
</nav>
  <!-- start search popup -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0 rounded-4">
        
        <div class="modal-body mt-3">
          <form action=""class="form-group has-search">
            <div>
              <img src="images/Search.svg" class="form-control-feedback mx-2 my-2" id="icon" width="24" alt="">
            </div>
              <input type="email" class="form-control rounded-2 border-0 bg-info px-md-5 px-sm-6" placeholder="search....." name="" id="">
          </form>
          <div class="pb-8 py-4">
            <h6>Search result for “Men”</h6>
            <div class="row">
              <div class="col-md-4 col-4 position-relative mb-3">
                <div style="text-align: center;">
                    <img src="images/Group 1000002855.png" class="rounded-4 img-fluid" alt="">
                    <h5 class="text-white" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Men</h5>
                </div>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <!-- end search popup  -->
<!-- End NavBar  -->
  <!-- End NavBar  -->

  `);
}
// Start Footers 
function MainFooter() {
  document.write(`
  <footer  class="footer bg-primary py-5" >
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
        <h6 class="text-secondary fw-bold">Store</h6>
        <ul class="list-unstyled">
          <li class="hover-link-footer"><a href="clothes.html" class="text-decoration-none text-secondary link-secondary fs-6">Supplements</a></li>
          <li class="hover-link-footer"><a href="clothes.html" class="text-decoration-none text-secondary link-secondary fs-6">Restaurant</a></li>
          <li class="hover-link-footer"><a href="clothes.html" class="text-decoration-none text-secondary link-secondary fs-6">Cafe</a></li>
        </ul> 
      </div>

      <div class="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
        <h6 class="text-secondary fw-bold">For Users</h6>
        <ul class="list-unstyled">
          <li class="hover-link-footer"><a href="Terms-Conditions.html" class="text-decoration-none text-secondary link-secondary fs-6" style="white-space: nowrap;">Terms & Conditions</a></li>
          <li class="hover-link-footer"><a href="privacy-policy.html" class="text-decoration-none text-secondary link-secondary fs-6" style="white-space: nowrap;">Privacy Policy</a></li>
        </ul> 
      </div>


      <div class="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
        <h6 class="text-secondary fw-bold"> Support</h6>
        <ul class="list-unstyled">
          <li class="hover-link-footer"><a href="about-us.html" class="text-decoration-none text-secondary link-secondary fs-6">About Us</a></li>
          <li class="hover-link-footer"><a href="contact-us.html" class="text-decoration-none text-secondary link-secondary fs-6">Contact Us</a></li>
        
        </ul>  
      </div>

      <div class="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
        <h6 class="text-secondary fw-bold">Download the App</h6>
        <ul class="list-unstyled d-flex">
          <li class="tiny_font row align-items-center">
              <a href="" class="text-decoration-none fw-light col-6">
                  <img src="images/app-store-and-google-play 2.png" alt="image" class="img-fluid">
              </a>
              <a href="" class="text-decoration-none fw-light col-6">
                  <img src="images/app-store-and-google-play 3.png" alt="image" class="img-fluid">
              </a>
          </li>
      </ul>

      <ul class="list-unstyled m-0 p-0">
        <div class="row g-4">
          <div class="col-lg-10 d-flex justify-content-lg-between col-12 justify-content-between social-links">
            <a href="" class="text-decoration-none d-flex align-items-center justify-content-center rounded-5"><i class="fa-brands fa-facebook-f text-secondary fs-5"></i></a>
            <a href="" class="text-decoration-none d-flex align-items-center justify-content-center rounded-5" target="_blank"><i class="fa-brands fa-instagram  text-secondary fs-5"></i></a>
            <a href="" class="text-decoration-none d-flex align-items-center justify-content-center rounded-5" target="_blank">
              <i class="fa-brands fa-x-twitter text-secondary fs-5"></i>
            </a>
            <a href="" class="text-decoration-none d-flex align-items-center justify-content-center rounded-5" target="_blank">
              <i class="fa-brands fa-linkedin-in text-secondary fs-5"></i>
            </a>
          
          </div>
        
        </div>
      </ul>  
      </div>

  </div>
  <hr class="text-white border-white"/>
</div>
  <!-- second -->
  <div class="py-1">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
          <div class="">
            <span class="text-secondary fw-normal fs-7">© 2024 <span class="fw-semibold fw-normal text-white">Body Force</span> All right reserved. </span>
          </div>
          <div class="">
            <span class="text-secondary fw-normal fs-7"> Powered By <a target="_blank" href="https://emcan-group.com/en" class="fw-semibold text-decoration-none fw-normal text-white">   Emcan Solutions</a></span>
          </div>
      </div>
    </div>
  </div>
</footer>
  `);
}
function FooterUserAuthLinks(){
  document.write(`
  <footer class="footer bg-primary py-4 rounded-top rounded-top-5">
  <div class="container">
      <!-------footer text -------->
      <div class="text-center">
        <p class="text-white">© 2024 <span class="fw-semibold">Body Force</span>  All right reserved. </p>
      <p class="text-white">Powered by : <a href="https://emcan-group.com/en" target="_blank" class=" fs-6 text-info text-decoration-none">  Emcan Solutions </a></p> 
      </div>
  </div>
</footer>
  `);
}
function GlobalFooter() {
  document.write(`
  <footer  class="footer Footer-global py-5" >
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
        <h6 class="text-secondary fw-bold">Store</h6>
        <ul class="list-unstyled">
          <li class="hover-link-footer"><a href="clothes.html" class="text-decoration-none text-secondary link-secondary fs-6">Supplements</a></li>
          <li class="hover-link-footer"><a href="clothes.html" class="text-decoration-none text-secondary link-secondary fs-6">Restaurant</a></li>
          <li class="hover-link-footer"><a href="clothes.html" class="text-decoration-none text-secondary link-secondary fs-6">Cafe</a></li>
        </ul> 
      </div>

      <div class="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
        <h6 class="text-secondary fw-bold">Explore</h6>
        <ul class="list-unstyled">
          <li class="hover-link-footer"><a href="find-trainers.html" class="text-decoration-none text-secondary link-secondary fs-6" style="white-space: nowrap;">Find Trainers</a></li>
          <li class="hover-link-footer"><a href="loyalty-points.html" class="text-decoration-none text-secondary link-secondary fs-6" style="white-space: nowrap;">Loyalty Points</a></li>
        </ul> 
      </div>


      <div class="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
        <h6 class="text-secondary fw-bold"> Support</h6>
        <ul class="list-unstyled">
          <li class="hover-link-footer"><a href="about-us.html" class="text-decoration-none text-secondary link-secondary fs-6">About Us</a></li>
          <li class="hover-link-footer"><a href="contact-us.html" class="text-decoration-none text-secondary link-secondary fs-6">Contact Us</a></li>
        
        </ul>  
      </div>

      <div class="col-lg-3 col-md-6 col-12 mt-4 mt-md-0">
        <h6 class="text-secondary fw-bold">Download the App</h6>
        <ul class="list-unstyled d-flex">
          <li class="tiny_font row align-items-center">
              <a href="" class="text-decoration-none fw-light col-6">
                  <img src="images/app-store-and-google-play 2.png" alt="image" class="img-fluid">
              </a>
              <a href="" class="text-decoration-none fw-light col-6">
                  <img src="images/app-store-and-google-play 3.png" alt="image" class="img-fluid">
              </a>
          </li>
      </ul>

      <ul class="list-unstyled m-0 p-0">
        <div class="row g-4">
          <div class="col-lg-10 d-flex justify-content-lg-between col-12 justify-content-between social-links">
            <a href="" class="text-decoration-none d-flex align-items-center justify-content-center rounded-5"><i class="fa-brands fa-facebook-f text-secondary fs-5"></i></a>
            <a href="" class="text-decoration-none d-flex align-items-center justify-content-center rounded-5" target="_blank"><i class="fa-brands fa-instagram  text-secondary fs-5"></i></a>
            <a href="" class="text-decoration-none d-flex align-items-center justify-content-center rounded-5" target="_blank">
              <i class="fa-brands fa-x-twitter text-secondary fs-5"></i>
            </a>
            <a href="" class="text-decoration-none d-flex align-items-center justify-content-center rounded-5" target="_blank">
              <i class="fa-brands fa-linkedin-in text-secondary fs-5"></i>
            </a>
          
          </div>
        
        </div>
      </ul>  
      </div>

  </div>
  <hr class="text-white border-white"/>
</div>
  <!-- second -->
  <div class="py-1">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between flex-wrap">
          <div class="">
            <span class="text-secondary fw-normal fs-7">© 2024 <span class="fw-semibold fw-normal text-white">Body Force</span> All right reserved. </span>
          </div>
          <div class="">
            <span class="text-secondary fw-normal fs-7"> Powered By <a target="_blank" href="https://emcan-group.com/en" class="fw-semibold text-decoration-none fw-normal text-white">   Emcan Solutions</a></span>
          </div>
          <div class="">
          <ul class="list-unstyled d-flex justify-content-between">
          <li class="hover-link-footer"><a href="terms-conditions.html" class="text-decoration-none text-white mx-2 fs-7">Terms and conditions</a></li>
          <li class="hover-link-footer"><a href="privacy-policy.html" class="text-decoration-none text-white mx-2 fs-7">Privacy police </a></li>
        </ul>
          </div>
      </div>
    </div>
  </div>
</footer>
  `);
}
// Sidebar 
function includeSidebar() {
  document.write(`
  <!--========= start sidebar  =========-->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header bg-white">
    <img src="images/logo.svg" width="80" alt="" />
    <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-white hover-links">
  <form action="" class="d-flex border rounded-2">
  <input type="search" name="" class="form-control border-0" placeholder="search......" id="" />
  <a href="search-pg.html" class="btn btn-white rounded-2"> <img src="images/search.svg" alt=""></a>
  </form>
    <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3">
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="index.html">Home</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="login.html">Login</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="sign-up.html">Sign Up</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="home-page.html">Store</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="about-us.html">About Us</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-success" href="contact-us.html">Contact Us </a>
      </li>
    </ul>
  </div>
</div>
<!--========= end sidebar  =========-->
  `);
}
// Sidebar 
function filterSidebar() {
  document.write(`
  <!--=========== start sidebar tabs =========-->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasfilter" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <button  class="btn btn-link d-flex text-decoration-none">
        <i class="fa-solid fa-filter text-primary fs-3 d-flex justify-content-start p-0"></i>
        <span class="fw-semibold mx-2">Filter</span>
      </button>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="col-12 col-lg-4 col-xl-3 col-md-3  rounded-1 p-4 d-block h-100">
          <ul class="nav mb-3 d-flex flex-column mt-3" >
            <a href="my-profile-club.html" class="text-decoration-none">
              <li class="nav-item nav-link fw-bold fs-6 rounded-3 mb-2 text-primary link-danger" style="white-space: nowrap;">
                My Profile
            </li>
            </a>
            <a href="my-profile-pass.html" class="text-decoration-none">
              <li class="nav-item nav-link fw-bold fs-6 rounded-3 mb-2 text-primary link-danger" style="white-space: nowrap;">
                Password
              </li>
            </a>
           
            <a href="my-profile-membership.html" class="text-decoration-none">
              <li class="nav-item nav-link fw-bold fs-6 rounded-3 mb-2 text-primary link-danger" style="white-space: nowrap;">
                Membership
              </li>
            </a>
            <a href="my-profile-classes-history.html" class="text-decoration-none">
              <li class="nav-item nav-link fw-bold fs-6 rounded-3 mb-2 text-primary link-danger" style="white-space: nowrap;">
                Classes history
              </li>
            </a>
            </ul>
          
        </div>
  
    </div>
  </div>
  <!--=========== End sidebar tabs =========-->
  `);
}
// Sidebar My profile e-comerce
function filterSidebarEcomerce() {
  document.write(`
  <!--=========== start sidebar tabs =========-->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasfilter-my-profile-e-comerce" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <button  class="btn btn-link d-flex text-decoration-none">
        <i class="fa-solid fa-filter text-primary fs-3 d-flex justify-content-start p-0"></i>
        <span class="fw-semibold mx-2">Filter</span>
      </button>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="col-12 col-lg-4 col-xl-3 col-md-3  rounded-1 p-4 d-block h-100">
          <ul class="nav mb-3 d-flex flex-column mt-3" >
            <a href="my-profile-club.html" class="text-decoration-none">
              <li class="nav-item nav-link fw-bold fs-6 rounded-3 mb-2 text-primary link-danger" style="white-space: nowrap;">
                My Profile
            </li>
            </a>
            <a href="my-profile-pass.html" class="text-decoration-none">
              <li class="nav-item nav-link fw-bold fs-6 rounded-3 mb-2 text-primary link-danger" style="white-space: nowrap;">
                Password
              </li>
            </a>
           
            <a href="my-profile-membership.html" class="text-decoration-none">
              <li class="nav-item nav-link fw-bold fs-6 rounded-3 mb-2 text-primary link-danger" style="white-space: nowrap;">
                Membership
              </li>
            </a>
            <a href="my-profile-classes-history.html" class="text-decoration-none">
              <li class="nav-item nav-link fw-bold fs-6 rounded-3 mb-2 text-primary link-danger" style="white-space: nowrap;">
                Classes history
              </li>
            </a>
            </ul>
          
        </div>
  
    </div>
  </div>
  <!--=========== End sidebar tabs =========-->
  `);
}



function BtnBackToTop() {
  document.write(`
  <button
        type="button" title="Back to top"
        class="back-to-top btn btn- text-white rounded-circle py-2 px-2">
  <img src="images/arrow-up.svg" class="mb-3" width="18" />
  </button>  
  `);
}
function WhatsApp() {
  document.write(`
  <a href="https://wa.me/+97334479384" class="whats-app btn btn-info py-2 px-2 rounded-circle" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Whatsapp">
  <i class="bi bi-whatsapp my-float"></i>
  </a>  
  `);
}





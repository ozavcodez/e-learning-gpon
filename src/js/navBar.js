function  createNav(){
    var holder =""
    
        holder +=
        `<nav id="menu" class="top-0 hidden md:block  z-50 md:z-0 w-[80%] md:w-60  h-screen  fixed  bg-[#2F4858]  transition-all  duration-1000 ease-in-out delay-300">
        <div class="hidden md:flex items-center gap-2 px-8 py-3">
            <i class="text-lg text-[#00A651] ri-graduation-cap-line"></i>
            <h1 class="font-bold mt-1 text-sm text-white">GPONEDU</h1>
        </div>
        <hr class="hidden md:block mt-2 text-white">
        <div class=" text-white md:hidden md:mt-0 mt-6 md:gap-8 gap-10  pl-3">
            <div onclick=hideNav()>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 duration-700 cursor-pointer md:hidden  float-right m-3 " id="times" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"  />
                </svg>
            </div>            
            <span class="flex items-center ">
                <img src="Images/user-photozside.png" class="rounded-full ">
                <p class="text-[15px] ml-3">Samuel Jhonson <br><span>View profile</span></p>
            </span>
            <p class="text-base py-2 text-center" >Become an Instructor</p>
        </div>
                
        <ul class=" side-nav space-y-1  md:space-y-3 md:px-5 md:mt-10 font-normal text-[#D4C9C9] divide-y divide-white md:divide-none">
            <li >
                <a href="home.html" class="mx-2 flex justify-between md:justify-normal md:gap-2 rounded-sm hover:bg-[#05f27896] py-2 px-2">
                    <i class="ri-home-4-line order-last md:-order-last"></i>
                    <p class="text-[15px] pl-3  "  class="nav-links">Home</p>
                </a>
            </li>
        
            <li >
                            
                <a class=" nav-links mx-2 flex justify-between md:justify-normal md:gap-2 rounded-sm hover:bg-[#05f27896] py-2 px-2" href="courses.html" >
                    <i class="ri-book-mark-line order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3">Courses</p>
                </a>
            </li>
            
            <li>       
                <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-sm hover:bg-[#05f27896] py-2 px-2" href="videolesson.html" >
                <i class="ri-live-line order-last md:-order-last"></i>        
                    <p class="text-[15px] ml-3">Video Tutorial</p> 
                </a>
            </li>
        
            <li>
                <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-sm hover:bg-[#05f27896] py-2 px-2" href="quiz.html" >
                    <i class="ri-questionnaire-line order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3"> Quiz</p>
                </a>
            </li>
        
            <li >
                <a class="mx-2 flex justify-between md:justify-normal md:gap-2 rounded-sm hover:bg-[#05f27896] py-2 px-2" href="liveclass.html" class="nav-links">
                    <i class="ri-video-line order-last md:-order-last"></i>
                <p class="text-[15px] ml-3">Live Classes</p> 
                </a>
            </li>
        
            <li >        
                <a class="mx-2 flex justify-between md:justify-normal md:gap-2 rounded-sm hover:bg-[#05f27896] py-2 px-2" href="emptyexam.html" >
                    <i class="ri-book-read-fill order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3">Exam</p> 
                </a>
            </li>
        
            <li >
                <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-sm hover:bg-[#05f27896] py-2 px-2" href="purchasehistory.html">
                    <i class="ri-history-line order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3">Purchase History</p>
                </a>
            </li>
        
            <li >
                <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-sm hover:bg-[#05f27896] py-2 px-2" href="notification.html" class="nav-links">
                    <i class="ri-notification-2-line order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3">Notification</p> 
                </a>
            </li>
        
            <li class="">   
                <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-sm hover:bg-[#05f27896] py-2 px-2" href="profile.html" >
                    <i class="ri-user-line order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3">Profile</p> 
                </a>
            </li>
        
            
        </ul>
        <hr class=" mt-3 text-white ">
        <ul class=" side-nav space-y-1 overscroll-y-auto  md:space-y-3 md:px-5  font-normal text-[#D4C9C9] divide-y divide-white md:divide-none">
        
            <li >
                
                <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-sm hover:bg-[#05f27896] py-2 px-2" href="help.html" >
                    <i class="ri-question-mark order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3">Help</p> 
                </a>
            </li>
        
            <li  >
                <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-sm hover:bg-[#05f27896] py-2 px-2" href="signin.html" >
                    <i class="ri-shut-down-line order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3">Log Out</p> 
                </a>
            </li>
            
        </ul>
        
    </nav>`
        document.getElementById("navBar").innerHTML = holder
    
 }
 createNav()

 const navLinks = document.querySelectorAll(".side-nav  a");
 const activeNavLinks = document.querySelectorAll(".side-nav li");
 const currentLocaction = location.href

 navLinks.forEach(navLink => {
    // console.log(navLink)
    if(navLink.href.includes(currentLocaction)){
        navLink.classList.add('active');
    }
 });

// console.log(navLink)

const menu = document.getElementById('menu')
function hideNav(){
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}
function showMenu(){
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}
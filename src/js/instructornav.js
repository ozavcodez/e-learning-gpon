function  createNav(){
    var holder =""
    
        holder +=
        `<nav id="menu" class="top-0 hidden   z-50 lg:z-0 w-[80%] md:w-60  h-screen  fixed  bg-[#2F4858]  transition-all  duration-1000 ease-in-out delay-300  lg:flex flex-col">
        <div class="hidden md:flex items-center gap-2 p-3">
            <img src="../Images/goalPrimeLogoe.png" alt="" class="w-16">
            <h1 class="font-bold mt-1 text-xs text-white">GOALPrime education</h1>
        </div>
        <hr class="hidden md:block mt-2 text-white">
        <div class=" text-white lg:hidden mt-6 md:gap-8 gap-10  pl-3">
            <div onclick=hideNav()>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 duration-700 cursor-pointer lg:hidden  float-right m-3 " id="times" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"  />
                </svg>
            </div>            
            <span class="flex items-center ">
                <img src="../Images/user-photozside.png" class="rounded-full ">
                <p class="text-[15px] ml-3">Samuel Jhonson <br><span>View profile</span></p>
            </span>
            <p class="text-base py-2 text-center" >Become an Instructor</p>
        </div>
        <div class="invisible hover:visible overflow-auto">
            <ul class=" side-nav space-y-1  md:space-y-3 md:px-5 md:mt-10 font-normal text-[#D4C9C9] divide-y divide-white md:divide-none visible">
                <li >
                    <a href="home.html" class="mx-2 flex justify-between md:justify-normal md:gap-2 items-center w-full p-2 rounded-lg transition duration-75 hover:bg-[#00A651]/70  ">
                        <i class="w-6 h-6 ri-home-4-line order-last md:-order-last"></i>
                        <p class="text-[15px] pl-3  "  class="nav-links">Home</p>
                    </a>
                </li>
                <li id="mega-menu">
                    <button type="button" class="flex items-center w-full p-2 transition duration-75  mx-2 rounded-lg group hover:bg-[#00A651]/70 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <i class="ri-book-mark-line order-last md:-order-last"></i>
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Courses</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <ul id="dropdown-example" class="  space-y-1">
                        <li>
                            <a href="createcourse.html" class="  flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-[#00A651]/70 ">Create Course</a>
                        </li>
                        <li>
                            <a href="createmodule.html" class="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-[#00A651]/70 ">create Module</a>
                        </li>
                        <li>
                            <a href="editcourse.html" class="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-[#00A651]/70 ">View Course</a>
                        </li>
                        <li>
                            <a href="viewmodule.html" class="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-[#00A651]/70 ">View Module</a>
                        </li>
                    </ul>
            </li>
            
                <li>       
                    <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-lg transition duration-75 hover:bg-[#00A651]/70  py-2 px-2" href="videolesson.html" >
                    <i class="ri-live-line order-last md:-order-last"></i>        
                        <p class="text-[15px] ml-3">Assignment</p> 
                    </a>
                </li>
            
                <li>
                    <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-lg transition duration-75 hover:bg-[#00A651]/70  py-2 px-2" href="quiz.html" >
                        <i class="ri-questionnaire-line order-last md:-order-last"></i>
                        <p class="text-[15px] ml-3"> Quiz</p>
                    </a>
                </li>
            
                <li >
                    <a class="mx-2 flex justify-between md:justify-normal md:gap-2 rounded-lg transition duration-75 hover:bg-[#00A651]/70  py-2 px-2" href="live.html" class="nav-links">
                        <i class="ri-video-line order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3">Live Classes</p> 
                    </a>
                </li>
            
                <li >        
                    <a class="mx-2 flex justify-between md:justify-normal md:gap-2 rounded-lg transition duration-75 hover:bg-[#00A651]/70  py-2 px-2" href="emptyexam.html" >
                        <i class="ri-book-read-fill order-last md:-order-last"></i>
                        <p class="text-[15px] ml-3">Exam</p> 
                    </a>
                </li>
            
                <li >
                    <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-lg transition duration-75 hover:bg-[#00A651]/70  py-2 px-2" href="purchasehistory.html">
                        <i class="ri-history-line order-last md:-order-last"></i>
                        <p class="text-[15px] ml-3">Announcement</p>
                    </a>
                </li>
            
                <li >
                    <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-lg transition duration-75 hover:bg-[#00A651]/70  py-2 px-2" href="notification.html" class="nav-links">
                        <i class="ri-notification-2-line order-last md:-order-last"></i>
                        <p class="text-[15px] ml-3">Notification</p> 
                    </a>
                </li>
            
                <li class="">   
                    <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2 rounded-lg transition duration-75 hover:bg-[#00A651]/70  py-2 px-2" href="profile.html" >
                        <i class="ri-user-line order-last md:-order-last"></i>
                        <p class="text-[15px] ml-3">Profile</p> 
                    </a>
                </li>
            
                
            </ul>
        </div>
                
        
        <hr class=" mt-3 text-white ">
        <ul class=" side-nav space-y-1 overscroll-y-auto  md:space-y-3 md:px-5  font-normal text-[#D4C9C9] divide-y divide-white md:divide-none">
        
            <li >
                
                <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-lg transition duration-75 hover:bg-[#00A651]/70 py-2 px-2" href="help.html" >
                    <i class="ri-question-mark order-last md:-order-last"></i>
                    <p class="text-[15px] ml-3">Help</p> 
                </a>
            </li>
        
            <li  >
                <a class="nav-links mx-2 flex mt-1 justify-between md:justify-normal md:gap-2  rounded-lg transition duration-75 hover:bg-[#00A651]/70  py-2 px-2" href="signin.html" >
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
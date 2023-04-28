function  createNav(){
    var holder =""
    
        holder +=
        `<nav id="menu" class=" top-0 h-screen fixed md:block  w-60  bg-[#2F4858] ">
        <div class="logo flex justify-between gap-2 mx-5  py-3">
            <div class="flex items-center gap-2 px-2">
                <i class="text-lg text-[#00A651] ri-graduation-cap-line"></i>
                <h1 class="font-bold mt-1 text-sm text-white">GPONEDU</h1>
            </div>
            <i id="burger" class="md:hidden text-2xl ri-menu-line"></i>
        </div>
        <hr class="mt-2 text-white">
            
        <ul class=" side-nav space-y-3 px-5 mt-10 font-normal text-[#D4C9C9]">
            <li >
                <a href="home.html" class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                    <i class="ri-home-4-line"></i>
                    <p class="text-[15px] ml-3"  class="nav-links">Home</p>
                </a>
            </li>
        
            <li >
                            
                <a class=" nav-links mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2" href="courses.html" >
                    <i class="ri-book-mark-line"></i>
                    <p class="text-[15px] ml-3">Courses</p>
                </a>
            </li>
            
            <li>       
                <a class="nav-links mx-2 flex mt-1 gap-2  rounded-sm hover:bg-[#00A651] py-2 px-2" href="videoLesson.html" >
                <i class="ri-live-line"></i>        
                    <p class="text-[15px] ml-3">Video Tutorial</p> 
                </a>
            </li>
        
            <li>
                <a class="nav-links mx-2 flex mt-1 gap-2  rounded-sm hover:bg-[#00A651] py-2 px-2" href="quiz.html" >
                    <i class="ri-questionnaire-line"></i>
                    <p class="text-[15px] ml-3"> Quiz</p>
                </a>
            </li>
        
            <li >
                <a class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2" href="live.html" class="nav-links">
                    <i class="ri-video-line"></i>
                <p class="text-[15px] ml-3">Live Classes</p> 
                </a>
            </li>
        
            <li >        
                <a class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2" href="emptyExam.html" >
                    <i class="ri-book-read-fill"></i>
                    <p class="text-[15px] ml-3">Exam</p> 
                </a>
            </li>
        
            <li >
                <a class="nav-links mx-2 flex mt-1 gap-2  rounded-sm hover:bg-[#00A651] py-2 px-2" href="purchasehistory.html">
                    <i class="ri-history-line"></i>
                    <p class="text-[15px] ml-3">Purchase History</p>
                </a>
            </li>
        
            <li >
                <a class="nav-links mx-2 flex mt-1 gap-2  rounded-sm hover:bg-[#00A651] py-2 px-2" href="notification.html" class="nav-links">
                    <i class="ri-notification-2-line"></i>
                    <p class="text-[15px] ml-3">Notification</p> 
                </a>
            </li>
        
            <li >   
                <a class="nav-links mx-2 flex mt-1 gap-2  rounded-sm hover:bg-[#00A651] py-2 px-2" href="profile.html" >
                    <i class="ri-user-line"></i>
                    <p class="text-[15px] ml-3">Profile</p> 
                </a>
            </li>
        
            <hr class="mt-3 text-white">
        
            <li >
                
                <a class="nav-links mx-2 flex mt-1 gap-2  rounded-sm hover:bg-[#00A651] py-2 px-2" href="help.html" >
                    <i class="ri-question-mark"></i>
                    <p class="text-[15px] ml-3">Help</p> 
                </a>
            </li>
        
            <li  >
                <a class="nav-links mx-2 flex mt-1 gap-2  rounded-sm hover:bg-[#00A651] py-2 px-2" href="signin.html" >
                    <i class="ri-shut-down-line"></i>
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
    console.log(navLink)
    if(navLink.href.includes(currentLocaction)){
        navLink.classList.add('active');
    }
 });
var boy = "i am boy"
// console.log(navLink)
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
            
        <ul class="  space-y-3 px-5 mt-10 font-normal text-[#D4C9C9]">
            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-home-4-line"></i>
                <a class="text-[15px] ml-3" href="home.html">Home</a>
            </li>

            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-book-mark-line"></i>               
                <a class="text-[15px] ml-3" href="courses.html">Courses</a>
            </li>
            
            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-live-line"></i>        
                <a class="text-[15px] ml-3" href="">Video Tutorial</a>
            </li>

            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-questionnaire-line"></i>
                <a class="text-[15px] ml-3" href="">Quiz</a>
            </li>

            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-video-line"></i>
                <a class="text-[15px] ml-3" href="">Live Classes</a>
            </li>

            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-book-read-fill"></i>
                <a class="text-[15px] ml-3" href="">Exam</a>
            </li>

            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-history-line"></i>
                <a class="text-[15px] ml-3" href="">Purchase History</a>
            </li>

            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-notification-2-line"></i>
                <a class="text-[15px] ml-3" href="">Notification</a>
            </li>

            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-user-line"></i>
                <a class="text-[15px] ml-3" href="">Profile</a>
            </li>

            <hr class="mt-3 text-white">
        
            <li class="mx-2 flex gap-2 rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-question-mark"></i>
                <a class="text-[15px] ml-3" href="">Help</a>
            </li>

            <li class=" mx-2 flex mt-1 gap-2  rounded-sm hover:bg-[#00A651] py-2 px-2">
                <i class="ri-shut-down-line"></i>
                <a class="text-[15px] ml-3" href="">Log Out</a>
            </li>
        </ul>
    </nav>`
        document.getElementById("navBar").innerHTML = holder
    
 }
 createNav()
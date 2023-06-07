const courses =[
    {
        courseImg:"",
        title: "business",
        course: "Proposal development",
        amount: "$50",
        tutorImage :"Images/monail1.png",
        tutor:"Henty Samson & Bashir A"
    },
    {
        courseImg:"",
        title: "business",
        course: "Proposal development",
        amount: "$50",
        tutorImage :"Images/monail1.png",
        tutor:"Henty Samson & Bashir A"
    },
    {
        courseImg:"",
        title: "business",
        course: "Proposal development",
        amount: "$50",
        tutorImage :"Images/monail1.png",
        tutor:"Henty Samson & Bashir A"
    },
    {
        courseImg:"",
        title: "business",
        course: "Proposal development",
        amount: "$50",
        tutorImage :"Images/monail1.png",
        tutor:"Henty Samson & Bashir A"
    },
    {
        courseImg:"",
        title: "business",
        course: "Proposal development",
        amount: "$50",
        tutorImage :"Images/monail1.png",
        tutor:"Henty Samson & Bashir A"
    },
    {
        courseImg:"",
        title: "business",
        course: "Proposal development",
        amount: "$50",
        tutorImage :"Images/monail1.png",
        tutor:"Henty Samson & Bashir A"
    },
    {
        courseImg:"",
        title: "business",
        course: "Proposal development",
        amount: "$50",
        tutorImage :"Images/monail1.png",
        tutor:"Henty Samson & Bashir A"
    }
]

function  createCard(courses){
    var holder =""
    for(var i in courses){
        holder +=
        `<div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg relative  ">
            <img src="${courses[i].courseImg}" alt="" class=" h-32 bg-[#D9D9D9] object-cover w-full">
            <div class="  space-y-1 p-5">
                <p class="text-[#655E5EC4] text-opacity-70 text-xs ">${courses[i].title}</p>
                <p class="font-semibold text-lg ">${courses[i].course}</p>
                <p class="font-semibold text-lg">${courses[i].amount}</p>
                <div class="flex gap-3 items-center">
                    <img src="${courses[i].tutorImage}" alt="" class="rounded-full h-5 w-5">
                    <p class="text-[#263238D9] text-opacity-80">${courses[i].tutor}</p>
                </div>
            </div>
        
            <div class=" flex justify-around  items-center py-3">
                
                <a href="courseDescription.html">
                    <div >
                        <button class="bg-[#009348] hover:bg-opacity-80 text-white text:sm  rounded-lg  px-6 py-1 text-bold">More info </button>
                    </div>
                </a>
                <div class="border-[#009348] hover:border-none hover:bg-[#009348] text-[#009348] text-sm px-6 hover:text-white border rounded-lg py-1 text-bold" >
                    <button >Enroll </button>
                    <i class="text-lg inline-flex pl-3 text-[#FFC45DD6] text-opacity-40 ri-graduation-cap-line"></i>
                </div>
            </div>
    </div>`
        document.getElementById("card").innerHTML = holder
    }
 }

 createCard(courses)
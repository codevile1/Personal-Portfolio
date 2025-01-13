
function loader(){
    document.addEventListener("DOMContentLoaded", function () {
        // Function to animate a counter
        function animateCounter(counter, duration, delay = 0) {
            const numHeight = counter.querySelector(".num").clientHeight; // Get the height of one `.num`
            const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight; // Calculate total scroll distance
    
            gsap.to(counter, {
                y: -totalDistance,
                duration: duration,
                delay: delay,
                ease: "power2.inOut", // Animation easing
            });
        }
    
        // Get the counter elements
        const counter1 = document.querySelector(".counter1");
        const counter2 = document.querySelector(".counter2");
        const counter3 = document.querySelector(".counter3");
    
        // Animate each counter
        if (counter1) animateCounter(counter1, 2, 4); // Counter 1 with a delay of 4s
        if (counter2) animateCounter(counter2, 6);    // Counter 2 with no delay
        if (counter3) animateCounter(counter3, 5);    // Counter 3 with no delay
    
        // Additional animation for `.digit` elements
        gsap.to(".digit", {
            top: "-300px", // Ensure this value matches your actual offset requirement
            stagger: {
                amount: 0.25, // Stagger animation
            },
            delay: 6, // Delay for `.digit` animation
            duration: 1,
            ease: "power4.inOut", // Animation easing
        });
    });
    
    gsap.from(".load1",{
        width:0,
        duration:6,
        ease:"power2.inOut",

    })
    gsap.from(".load2",{
        width:0,
        delay:1.9,
        duration:2  ,
        ease:"power2.inOut",
        
    })
    gsap.to(".load",{
        background:"none",
        delay:6,
        duration:0.1,
    })
    gsap.to(".load1",{
        rotate:90,
        y:-50,
        duration:0.5,
        delay:6,

    });
    gsap.to(".load2",{
        // x:-75,
        y:0,
        duration:0.5,

    })
    gsap.to(".load",{
        scale:40,
        duration:1,
        delay:7,
        ease:"power2.inOut"
    })
    gsap.to(".load",{
        rotate:45,
        y:500,
        x:2000,
        duration:1,
        delay:7,
        ease:"power2.inOut"
    })
    gsap.to(".loader",{
        opacity:0,
        duration:0.5,
        delay:7.5,
        ease:"power1.inOut"
    })
    gsap.to(".counter",{
        opacity:0,
        duration:0.5,
        delay:7,
        ease:"power1.inOut",
    })
        // gsap.to(".content",1.5,{
        //     delay:7,
        //     y:-50,
        //     ease:"power4.inOut",
        //     stragger:{
        //         amount:1
        //     }

        // })


}

loader();


function wrap(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            gsap.to(".wrap",{
                transform:'translateX(-200%)',
                // delay:1,
                duration:15,
                ease:"none"
            })
            gsap.to(".wrap span",{
                rotate:180,
    
            })

        }
        else{
            gsap.to(".wrap",{
                transform:'translateX(0%)',
                // delay:1,
                duration:15,
                ease:"none"
            })
            gsap.to(".wrap span",{
                rotate:0,
        
            })

        }

    })
}
wrap();

function scrollSkills() {
    gsap.from(".skill-wrap h1", {
      scale: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".skill-wrap h1", 
        scroller: "body", 
        // markers: true, 
        start: "top 60%", 
      },
    });
  }
  
  function scrollContainer() {
    gsap.from(".container h1", {
      scale: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".container h1",
        scroller: "body", // Ensure the scroller is correctly defined
        // markers: true,
        start: "top 80%", 
      },
    });
  }
  
  // Initialize both functions
  scrollSkills();
  scrollContainer();
  
let trigger=document.querySelector(".trigger")
trigger.addEventListener("click",function scrollToSection() {
    document.querySelector('.page2').scrollIntoView({ behavior: 'smooth' });
  })
let work=document.querySelector(".work")
  work.addEventListener("click",function scrollToSection() {
      document.querySelector('.page3').scrollIntoView({ behavior: 'smooth' });
    })
let about=document.querySelector(".about")
    about.addEventListener("click",function scrollToSection() {
        document.querySelector('.page2').scrollIntoView({ behavior: 'smooth' });
      })
let contact=document.querySelector(".contact")
      contact.addEventListener("click",function scrollToSection() {
          document.querySelector('.page4').scrollIntoView({ behavior: 'smooth' });
        })

let con=document.querySelector(".elem-con");
let fixed=document.querySelector("#fixed");
con.addEventListener("mouseenter",function(){
fixed.style.display="block"
})
con.addEventListener("mouseleave",function(){
    fixed.style.display="none"
    })
// let elem1=document.querySelector(".elem")
// elem1.addEventListener("mouseenter",function(){
//     let img=elem1.getAttribute("data-img")
//     fixed.style.backgroundImage=`url(${img})`
// })
let elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
   e.addEventListener("mouseenter",function(){
        let image=e.getAttribute("data-img")
        fixed.style.backgroundImage=`url(${image})`

    })
// console.log(e)
})

        // const marquee = document.querySelector('.wrap');
        // const clone = marquee.cloneNode(true); // Clone the content
        // marquee.parentElement.appendChild(clone); // Append the clone
const main=document.querySelector("main")
main.addEventListener("mousemove",function(e){
    gsap.to(".gola",{
        x:e.x,
        y:e.y,
        duration:1,
        ease: "power2.out"
    })
})

const intro=document.querySelector(".intro")
intro.addEventListener("mouseenter",function(e){
    gsap.to(".gola",{
        x:e.x,
        y:e.y,
        scale:2,
        duration:1,
        ease: "power2.out"
    })
})
intro.addEventListener("mouseleave",function(e){
    gsap.to(".gola",{
        x:e.x,
        y:e.y,
        scale:1,
        duration:1,
        ease: "power2.out"
    })
})
const marquee=document.querySelector(".marquee")
marquee.addEventListener("mouseenter",function(e){
    gsap.to(".gola",{
        x:e.x,
        y:e.y,
        scale:2,
        duration:1,
        ease: "power2.out"
    })
})
marquee.addEventListener("mouseleave",function(e){
    gsap.to(".gola",{
        x:e.x,
        y:e.y,
        scale:1,
        duration:1,
        backgroundColor:"blue",
        ease: "power2.out"
    })
})

{/* <div id="rotatingElement" style="width: 100px; height: 100px; background: lightblue;"></div> */}


const eyesLeft = document.querySelector(".eyes-left-center-dot");
const eyesRight = document.querySelector(".eyes-right-center-dot");

window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const updateEyePosition = (eye, eyeContainer) => {
    const rect = eyeContainer.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(rect.width / 4, Math.sqrt(deltaX ** 2 + deltaY ** 2)); // Limit the distance

    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  updateEyePosition(eyesLeft, eyesLeft.parentElement);
  updateEyePosition(eyesRight, eyesRight.parentElement);
});
function textanimation(){
    let text=document.querySelectorAll(".text");
    text.forEach((elm)=>{
        let innerText= elm.innerText;
        elm.innerHTML="";

        let textcontainer=document.createElement("div");
        textcontainer.classList.add("block");
        
        for(let letter of innerText){
            let span =document.createElement("span")
            span.innerText=letter.trim()===""?"\xa0":letter;
            span.classList.add("letter");
            textcontainer.appendChild(span);
        }
        elm.appendChild(textcontainer);
        elm.appendChild(textcontainer.cloneNode(true))
    });
    text.forEach((elm)=>{
        elm.addEventListener("mouseover",()=>{
        elm.classList.remove("play")});
    })
}
textanimation();


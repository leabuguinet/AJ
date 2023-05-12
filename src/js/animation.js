import { gsap } from "gsap";

const programmeAnim = {

    init () {


        gsap.registerPlugin(ScrollTrigger);



        /* var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".event-box",
            start: "top 90%",
            //end: "+=400",
            scrub: false,
            markers: true, 
            
          }
        });

        tl
        .from(".event-box", {
          opacity: 0,
          x: -500, 
          stagger: 1.5
        })
        .from(".item", {
            opacity: 0,
            duration: 2,
            //y: -100, 
            stagger: 0.1
        }, "0.5") */

/// Create a master timeline
const masterTl = gsap.timeline();

// Get all .event-box elements
const eventBoxes = document.querySelectorAll('.event-box');

// Loop through each element and create a timeline for it
eventBoxes.forEach((eventBox, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: eventBox,
      start: "top 90%",
      scrub: false,
      //markers: true,
    }
  });

  tl
    .from(eventBox, {
      //opacity: 0,
      x: -500, 
      duration: 1.5,
      //stagger: 1.5
    })
    .from(eventBox.querySelectorAll('.item'), {
      opacity: 0,
      duration: 3,
      stagger: 0.5
    }, "0.8");

  // Add the individual timeline to the master timeline with a stagger
  masterTl.add(tl, index * 2);
});

// Play the master timeline
masterTl.play();


    }

}

export default programmeAnim;
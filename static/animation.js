// Handling Animation

    // collecting all the sections and storing it in variable container.
    var section1content = document.querySelector('.intro-wrapper');
    var section2content = document.querySelector('.about-wrapper');
    var section3content = document.querySelector('.video-container');
    var section4contentAll = document.querySelectorAll('.post');
    var section5contentAll = document.querySelectorAll('.plan-card');
    var rocket4 = document.querySelector('#rocket4');
    var rocket5 = document.querySelector('#rocket5');

    var section1 = document.querySelector('.section1');
    var section2 = document.querySelector('.section2');
    var section3 = document.querySelector('.section3');
    var section4 = document.querySelector('.section4');
    var section5 = document.querySelector('.section5');

    // This function checks whether a particular element is visible in viewport.
    const isVisibleInViewport = (element) => {
        const rect = element.getBoundingClientRect()
        return (
            rect.top >= 0 &&
            rect.left >= 0 && 
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    // On window scroll event.
    window.addEventListener('scroll', (e) => {

        // if at top of web page remove all the animations for a fresh start.
        if (scrollY == 0) {
            // removing animation from each section with loop.
            for (i=3; i < 6; i++ ) {
                if (i == 4 || i == 5) {
                    // removing animation from all cards in section 4 & 5.
                    eval('section' + i + 'content' + "All").forEach((card) => {
                        card.classList.remove('animate');
                        card.style.opacity = '0';
                    })
                    eval('rocket' + i).classList.remove('rocketanimation');
                    // removing animation from sections other than card section.
                } else {
                    eval('section' + i + 'content').classList.remove('animate');
                }
                
            };
        }

        // adding animation in each section with loop.
        for (i=3; i < 6; i++ ) {

            // if section is visible in viewport then add animation.
            if (isVisibleInViewport(eval('section' + i))) {
                // adding animation to all cards in section 4 & 5.
                if (i == 4 || i == 5 ) {
                    eval('section' + i + 'content' + "All").forEach((card) => {
                        card.classList.add('animate');
                        card.addEventListener("animationend", () => {
                            card.style.opacity = '1';
                        })
                    })
                    eval('rocket' + i).classList.add('rocketanimation');
                // adding animation to sections other than card section.
                } else {
                    eval('section' + i + 'content').classList.add('animate');
                }
                
            };
        }
    })
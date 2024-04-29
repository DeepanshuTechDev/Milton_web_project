// FAQs
var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // pricing
    function toggleSecondPlan() {
        const secondPlanSection = document.querySelector('.second-plan');
        const firstPlanSection = document.querySelector('.first-plan');
        const checkbox = document.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            secondPlanSection.style.display = 'flex';
            firstPlanSection.style.display = 'none';
        } else {
            secondPlanSection.style.display = 'none';
            firstPlanSection.style.display = 'flex';
        }
    }

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);

//Experience & Education
document.getElementById("toggle-experience-education").addEventListener("click", function () {
    const moreExperience = document.getElementById("more-experience");
    const moreEducation = document.getElementById("more-education");
    const toggleBtn = document.getElementById("toggle-experience-education");

    if (moreExperience.classList.contains("d-none")) {
        moreExperience.classList.remove("d-none");
        moreEducation.classList.remove("d-none");
        toggleBtn.textContent = "See Less";
    } else {
        moreExperience.classList.add("d-none");
        moreEducation.classList.add("d-none");
        toggleBtn.textContent = "See More";
    }
});



document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
        const icon = this.querySelector('i');
        const isExpanded = this.getAttribute('aria-expanded') === "true";

        // Toggle arrow direction
        if (isExpanded) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});



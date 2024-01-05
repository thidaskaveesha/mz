// Accordion handler
document.addEventListener("DOMContentLoaded", function () {
    // Select all accordion headings
    var accordionHeadings = document.querySelectorAll('.accordion-heading');
    // Attach click event to each accordion heading
    accordionHeadings.forEach(function (heading) {
        heading.addEventListener('click', function () {
            // Check if the clicked accordion item is already active
            var isActive = this.parentNode.classList.contains('active');
            // Remove the 'active' class from all accordion items
            accordionHeadings.forEach(function (otherHeading) {
                otherHeading.parentNode.classList.remove('active');
            });
            // If the clicked item was not active, add the 'active' class
            if (!isActive) {
                this.parentNode.classList.add('active');
            }
        });
    });
});
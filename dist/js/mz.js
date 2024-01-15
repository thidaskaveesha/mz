// tooltip handler
document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the specified attributes
    var elements = document.querySelectorAll('[data-mz-tooltip][data-mz-tooltip-placement]');

    // Iterate through each element
    elements.forEach(function (element) {
        // Create a tooltip element
        var tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';

        // Set the tooltip text from the data-mz-tooltip attribute
        tooltip.textContent = element.getAttribute('data-mz-tooltip');

        // Set the tooltip position from the data-mz-tooltip-placement attribute
        var placement = element.getAttribute('data-mz-tooltip-placement');
        positionTooltip(element, tooltip, placement);

        // Append the tooltip to the body
        document.body.appendChild(tooltip);

        // Add event listeners for mouseover and mouseout
        element.addEventListener('mouseover', function () {
            tooltip.style.display = 'block';
        });

        element.addEventListener('mouseout', function () {
            tooltip.style.display = 'none';
        });
    });

    // Function to position the tooltip
    function positionTooltip(element, tooltip, placement) {
        switch (placement) {
            case 'top':
                tooltip.style.top = (element.getBoundingClientRect().top - tooltip.offsetHeight - 10) + 'px';
                tooltip.style.left = element.getBoundingClientRect().left + 'px';
                break;
            case 'right':
                tooltip.style.left = (element.getBoundingClientRect().right - tooltip.offsetWidth + 15) + 'px';
                tooltip.style.top = element.getBoundingClientRect().top + 'px';
                break;
            case 'bottom':
                tooltip.style.top = (element.getBoundingClientRect().top - tooltip.offsetHeight + 10) + 'px';
                tooltip.style.left = element.getBoundingClientRect().left + 'px';
                break;
            case 'left':
                tooltip.style.left = (element.getBoundingClientRect().left - tooltip.offsetWidth - 30) + 'px';
                tooltip.style.top = element.getBoundingClientRect().top + 'px';
                break;
            default:
                break;
        }
    }
});
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

// Toast close btn handler 
document.addEventListener('DOMContentLoaded', function () {
    var closeButtons = document.querySelectorAll('.btn-close');

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Find the parent toast and hide it
            var toast = button.closest('.toast');
            var toast_br = button.closest('.toast-br');
            var toast_tr = button.closest('.toast-tr');
            var toast_bl = button.closest('.toast-bl');
            var toast_tl = button.closest('.toast-tl');

            if (toast) {
                toast.style.display = 'none';
            } else if (toast_br) {
                toast_br.style.display = 'none';
            } else if (toast_tr) {
                toast_tr.style.display = 'none';
            } else if (toast_bl) {
                toast_bl.style.display = 'none';
            } else if (toast_tl) {
                toast_tl.style.display = 'none';
            }
        });
    });
});


const filterItems = document.querySelectorAll('.lists li');
// Get all the content sections
const contentSections = document.querySelectorAll('.details-section');
// Get the not-found message
const notFoundMessage = document.querySelector('.not-found-message');

// Add event listener to filter items
filterItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remove active styles (text color and border) from all filter items
        filterItems.forEach(li => li.classList.remove('text-[#07904F]', 'border-b-2', 'border-[#07904F]'));

        // Add active style to the clicked filter item (text color and border)
        this.classList.add('text-[#07904F]', 'border-b-2', 'border-[#07904F]');
        // Add active style to the clicked filter item (text color and border)
        this.classList.add('text-[#07904F]');

        // Get the ID of the clicked filter item
        const filterId = this.id;

        // Hide all content sections
        let contentFound = false;
        contentSections.forEach(section => {
            if (section.id === filterId) {
                section.style.display = 'grid'; // Show matching section
                contentFound = true;
            } else {
                section.style.display = 'none'; // Hide non-matching sections
            }
        });

        // Show "not found" message if no section matches
        if (!contentFound) {
            notFoundMessage.classList.remove('hidden');
        } else {
            notFoundMessage.classList.add('hidden');
        }
    });
});
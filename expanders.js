document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Toggle the clicked section
        this.classList.toggle('expanded');

        // Collapse other sections
        document.querySelectorAll('.section').forEach(otherSection => {
            if (otherSection !== this) {
                otherSection.classList.remove('expanded');
            }
        });

        // Scroll the expanded section into view
        if (this.classList.contains('expanded')) {
            this.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
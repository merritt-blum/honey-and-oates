// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
    // Add your JavaScript code here

    // Example: Toggle visibility of sections
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            document.querySelectorAll('main section').forEach(section => {
                section.style.display = section.id === sectionId ? 'block' : 'none';
            });
        });
    });
});

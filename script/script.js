document.addEventListener('DOMContentLoaded', function() {
    var cmp = document.getElementById('cmp');
    var content = document.getElementById('content');
    var goeshere = document.getElementById('goeshere');

    if (cmp && content && goeshere) {
        cmp.addEventListener('click', function() {
            // Show the #content section
            content.style.display = 'block';
            
            // Use a timeout to ensure the element is rendered
            setTimeout(function() {
                content.classList.add('active'); // Add class to trigger transition
                
                // Scroll to the #goeshere element
                goeshere.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start', // Align the top of #goeshere with the top of the viewport
                    inline: 'nearest'
                });
            }, 10); // Small delay to ensure the transition takes effect
        });
    } else {
        console.error('Element not found');
    }
});

document.addEventListener('DOMContentLoaded', () => {
        if (window.innerWidth > 768) { // Only run the script on desktop
            document.querySelectorAll('.project-item').forEach(item => {
                item.addEventListener('mouseover', () => {
                    document.querySelectorAll('.project-img').forEach(img => {
                        if (img.getAttribute('target') === item.id) {
                            img.classList.add('show');
                        } else {
                            img.classList.remove('show');
                        }
                    });
                });

                item.addEventListener('mouseout', () => {
                    document.querySelectorAll('.project-img').forEach(img => {
                        img.classList.remove('show');
                    });
                });
            });
        }
    });

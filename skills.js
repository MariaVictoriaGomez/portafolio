document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelectorAll('.bar');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage;
                bar.classList.add('animate');
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.1
    });

    bars.forEach(bar => {
        observer.observe(bar);
    });
});

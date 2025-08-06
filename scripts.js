// Live IST Clock
function updateClock() {
    // Uses Intl API to convert time to Asia/Kolkata timezone
    const now = new Date();
    const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const h = String(istTime.getHours()).padStart(2, '0');
    const m = String(istTime.getMinutes()).padStart(2, '0');
    const s = String(istTime.getSeconds()).padStart(2, '0');
    document.getElementById('ist-clock').textContent = `${h}:${m}:${s} IST`;
}
updateClock();
setInterval(updateClock, 1000);


    // Self-executing function to avoid polluting the global scope
    (() => {
        // Select all elements that should be animated
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        // Check if there are any elements to animate
        if (!animatedElements.length) return;

        // Callback function for the Intersection Observer
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observerOptions = {
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    })();


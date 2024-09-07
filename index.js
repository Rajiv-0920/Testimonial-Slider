const testimonials = document.querySelectorAll(".testimonial");

window.addEventListener("resize", () => {
    screenWidth = screen.width;
    location.reload();
})

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        let screenWidth = screen.width;
        let amount = 0;


        if (screenWidth >= 770)
            amount = -630;
        else
            amount = -(screenWidth * 90 / 100) + 20;
        moveTestimonials(amount);
    }, 7000);

})

let moveValue = 0;
function moveTestimonials(amount) {
    let totalItem = testimonials.length;
    let totalMovement = (totalItem - 1) * amount;
    /* Set 'moveValue' to 0 */
    if (moveValue === totalMovement)
        moveValue = Math.abs(amount);

    moveValue += amount;
    testimonials.forEach(testimonial => {
        testimonial.style.transform = `translate(${moveValue}px)`;
    });
}

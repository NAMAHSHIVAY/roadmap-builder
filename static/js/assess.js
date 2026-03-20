// ─────────────────────────────────────────
// CODE CARD SELECTION
// ─────────────────────────────────────────

function selectTrack(track) {
    // Set hidden input
    const input = document.getElementById("selected-track");
    if (input) input.value = track;

    // Remove selected from all cards
    document.querySelectorAll(".code-card, .no-understand")
        .forEach(card => card.classList.remove("selected"));

    // Clear all check circles
    document.querySelectorAll(".code-check")
        .forEach(check => check.textContent = "");

    // Select clicked card
    const card = document.getElementById("card-" + track);
    if (card) {
        card.classList.add("selected");
        const check = card.querySelector(".code-check");
        if (check) check.textContent = "✓";
    }

    // Show time section with animation
    const timeSection = document.getElementById("time-section");
    if (timeSection) {
        timeSection.style.display = "block";
        timeSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// ─────────────────────────────────────────
// FORM VALIDATION
// ─────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("assess-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            const track = document.getElementById("selected-track").value;
            if (!track) {
                e.preventDefault();
                alert("Please select your current level first.");
                return;
            }
            const btn = document.getElementById("generate-btn");
            if (btn) {
                btn.textContent = "Generating your roadmap...";
                btn.disabled = true;
            }
        });
    }
});
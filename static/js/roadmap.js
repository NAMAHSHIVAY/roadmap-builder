// ─────────────────────────────────────────
// MILESTONE EXPAND COLLAPSE
// ─────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".milestone-header")
        .forEach(function (header) {
            header.addEventListener("click", function () {
                const body = header.parentElement
                    .querySelector(".milestone-body");
                if (body) {
                    const isHidden = body.style.display === "none";
                    body.style.display = isHidden ? "grid" : "none";
                    header.classList.toggle("collapsed", !isHidden);
                }
            });
        });

    // ─────────────────────────────────────
    // PROGRESS TRACKER
    // ─────────────────────────────────────

    document.querySelectorAll(".milestone-card")
        .forEach(function (card, index) {
            const btn = document.createElement("button");
            btn.className = "complete-btn";
            btn.textContent = "Mark as complete ✓";
            btn.setAttribute("data-index", index);

            const done = localStorage.getItem("milestone-" + index);
            if (done) {
                card.classList.add("completed");
                btn.textContent = "Completed ✓";
                btn.classList.add("done");
            }

            btn.addEventListener("click", function () {
                const idx = this.getAttribute("data-index");
                const isCompleted = card.classList.toggle("completed");
                if (isCompleted) {
                    this.textContent = "Completed ✓";
                    this.classList.add("done");
                    localStorage.setItem("milestone-" + idx, "true");
                } else {
                    this.textContent = "Mark as complete ✓";
                    this.classList.remove("done");
                    localStorage.removeItem("milestone-" + idx);
                }
                updateProgress();
            });

            const project = card.querySelector(".project-section");
            if (project) project.appendChild(btn);
        });

    updateProgress();
});

// ─────────────────────────────────────────
// PROGRESS BAR
// ─────────────────────────────────────────

function updateProgress() {
    const total = document.querySelectorAll(".milestone-card").length;
    const completed = document.querySelectorAll(
        ".milestone-card.completed").length;
    const bar = document.getElementById("progress-bar");
    const text = document.getElementById("progress-text");
    if (bar) {
        bar.style.width = (total > 0 ? completed / total * 100 : 0) + "%";
    }
    if (text) {
        text.textContent = completed + " of " + total + " milestones completed";
    }
}
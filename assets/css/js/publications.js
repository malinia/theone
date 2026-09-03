document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".post-content table tbody tr").forEach(function (row) {
const link = row.querySelector("a");

```
    if (!link) return;

    row.addEventListener("click", function (event) {
        // Don't interfere with normal link clicks
        if (event.target.closest("a")) return;

        window.location.href = link.href;
    });
});
```

});

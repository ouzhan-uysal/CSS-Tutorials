/* Navbar Link Actions */
$(document).ready(function () {
    $(".nav-links li").on("click", function () {
        var dataId = $(this).attr("data-id");
        const formTag = document.getElementById("mainArticle");
        const gridTag = document.getElementById("mainAside");
        if (dataId === "show") {
            formTag.style.display = "";
            gridTag.style.display = "";
        } else if (dataId === "showForm") {
            formTag.style.display = "";
            gridTag.style.display = "none";
        } else if (dataId === "showGrid") {
            gridTag.style.display = "";
            formTag.style.display = "none";
        } else if (dataId === "hide") {
            formTag.style.display = "none";
            gridTag.style.display = "none";
        } else {
            alert("Bi sıkıntı var haciii")
        }
    });
});

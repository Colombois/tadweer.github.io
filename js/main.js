$(document).ready(function() {
    $("#navbar").load("./master/navbar.html", function() {
        // After the navbar content is loaded
        attachNavbarEventListeners();
    });

    $("#footer").load("./master/footer.html", function() {
        // After the navbar content is loaded
        attachNavbarEventListeners();
    });
});

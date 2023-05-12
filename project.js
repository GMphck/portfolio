// This function returns whoever clicks on the home button link to the home page
// function goToHomePage()
// {
//     window.location.href = "https://google.com/";
// }

// It is a function used to switch the visibility of the navigation menu
//  and to change the icon displayed
//   when the menu is open or closed.
function myFunction() {
    var x = document.getElementById("myTop");
    var icon = x.querySelector(".icon");
    x.classList.toggle("responsive");
    if (x.classList.contains("responsive")) {
    icon.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
    icon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

function displayMessage()
{
    alert("Coming soon!");
}
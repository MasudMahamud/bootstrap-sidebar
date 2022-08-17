$("#navIcon").click(function () {
  SideMenuOpenClose();
});

$("#overLayId").click(function () {
  SideMenuOpenClose();
});

function SideMenuOpenClose() {
  let sideNav = $("#sideNav");
  let overLayId = $("#overLayId");
  let menuText = $(".menuText");

  if (sideNav.hasClass("navClose")) {
    sideNav.removeClass("navClose");
    sideNav.addClass("navOpen");
    menuText.removeClass("d-none");

    overLayId.removeClass("overLayClose");
    overLayId.addClass("overLay");
  } else {
    sideNav.removeClass("navOpen");
    sideNav.addClass("navClose");
    menuText.addClass("d-none");

    overLayId.removeClass("overLay");
    overLayId.addClass("overLayClose");
  }
}

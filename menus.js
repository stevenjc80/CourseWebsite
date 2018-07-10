if (window.addEventListener) {
  window.addEventListener("resize", browserResize);
} else if (window.attachEvent) {
  window.attachEvent("onresize", browserResize);
}
var xbeforeResize = window.innerWidth;
var ybeforeResize = window.innerWidth;
var zbeforeResize = window.innerWidth;
function browserResize() {
  var afterResize = window.innerWidth;
  if ((xbeforeResize < (1450 + 14) && afterResize >= (1450 + 14)) || (xbeforeResize >= (1450 + 14) && afterResize < (1450 + 14)) ||
    (xbeforeResize < (700 + 14) && afterResize >= (700 + 14)) || (xbeforeResize >= (700 + 14) && afterResize < (700 + 14)) ||
    (xbeforeResize < (480 + 17) && afterResize >= (480 + 17)) ||(xbeforeResize >= (480 + 17) && afterResize < (480 + 17))) {
    xbeforeResize = afterResize;
  }
  if ((ybeforeResize < (1675 + 14) && afterResize >= (1675 + 14)) || (ybeforeResize >= (1675 + 14) && afterResize < (1675 + 14)) ||
    (ybeforeResize < (1100 + 14) && afterResize >= (1100 + 14)) || (ybeforeResize >= (1100 + 14) && afterResize < (1100 + 14)) ||
    (ybeforeResize < (975 + 17) && afterResize >= (975 + 17)) || (ybeforeResize >= (975 + 17) && afterResize < (975 + 17))) {
    ybeforeResize = afterResize;
  }
  if ((zbeforeResize < (1200 + 14) && afterResize >= (1200 + 14)) || (zbeforeResize >= (1200 + 14) && afterResize < (1200 + 14))) {
    zbeforeResize = afterResize;
  }
}
function open_side_menu() {
  var m;
  m = document.getElementById("side_menu");
  if (m.style.display == "block") {
    close_side_menu();
  } else {
    close_all_menus();
    m.style.display = "block";
    fix_sidemenu();
  }
}
function close_side_menu() {
  var m;
  m = document.getElementById("side_menu");
  m.style.display = "none";
}
if (window.addEventListener) {
  window.addEventListener("scroll", function () {fix_sidemenu(); });
  window.addEventListener("resize", function () {fix_sidemenu(); });
  window.addEventListener("touchmove", function () {fix_sidemenu(); });
  window.addEventListener("load", function () {fix_sidemenu(); });
} else if (window.attachEvent) {
  window.attachEvent("onscroll", function () {fix_sidemenu(); });
  window.attachEvent("onresize", function () {fix_sidemenu(); });
  window.attachEvent("ontouchmove", function () {fix_sidemenu(); });
  window.attachEvent("onload", function () {fix_sidemenu(); });
}
function fix_sidemenu() {
  var w, top;
  w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  top = scrolltop()
  if (w < 993 && w > 600) {
    if (top == 0) {
      document.getElementById("side_menu").style.paddingTop = "128px";
    }
    if (top > 0 && top < 100) {
      document.getElementById("side_menu").style.paddingTop = (147 - top) + "px";
    }
    if (top > 100) {
      document.getElementById("side_menu").style.paddingTop = document.getElementById("top_menu").offsetHeight + "px";
      document.getElementById("below_top_menu").style.paddingTop = "40px";
      document.getElementById("top_menu").style.position = "fixed";
      document.getElementById("top_menu").style.top = "0";
    } else {
      document.getElementById("below_top_menu").style.paddingTop = "0";
      document.getElementById("top_menu").style.position = "relative";
    }
    document.getElementById("side_menu_container").style.paddingTop = "0";
  } else {
    if (top == 0) {
      if (w < 600) {
        document.getElementById("side_menu").style.paddingTop = "100px";
      } else {
        document.getElementById("side_menu").style.paddingTop = "0";
      }
    }
    if (top > 0 && top < 63) {
      document.getElementById("side_menu").style.paddingTop = (109 - top) + "px";
    }
    if (top > 63) {
      document.getElementById("side_menu").style.paddingTop = "40px";
      if (w > 992) {document.getElementById("side_menu_container").style.paddingTop = "40px";}
      document.getElementById("below_top_menu").style.paddingTop = "28px";
      document.getElementById("top_menu").style.position = "fixed";
      document.getElementById("top_menu").style.top = "0";
    } else {
      if (w > 992) { document.getElementById("side_menu_container").style.paddingTop = (112 - top) + "px";}
      document.getElementById("below_top_menu").style.paddingTop = "0";
      document.getElementById("top_menu").style.position = "relative";
    }
  }
}
function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}
function open_top_menu(x) {
  var m, c, contentNode;
  m = document.getElementById(x);
  c = document.getElementById(x + "_content");
  if (m.style.display == "block") {
    close_top_menu(x);
  } else {
    close_all_menus();
    if (m.innerHTML == "") {
      contentNode = document.body.removeChild(c);
      m.appendChild(contentNode);
      c.style.display = "block";
    }
    m.style.display = "block";
    document.getElementById(x + "_arrow").innerHTML = '&#9650;';
    document.getElementById(x + "_btn").className = "highlightMenu";
  }
}
function close_top_menu(x) {
  document.getElementById(x).style.display = "none";
  document.getElementById(x + "_arrow").innerHTML = '&#9660;';
  document.getElementById(x + "_btn").className = "";
}
function close_all_menus() {
  var m;
  m = document.getElementsByClassName("dropnav");
  for (i = 0; i < m.length; i++) {
    close_top_menu(m[i].id);
  }
  close_side_menu();
}
(function () {
  var m;
  m = document.getElementById("side_menu");
  if (window.addEventListener) {
    document.getElementById("main").addEventListener("click", close_all_menus, true);
    m.addEventListener("click", close_all_menus, true);
  } else if (window.attachEvent) {
    document.getElementById("main").attachEvent("onclick", close_all_menus);
    m.attachEvent("onclick", close_all_menus);
  }
  if ('ontouchstart' in window || 'onmsgesturechange' in window) {
    document.getElementById("side_menu_container2").style.overflowY = "scroll";
  }
})();

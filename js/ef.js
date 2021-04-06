//script for checking the html structure
var progress = 0;
var headStructure = Boolean(document.getElementById('head'));
var bodyStructure = Boolean(document.getElementById('body'));//Setting variables for body section

var navbarOverlay = Boolean(document.getElementById('overlay'));//setting variables for overlayed navbar structure
var closeButton = Boolean(document.getElementById('close-button'));
var navbarStructure = Boolean(document.getElementsByClassName('navbar'));//setting variables for navbar
var menuButton = Boolean(document.getElementById('open-menu'));
var timerStructure = Boolean(document.getElementById('timer'));
var layerParallax1 = Boolean(document.getElementById('layer1'));
var layerParallax2 = Boolean(document.getElementById('layer2'));
var layerParallax3 = Boolean(document.getElementById('layer3'));
var layerParallax4 = Boolean(document.getElementById('layer4'));
var videoTeaser = Boolean(document.getElementById('video-teaser'));
var videoMV = Boolean(document.getElementById('video-mv'));
var map = Boolean(document.getElementById('map-kahfi'));
var footerStructure = Boolean(document.getElementsByClassName('footer'));


if (headStructure == true) {
  progress = progress + 1;
}
if (bodyStructure == true) {
  progress = progress + 1;
}
if (navbarOverlay == true) {
  progress = progress + 1;
}
if (closeButton == true) {
  progress = progress + 1;
}
if (navbarStructure == true) {
  progress = progress + 1;
}
if (menuButton == true) {
  progress = progress + 1;
}
if (timerStructure == true) {
  progress = progress + 1;
}
if (layerParallax1 == true) {
  progress = progress + 1;
}
if (layerParallax2 == true) {
  progress = progress + 1;
}
if (layerParallax3 == true) {
  progress = progress + 1;
}
if (videoTeaser == true) {
  progress = progress + 1;
}
if (videoMV == true) {
  progress = progress + 1;
}
if (map == true) {
  progress = progress + 1;
}
if (footerStructure == true) {
  progress = progress + 1;
}

var timeto = progress * 500;

console.log(timeto);

//script for overlay loader
function MNCL() {
  $('.loader-overlay').addClass('remove-loader-overlay');
}
window.setTimeout("MNCL()",timeto);


//script for sticky navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= (sticky+100)) {
    navbar.classList.remove("remove-navanime")
    navbar.classList.add("navanime");
  } else if (window.pageYOffset <= (sticky+100) ) {
    navbar.classList.remove("navanime");
    navbar.classList.add("remove-navanime");
  }
}

//script for sticky navbar
window = function() {mbutton()};
var button = document.getElementsByClassName("menu-btn");
var xscroll = navbar.offsetTop;
function mbutton() {
  if (window.pageYOffset >= (xscroll+100)) {
    button.classList.add("menubuttonanime")
  } else if (window.pageYOffset <= (xscroll+100) ) {
    button.classList.remove("menubuttonanime");
  }
}


window.onload=function(){
    var hideNavbarO = document.getElementById("close-menu");
    hideNavbarO.addEventListener("click", remove);
    var showNavbarO = document.getElementById("open-menu");
    showNavbarO.addEventListener("click", show);
    var overlayBiruBg = document.getElementById("sekilas");
    overlayBiruBg.addEventListener("mouseover", overlayBiruBgChange);
    overlayBiruBg.addEventListener("mouseout", overlayBiruBgRemove);
    var overlayMerahBg = document.getElementById("pendaftaran");
    overlayMerahBg.addEventListener("mouseover", overlayMerahBgChange);
    overlayMerahBg.addEventListener("mouseout", overlayMerahBgRemove);
    var overlayPinkBg = document.getElementById("contact");
    overlayPinkBg.addEventListener("mouseover", overlayPinkBgChange);
    overlayPinkBg.addEventListener("mouseout", overlayPinkBgRemove);
    var overlayPutihBg = document.getElementById("book");
    overlayPutihBg.addEventListener("mouseover", overlayPutihBgChange);
    overlayPutihBg.addEventListener("mouseout", overlayPutihBgRemove);
    var aboutDiv = document.getElementById("content-about");
    aboutDiv.addEventListener("mouseover", aboutDivBesar);
    aboutDiv.addEventListener("mouseout", resetAboutMascott);
    var mascottDiv = document.getElementById("content-mascott");
    mascottDiv.addEventListener("mouseover", mascottDivBesar);
    mascottDiv.addEventListener("mouseout", resetAboutMascott);


    var lWrapper = document.getElementById('lomba-icon1');
    lWrapper.addEventListener("mouseover", buttonNaik);
}
function resetAboutMascott() {
  $(".content-mascott").removeClass("muncul");
  $(".content-mascott").removeClass("mengecil");
  $(".content-about").removeClass("mengecil");
  $(".content-about").removeClass("muncul");
}
function aboutDivBesar() {
  $(".content-mascott").removeClass("muncul");
  $(".content-mascott").addClass("mengecil");
  $(".content-about").removeClass("mengecil");
  $(".content-about").addClass("muncul");
}
function mascottDivBesar() {
  $(".content-about").removeClass("muncul");
  $(".content-about").addClass("mengecil");
  $(".contact-mascott").removeClass("mengecil");
  $(".content-mascott").addClass("muncul");
}

function overlayBiruBgChange() {
  $(".overlay-bg").removeClass("merah");
  $(".overlay-bg").removeClass("pink");
  $(".overlay-bg").removeClass("putih");
  $(".overlay-bg").addClass("biru");
}
function overlayBiruBgRemove() {
  $(".overlay-bg").removeClass("merah");
  $(".overlay-bg").removeClass("pink");
  $(".overlay-bg").removeClass("putih");
  $(".overlay-bg").removeClass("biru");
}
function overlayMerahBgChange() {
  $(".overlay-bg").removeClass("biru");
  $(".overlay-bg").removeClass("pink");
  $(".overlay-bg").removeClass("putih");
  $(".overlay-bg").addClass("merah");
}
function overlayMerahBgRemove() {
  $(".overlay-bg").removeClass("biru");
  $(".overlay-bg").removeClass("pink");
  $(".overlay-bg").removeClass("putih");
  $(".overlay-bg").removeClass("merah");
}
function overlayPinkBgChange() {
  $(".overlay-bg").removeClass("merah");
  $(".overlay-bg").removeClass("biru");
  $(".overlay-bg").removeClass("putih");
  $(".overlay-bg").addClass("pink");
}
function overlayPinkBgRemove() {
  $(".overlay-bg").removeClass("biru");
  $(".overlay-bg").removeClass("pink");
  $(".overlay-bg").removeClass("putih");
  $(".overlay-bg").removeClass("pink");
}
function overlayPutihBgChange() {
  $(".overlay-bg").removeClass("biru");
  $(".overlay-bg").removeClass("pink");
  $(".overlay-bg").removeClass("merah");
  $(".overlay-bg").addClass("putih");
}
function overlayPutihBgRemove() {
  $(".overlay-bg").removeClass("biru");
  $(".overlay-bg").removeClass("pink");
  $(".overlay-bg").removeClass("putih");
  $(".overlay-bg").removeClass("merah");
}


function show() {
    $(".overlay").removeClass("remove-navbar-overlay");
    $(".overlay").addClass("add-navbar-overlay");
}
function remove() {
  $(".overlay").removeClass("add-navbar-overlay");
  $(".overlay").addClass("remove-navbar-overlay");
}

function buttonNaik() {
  $(".item-lomba-button").addClass("buttonNaik");
}
var layer1 = document.getElementById('layer1');
var layer2 = document.getElementById('layer2');
var layer3 = document.getElementById('layer3');
var layer4 = document.getElementById('layer4');
var layer5 = document.getElementById('layer5');
var layer6 = document.getElementById('layer6');
scroll = window.pageYOffset;

document.addEventListener('scroll', function (e) {
var offset = window.pageYOffset;
scroll = offset;
layer1.style.bottom = scroll * 0.35 + 'px';
})

document.addEventListener('scroll', function (e) {
var offset = window.pageYOffset;
scroll = offset;
layer2.style.bottom = scroll * 0.3 + 'px';
})

document.addEventListener('scroll', function (e) {
var offset = window.pageYOffset;
scroll = offset;
layer3.style.bottom = scroll * 0.25 + 'px';
})

document.addEventListener('scroll', function (e) {
var offset = window.pageYOffset;
scroll = offset;
layer4.style.bottom = scroll * 0.2 + 'px';
})

document.addEventListener('scroll', function (e) {
var offset = window.pageYOffset;
scroll = offset;
layer5.style.bottom = scroll * 0.15 + 'px';
})

document.addEventListener('scroll', function (e) {
var offset = window.pageYOffset;
scroll = offset;
layer6.style.bottom = scroll * 0.025 + 'px';
})

var swiper = new Swiper('.swiper-container', {
      slidesPerView:3,
      centeredSlides:true,
      spaceBetween:-100,
      loop:true,
      hashNavigation: {
        watchState: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

var swiper = new Swiper('.swiper-container2', {
  slidesPerView:3,
  centeredSlides:true,
  grabCursor:true,
  loop:false,
  effect: 'coverflow',
  coverflowEffect:{
    rotate:0,
    stretch:0,
    depth:100,
    modifier:2,
    slideShadows:false
  },
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

//script for timer
var countDownDate = new Date("Aug 19, 2021 07:00:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('hari').innerHTML = days ;
  document.getElementById('jam').innerHTML = hours ;
  document.getElementById('menit').innerHTML = minutes ;
  document.getElementById('detik').innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Event Sudah Dimulai";
  }
}, 1000);

const btn = document.querySelector(".btn");
    btn.onclick = function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        setTimeout(() => {
            ripple.remove();
        }, 300);
    };

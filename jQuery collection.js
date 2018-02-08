// Post Toggle
jQuery(function($){$(document).ready(function(){
$(&quot;.toggle-trigger&quot;).click(function(){
$(this).toggleClass(&quot;active&quot;).next().slideToggle(&quot;slow&quot;);return false;});});});

// Popup Menu
    $(&#39;.popup-menu, .popup-search&#39;).click(function(){
        $(&#39;#blog-wrapper, #footer-wrapper, #attribution, a.back-to-top&#39;).addClass(&#39;blur&#39;);
    });
    $(&#39;i.popup-close&#39;).click(function(){
        $(&#39;#blog-wrapper, #footer-wrapper, #attribution, a.back-to-top&#39;).removeClass(&#39;blur&#39;);
    });
$(&quot;.popup-menu&quot;).click(
        function() {   
            $(&quot;.pop-menu&quot;).fadeIn(&#39;fast&#39;);
        }
    );
$(&quot;.pop-menu .popup-close&quot;).click(
        function() {   
            $(&quot;.pop-menu&quot;).fadeOut(&#39;fast&#39;);
        }
    );

$(&quot;.popup-search&quot;).click(
        function() {   
            $(&quot;.pop-search&quot;).fadeIn(&#39;fast&#39;);
        }
    );
$(&quot;.pop-search .popup-close&quot;).click(
        function() {   
            $(&quot;.pop-search&quot;).fadeOut(&#39;fast&#39;);
        }
    );
var getIphoneWindowHeight = function() {
  var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
  return window.innerHeight * zoomLevel;
};

// Sticky Menu
window.onscroll = function() {myFunction()};
var navbar = document.getElementById(&quot;page-navigation&quot;);
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset &gt;= sticky) {
    navbar.classList.add(&quot;sticky&quot;)
  } else {
    navbar.classList.remove(&quot;sticky&quot;);
  }
};

// Spoiler Button
$(function(){
  $(&quot;.spoiler&quot;).on(&quot;click&quot;, function(){
    $(this).parent().children(&quot;.spoiler-content&quot;).slideToggle(&quot;normal&quot;);
  });
});
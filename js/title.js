var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '(つ传送门⊂)Flag 被我藏好了~';
    clearTimeout(titleTime);
  } else {
    document.title = '(*°▽°)=被你 PWN 啦~';
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});

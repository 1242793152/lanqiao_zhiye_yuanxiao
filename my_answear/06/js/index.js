let rollTime; // 定义定时器变量用来清除定时器
let time = 0; // 转动次数
let speed = 300; // 转动时间间隔
let times; // 总转动次数

// 开始按钮点击事件后开始抽奖
$("#start").on("click", function () {
  $("#award").text(""); //清空中奖信息
  times = parseInt(Math.random() * (20 - 30 + 1) + 20, 10); // 定义总转动次数，随机20-30次
  console.log(times)
  // 每一次点击都清除上一次的点亮的元素
  $('li.active').removeClass('active')
  rolling();
});

// TODO：请完善此函数
// 获取所有的li元素
const lis = $('li:not(#start)')

function rolling() {
  time++; // 转动次数加1
  clearTimeout(rollTime);
  rollTime = setTimeout(() => {
    window.requestAnimationFrame(rolling); // 进行递归动画
  }, speed);
  //清除上一次点亮的元素
  lis[(time - 1) % 8].setAttribute('class', `li${(time-1) % 8 == 0 ? 8 : (time-1) % 8} `)
  //点亮下一个元素
  lis[time % 8].setAttribute('class', `li${time % 8 == 0 ? 8 : time % 8} active`)

  // time > times 转动停止
  if (time > times) {
    clearInterval(rollTime);
    $("#award").text(`恭喜您抽中了${lis[time % 8].innerText}!!!`);
    //当用户再一次点亮的时候，应该从一个亮的位置开始往下面走
    time = time % 8;
    return;
  }
}

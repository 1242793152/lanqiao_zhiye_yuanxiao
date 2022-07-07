/*TODO：请补充代码*/
var current_form, next_form, previous_form; // 表单域
// 获取所有的li元素
const lis = document.querySelectorAll('li')
// console.log(lis)
// 点击下一页的按钮
$(".next").click(function () {
  current_form = $(this).parent();
  // console.log(current_form[0])
  current_form[0].style.display = 'none'
  let id = current_form[0].id
  let startnum = (id.match(/\d/))[0] *1
  // console.log(typeof(startnum))
  if(startnum<=2){
  //  console.log( document.querySelector(`#form${startnum+1}`))
   document.querySelector(`#form${startnum+1}`).style.display = 'block'
   lis[startnum].className = 'active'
  }


});
// 点击返回按钮
$(".previous").click(function () {
  current_form = $(this).parent();
  current_form[0].style.display = 'none'
  let id = current_form[0].id
  let startnum = (id.match(/\d/))[0] *1
  console.log(typeof(startnum),startnum,id)
  if(startnum>1){
   console.log( document.querySelector(`#form${startnum+1}`))
   document.querySelector(`#form${startnum-1}`).style.display = 'block'
   lis[startnum-1].className = ''
  }
});
// 点击提交按钮
$(".submit").click(function () {
  alert("提交成功");
});

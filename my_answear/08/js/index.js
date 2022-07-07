/**
 * 封装函数，传入任意数量的数组，返回长度最大的数组集合
 */
const getMaxArrays = (...arrays) => {
  // TODO：待补充代码
  let outputarr = []
  let maxlength = 0

// 什么都不传入
if(arrays.length==0)return []
// 使用 Array.isArray 或者 Object.prototype.toString.call

// 传入的存在不是数组元素
for(let key in arrays){
  if(!Array.isArray(arrays[key])){
    return []
  }
}
 
  /*
  第一种情况存和第二种情况一起考虑以及第三种情况一起考虑
  */
  for(let i =0;i<arrays.length;i++){
    if(arrays[i].length>maxlength){
      outputarr[0] = arrays[i]
      maxlength = arrays[i].length     
      
    }
    else if(arrays[i].length == maxlength){
      outputarr.push(arrays[i])
      
    }
    if(i==arrays.length-1){
      console.log(outputarr.length)
      if(outputarr.length === arrays.length){
        return []
      }
      return outputarr
    }
  }
    

}
module.exports = getMaxArrays; //请勿删除

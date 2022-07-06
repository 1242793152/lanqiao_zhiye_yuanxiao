/**
 * 封装函数，传入任意数量的数组，返回长度最大的数组集合
 */
let arr = [[]]
let arr1 = [[1,2,3]]
// console.log(arr1,arr1[0][0],)
// console.log(typeof(arr))

// console.log(arr.flat())
const getMaxArrays = (...arrays) => {
  // TODO：待补充代码
  // console.log(arrays)
  let maxnum = 0
  let outputarr = []
  let maxlength = 0

  
  /*
  什么都不传
  */ 
  // if(arrays.length ==0){
  //   return outputarr
  // //只传入参数，不传入数组，即只是一维数组 
  // }else if(
    
  // )

  /*
  第一种情况存和第二种情况一起考虑
  */
  for(let i =0;i<arrays.length;i++){
    if(arrays[i].length>maxlength){
      outputarr[0] = arrays[i]
      maxlength = arrays[i].length     
    }else if(arrays[i].length == maxlength){
      outputarr.push(arrays[i])
    }
    if(i==arrays.length){
      return outputarr
    }
  }
    


};
module.exports = getMaxArrays; //请勿删除

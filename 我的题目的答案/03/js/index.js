function formSubmit() {
  // TODO：待补充代码
  let quescontentContainer = document.querySelector('#quescontent')
  console.log(quescontentContainer)
  // quescontentContainer.style.display = 'none'
  var showResult = document.querySelector('#result')
  // @ts-ignore
  console.log(showResult,showResult.style.display)
  // console.log(showResult.innerText)
  
  
  let height = document.querySelector('#height').value
  let weight = document.querySelector('#weight').value
  
  let gender  = document.getElementsByName('male')
  
  let genderChose = ''
  
  for(let i=0;i<gender.length;i++){
    if(gender[i].checked){
      genderChose = gender[i].value==='0'?'男':'女'
    }
  }
  console.log(genderChose)
  
  let placeArr = []
  let place = document.getElementsByName('place')
  console.log(place)
  for(let i=0;i<place.length;i++){
    if(place[i].checked){
      // console.log(place[i].value)
      switch(place[i].value){
        case "1":
          // console.log('公园')
          placeArr.push('公园')
          break;
          case "2":
            placeArr.push('健身房')
            break;
            case "3":
              placeArr.push('健身房')
              break;
            }
          }
        }
        console.log(placeArr)
        
      
   let str = `身高${height},体重${weight}kg,性别${genderChose}`
   let placeStr = ''
   for(let i =0;i<placeArr.length;i++){
    if(placeArr.length==1)str += `,会在${placeArr[i]}锻炼`
    else{
      placeStr += placeArr[i]+'、'
    }
   }
   console.log(placeStr,placeStr.substring(0,placeStr.length-2))
   placeStr = placeStr.substring(0,placeStr.length-2)
   str += `,会在${placeStr}锻炼.`

  // console.log(height,weight,genderChose)

  // 隐藏选项
  quescontentContainer.style.display = 'none'
  // 显示数字
  showResult.style.display = "block"
  showResult.innerText = showResult.innerText + "\n"+ str

}


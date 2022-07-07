let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数

// TODO：待补充代码
let totalData = []
let showData = []

// 分页内容容器
let showpage = document.querySelector('#pagination')
// 大容器
let showListContent = document.querySelector('#list')

// axios获取数据
axios.get(`/my_answear/10/js/carlist.json`).then(res => {
  maxPage = Math.ceil(res.data.length / 5)
  totalData = JSON.parse(JSON.stringify(res.data))
  console.log(totalData)
  showData = totalData.slice((pageNum - 1) * 5, pageNum * 5)
  changeContent(showData)
})

function changeContent(showData) {
  
  showListContent.innerHTML = ''

  let showList = document.createElement('div')
  showList.setAttribute('class', 'list-group')

  for (let i in showData) {
    showList.innerHTML += `
    <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${showData[i].name}</h5>
      <small>${(showData[i].price / 100)}.00元</small>
    </div>
    <p class="mb-1">
    ${showData[i].description}
    </p>
  </a>
    `
    showListContent.appendChild(showList)
  }

  showpage.innerText = `共${maxPage}页，当前${pageNum}页`
}


// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
  if (pageNum == 1) {
    return
  }
  pageNum--
  if (pageNum == 1) {
    prev.setAttribute('class', 'page-item disabled')
  }
  next.setAttribute('class', 'page-item')
  showData = totalData.slice((pageNum - 1) * 5, pageNum * 5)
  changeContent(showData)
};

// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  if(pageNum == maxPage)return
  // TODO：待补充代码
  pageNum++
  if (pageNum == maxPage) {
    next.setAttribute('class', 'page-item disabled')
  }
  prev.setAttribute('class', 'page-item')
  showData = totalData.slice((pageNum - 1) * 5, pageNum * 5)
  changeContent(showData)
};

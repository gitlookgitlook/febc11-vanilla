import axios from "axios" // axios라는 라이브러리를 가져오는 코드

// API 서버에서 게시물 목록 조회
async function getList() {
  const res = await axios.get("https://11.fesp.shop/posts", {
    params: { type: "test", page: 2, limit: 5 },
  })
  console.log(res)
  return res.data
}

// 조회한 게시물 목록으로 화면에 출력
async function renderList() {
  const list = await getList()
  const liList = list.item.map((post) => {
    return `
    <li>
     <h2>${post._id} ${post.title}</h2>
     <span>조회수: ${post.views} 날짜 : ${post.createdAt}</span>
     <p>${post.content}</p>
    </li>
    <hr>
    `
  })
  document.querySelector("#postList").innerHTML = liList.join("")
  // .join('')추가 : map은 배열을 반환하므로, 이를 문자열로 결합해야 함 (작성안하면, 배열이라 ','가 출력됨 )
}
renderList()

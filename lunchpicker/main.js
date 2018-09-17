$(document).ready(function() {
  // menu內容
  const list = ['Cousins', 'Durant', 'Green', 'Iguodala', 'Livingston', 'Cook', 'Bell', 'Thompson', 'McCaw', 'Curry'];
  // 組li內容
  let liHtml = '';
  // 組內容
  list.forEach(element => {
    liHtml += `<li>${element}</li>`;
  });
  // 塞元素
  $("ul").append(liHtml);
  
  // 觸發
  $("input").click(() =>
  {
    // 複製一份list
    let renderList = [...list];
    
    // 要刪除的index
    let sliceNum = Math.floor(Math.random()*5);
    
    // 刪除
    renderList.splice(sliceNum, 5);
    
    $("h1").text('勇士先發名單一定要curry：'+ renderList.join(" * "));
  });
});
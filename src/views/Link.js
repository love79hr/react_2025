
const Link = () => {
  
  document.querySelectorAll('a[href^="#"]').forEach((el)=>{
    el.addEventListener("click", function(e){
      e.preventDefault();

      const targetId = this.getAttribute("href");
      // 네비에서 클릭한 a 요소의 heref 속성값을 targetId에 저장
      
      const targetElement = document.querySelector(targetId);
      // targetId에 해당하는 요소를 targetElement에 저장

      if(targetElement){
        targetElement.scrollIntoView({behavior: "smooth"});
        // 부드럽게 스크롤 이동
      }
    });
  });
}

export default Link;

// a[heref^="#"] : 속성 선택자
// ^ : 시작하는
// $ : 끝나는
// * : 포함하는
// ~ : 인접한
// | : 하이픈으로 구분된

// a[href^="#"] : href 속성이 #으로 시작하는 모든 a 요소를 선택
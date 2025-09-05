// ========================================
// 모든 페이지 공통 적용 JavaScript ==========
// ========================================

// 로그인 팝업창 요소들
const loginBtn = document.querySelector('.login_btn'); // 로그인 버튼 요소
const loginPopup = document.querySelector('.login_popup'); // 로그인 팝업창 요소
const loginCloseBtn = loginPopup?.querySelector('.close_btn'); // 로그인 팝업창 닫기 버튼 요소

// 로그인 팝업창 열기
if (loginBtn) { // 로그인 버튼이 존재하는 경우에만 실행
  loginBtn.addEventListener('click', function () { // 클릭 이벤트 리스너 추가
    loginPopup.classList.add('active'); // 팝업창에 active 클래스 추가
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  });
}

// 로그인 팝업창 닫기
if (loginCloseBtn) { // 닫기 버튼이 존재하는 경우에만 실행
  loginCloseBtn.addEventListener('click', function () { // 클릭 이벤트 리스너 추가
    loginPopup.classList.remove('active'); // 팝업창에 active 클래스 제거해서 숨김
    document.body.style.overflow = ''; // 스크롤 복원
  });
}

// 로그인 팝업창 외부 클릭 시 닫기
if (loginPopup) { // 팝업창이 존재하는 경우에만 실행
  loginPopup.addEventListener('click', function (e) { // 클릭 이벤트 리스너 추가
    if (e.target === loginPopup) { // 클릭된 요소가 팝업창 자체인 경우
      loginPopup.classList.remove('active'); // 팝업창에 active 클래스 제거해서 숨김
      document.body.style.overflow = ''; // 스크롤 복원
    }
  });
}




// ========================================
// 메인 페이지 카테고리별 이미지 데이터 ========
// ========================================

// 카테고리별 이미지 데이터 객체 정의
const categoryImages = { 
  '조명 / 캔들': [ // 조명 / 캔들 카테고리 이미지 데이터
    {
      main: 'https://github.com/love79hr/haru_e/blob/main/images/item_1.png?raw=true', // 메인 이미지 주소
      thumbnails: [
        'https://github.com/love79hr/haru_e/blob/main/images/item_1.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_2.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_3.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_4.png?raw=true' // 썸네일 이미지 주소
      ]
    }
  ],
  '장식 데코': [ // 장식 데코 카테고리 이미지 데이터
    {
      main: 'https://github.com/love79hr/haru_e/blob/main/images/item_5.png?raw=true', // 메인 이미지 주소
      thumbnails: [
        'https://github.com/love79hr/haru_e/blob/main/images/item_5.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_6.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_7.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_8.png?raw=true' // 썸네일 이미지 주소
      ]
    }
  ],
  '패브릭 소품': [ // 패브릭 소품 카테고리 이미지 데이터
    {
      main: 'https://github.com/love79hr/haru_e/blob/main/images/item_9.png?raw=true', // 메인 이미지 주소
      thumbnails: [
        'https://github.com/love79hr/haru_e/blob/main/images/item_9.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_10.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_11.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_12.png?raw=true' // 썸네일 이미지 주소
      ]
    }
  ],
  '플라워 / 그린': [ // 플라워 / 그린 카테고리 이미지 데이터
    {
      main: 'https://github.com/love79hr/haru_e/blob/main/images/item_13.png?raw=true', // 메인 이미지 주소
      thumbnails: [
        'https://github.com/love79hr/haru_e/blob/main/images/item_13.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_14.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_15.png?raw=true', // 썸네일 이미지 주소
        'https://github.com/love79hr/haru_e/blob/main/images/item_16.png?raw=true' // 썸네일 이미지 주소
      ]
    }
  ]
};

// Best Item 이미지 갤러리 기능 초기화
document.addEventListener('DOMContentLoaded', function () { // DOM 로드 완료 시 실행
  const bItems = document.querySelectorAll('.b_item'); // 썸네일 이미지 요소들 선택
  const mainImage = document.querySelector('.main_image img'); // 메인 이미지 요소 선택
  const tabButtons = document.querySelectorAll('.item_category ul li a'); // 탭 버튼들 선택
  const tabItems = document.querySelectorAll('.item_category ul li'); // 탭 아이템들 선택

  // 썸네일 클릭 이벤트 처리
  bItems.forEach(item => { // 썸네일 이미지 요소들 반복
    item.addEventListener('click', function () { // 클릭 이벤트 리스너 추가
      // 모든 썸네일에서 active 클래스 제거
      bItems.forEach(bItem => bItem.classList.remove('active'));

      // 클릭된 썸네일에 active 클래스 추가
      this.classList.add('active');

      // 메인 이미지 변경
      const newImageSrc = this.getAttribute('data-image'); // 클릭된 썸네일의 data-image 속성 값 가져오기
      if (mainImage && newImageSrc) { // 메인 이미지와 새 이미지 URL이 존재하는 경우
        // 부드러운 전환 효과
        mainImage.style.opacity = '0'; // 투명도 0으로 설정
        mainImage.style.transform = 'scale(1)'; // 크기 초기화

        setTimeout(() => {
          mainImage.src = newImageSrc; // 메인 이미지 소스 변경
          mainImage.style.opacity = '1'; // 투명도 1로 설정
          mainImage.style.transform = 'scale(1.02)'; // 살짝 확대 효과
        }, 200); // 200ms 후 실행
      }
    });
  });

  // 탭 메뉴 클릭 이벤트
  tabButtons.forEach(button => { // 각 탭 버튼에 대해 반복
    button.addEventListener('click', function (e) { // 클릭 이벤트 리스너 추가
      e.preventDefault(); // 기본 동작 방지

      // 모든 탭에서 active 클래스 제거
      tabItems.forEach(item => item.classList.remove('on')); // 모든 탭에서 active 클래스 제거

      // 클릭된 탭에 active 클래스 추가
      this.parentElement.classList.add('on'); // 클릭된 탭에 active 클래스 추가

      // 탭 텍스트에 따른 이미지 변경
      const tabText = this.querySelector('p').textContent; // 클릭된 탭의 텍스트 가져오기
      changeImagesByCategory(tabText); // 카테고리별 이미지 변경 함수 호출
    });
  });

  // 페이지 로드 시 첫 번째 탭 활성화
  if (tabItems.length > 0) { // 탭 아이템이 존재하는 경우
    tabItems[0].classList.add('on'); // 첫 번째 탭에 on 클래스 추가
    const firstTabText = tabButtons[0].querySelector('p').textContent; // 첫 번째 탭 텍스트 가져오기
    changeImagesByCategory(firstTabText); // 첫 번째 탭의 이미지로 변경 함수 호출
  }
});

// 카테고리별 이미지 변경 함수
function changeImagesByCategory(category) { // 카테고리명을 매개변수로 받음
  const mainImage = document.querySelector('.main_image img'); // 메인 이미지 요소 선택
  const bItems = document.querySelectorAll('.b_item'); // 썸네일 이미지 요소들 선택

  if (categoryImages[category] && categoryImages[category][0]) { // 카테고리별 이미지 데이터가 존재하는 경우
    const images = categoryImages[category][0]; // 카테고리별 이미지 데이터 가져오기

    // 메인 이미지 변경
    if (mainImage) { // 메인 이미지 요소가 존재하는 경우
      mainImage.style.opacity = '0'; // 투명도 0으로 설정
      mainImage.style.transform = 'scale(0.95)';// 살짝 축소 효과

      setTimeout(() => { // 200ms 후 실행
        mainImage.src = images.main; // 메인 이미지 소스 변경
        mainImage.style.opacity = '1'; // 투명도 1로 설정
        mainImage.style.transform = 'scale(1)'; // 크기 초기화
      }, 200);
    }

    // 썸네일 이미지들 변경
    bItems.forEach((item, index) => {  // 각 썸네일에 대해 반복
      if (images.thumbnails[index]) { // 해당 인덱스의 썸네일이 존재하는 경우
        const img = item.querySelector('img'); // 썸네일 내부 이미지 요소 선택
        img.src = images.thumbnails[index]; // 썸네일 이미지 소스 변경
        item.setAttribute('data-image', images.thumbnails[index]); // data-image 속성 업데이트
      }
    });

    // 첫 번째 썸네일을 활성화
    bItems.forEach(item => item.classList.remove('active')); // 모든 썸네일에서 active 클래스 제거
    bItems[0].classList.add('active'); // 첫 번째 썸네일에 active 클래스 추가
  }
}

// 이벤트 바로가기 버튼 마우스 따라다니기 기능
document.addEventListener('DOMContentLoaded', function () { // DOM 로드 완료 시 실행
  const eventCont = document.querySelector('.event_cont'); // 이벤트 컨테이너 요소 선택
  const shortcutBtn = document.querySelector('.event_shortcut_btn'); // 이벤트 바로가기 버튼 요소 선택

  if (eventCont && shortcutBtn) { // 이벤트 컨테이너와 이벤트 바로가기 버튼 요소가 존재하는 경우
    let isHovering = false; // 마우스가 영역에 들어왔는지 여부
    let isButtonHovering = false; // 마우스가 버튼에 들어왔는지 여부

    // 마우스가 event_cont 영역에 들어올 때
    eventCont.addEventListener('mouseenter', function () { // 마우스 진입 이벤트 리스너 추가
      isHovering = true; // 마우스가 영역에 들어왔음을 표시
      if (!isButtonHovering) { // 버튼에 마우스가 없는 경우
        shortcutBtn.classList.add('show'); // 버튼에 show 클래스 추가
      }
    });

    // 마우스가 event_cont 영역을 벗어날 때
    eventCont.addEventListener('mouseleave', function () { // 마우스 벗어남 이벤트
      isHovering = false; // 마우스가 영역에서 벗어났음을 표시
      if (!isButtonHovering) { // 이벤트 영역에 마우스가 없는 경우
        shortcutBtn.classList.remove('show'); // 버튼에 show 클래스 제거
      }
    });

    // 버튼에 마우스가 들어올 때
    shortcutBtn.addEventListener('mouseenter', function () {  // 마우스 진입 이벤트
      isButtonHovering = true; // 버튼에 마우스가 들어왔음을 표시
      shortcutBtn.classList.add('show'); // 버튼에 show 클래스 추가
    });

    // 버튼에서 마우스가 벗어날 때
    shortcutBtn.addEventListener('mouseleave', function () { // 마우스 벗어남 이벤트
      isButtonHovering = false; // 버튼에 마우스가 벗어났음을 표시
      if (!isHovering) { // 이벤트 영역에 마우스가 없는 경우
        shortcutBtn.classList.remove('show'); // 버튼에 show 클래스 제거
      }
    });

    // 마우스 움직임 감지
    eventCont.addEventListener('mousemove', function (e) { // 마우스 움직임 이벤트
      if (isHovering && !isButtonHovering) { // 이벤트 영역에 마우스가 있고 버튼에 마우스가 없는 경우
        // 마우스 위치 계산
        const rect = eventCont.getBoundingClientRect(); // 이벤트 영역 박스 영역 계산
        const mouseX = e.clientX - rect.left; // 마우스 X 위치 계산
        const mouseY = e.clientY - rect.top; // 마우스 Y 위치 계산

        // 버튼 위치 업데이트 (마우스 커서 정중앙에 위치)
        const btnRect = shortcutBtn.getBoundingClientRect();
        const offsetX = -btnRect.width / 2; // 버튼 너비의 절반만큼 왼쪽으로
        const offsetY = -btnRect.height / 2; // 버튼 높이의 절반만큼 위로

        const newX = mouseX + offsetX; // 새로운 X 위치 계산
        const newY = mouseY + offsetY; // 새로운 Y 위치 계산

        // 화면 경계 체크 (버튼이 이벤트 영역을 벗어나지 않도록)
        const maxX = rect.width - btnRect.width - 10; // 최대 X 위치 계산
        const maxY = rect.height - btnRect.height - 10; // 최대 Y 위치 계산

        const finalX = Math.max(10, Math.min(newX, maxX)); // 최종 X 위치 계산
        const finalY = Math.max(10, Math.min(newY, maxY)); // 최종 Y 위치 계산

        // 버튼 위치 설정
        shortcutBtn.style.left = finalX + 'px'; // 버튼 X 위치 설정
        shortcutBtn.style.top = finalY + 'px'; // 버튼 Y 위치 설정
        shortcutBtn.style.transform = 'none'; // 기존 transform 제거
      }
    });

    // 버튼 클릭 이벤트
    shortcutBtn.addEventListener('click', function (e) { // 클릭 이벤트 리스너 추가
      e.preventDefault(); // 기본 동작 방지
      // 여기에 이벤트 페이지로 이동하는 로직 추가
      alert('이벤트 페이지로 이동합니다!'); // 이벤트 페이지로 이동하는 알림 메시지 출력
      // 예: window.location.href = '/event-page'; // 이벤트 페이지로 이동하는 로직 추가
    });
  }
});

// Swiper 슬라이더 초기화
document.addEventListener('DOMContentLoaded', function() { // DOM 로드 완료 시 실행
  // Swiper 요소가 있는 페이지에서만 실행
  const swiperElement = document.querySelector('.review_swiper'); // Swiper 요소 선택
  if (swiperElement) { // Swiper 요소가 존재하는 경우
    console.log('Swiper 초기화 시작'); // Swiper 초기화 시작 메시지 출력
    
    // Swiper CDN이 로드되었는지 확인
    if (typeof Swiper === 'undefined') { // Swiper 라이브러리가 로드되지 않았는지 확인
      console.error('Swiper 라이브러리가 로드되지 않았습니다'); // Swiper 라이브러리가 로드되지 않았음을 알림 메시지 출력
      return; // 함수 종료
    }
    
    try {
      const reviewSwiper = new Swiper('.review_swiper', { // Swiper 인스턴스 생성
        slidesPerView: 1, // 한 번에 보여지는 슬라이드 개수
        spaceBetween: 125, // 슬라이드 간 간격
        centeredSlides: true, // 센터 슬라이드 효과
        loop: true, // 반복 재생 효과
        autoplay: { // 자동 재생 설정
          delay: 5000, // 자동 재생 지연 시간
          disableOnInteraction: false,// 사용자 상호작용 후에도 자동 재생 계속
        },
        pagination: { // 페이지네이션 설정
          el: '.swiper-pagination',
          clickable: true, // 클릭 가능하게 설정
          type: 'bullets', // 불릿 타입으로 설정
          renderBullet: function (index, className) { // 블릿 버튼 렌더링 함수
            return '<span class="' + className + '"></span>'; // 블릿 버튼 렌더링
          },
        },
        navigation: { // 네비게이션 설정
          nextEl: '.swiper-button-next', // 다음 버튼 요소
          prevEl: '.swiper-button-prev', // 이전 버튼 요소
        },
      });
      
      console.log('Swiper 초기화 완료'); // Swiper 초기화 완료 메시지 출력
      
      // Swiper 인스턴스 확인
      if (reviewSwiper) { // Swiper 인스턴스가 존재하는 경우
        console.log('Swiper 인스턴스 생성됨'); // Swiper 인스턴스 생성됨 메시지 출력
        console.log('페이지네이션 요소:', reviewSwiper.pagination.el); // 페이지네이션 요소 출력
        
        // 페이지네이션 표시
        setTimeout(() => { // 300ms 후 실행
          const pagination = document.querySelector('.swiper-pagination'); // 페이지네이션 요소 선택
          
          if (pagination) { // 페이지네이션 요소가 존재하는 경우
            pagination.style.display = 'block'; // 표시 설정
            pagination.style.opacity = '1'; // 투명도 설정
            pagination.style.visibility = 'visible'; // 가시성 설정
            console.log('페이지네이션 스타일 적용됨'); // 스타일 적용 로그
          }
        }, 300);
      }
    } catch (error) { // 에러 발생 시
      console.error('Swiper 초기화 오류:', error); // Swiper 초기화 오류 메시지 출력
    }
  } else { // Swiper 요소가 존재하지 않는 경우
    console.log('Swiper 요소를 찾을 수 없습니다 - 이 페이지에서는 Swiper를 사용하지 않습니다.');  // 로그 출력
  }
});



// ========================================
// 모든 페이지 공통 적용 JavaScript ==========
// ========================================

// bar_menu 클릭 이벤트 - 서브메뉴 토글
document.addEventListener('DOMContentLoaded', function () {
  const barMenu = document.querySelector('.bar_menu a');
  const subMenu = document.querySelector('.bar_menu .sub_menu');

  if (barMenu && subMenu) {
    barMenu.addEventListener('click', function (e) {
      e.preventDefault();
      subMenu.classList.toggle('active');
    });

    // 메뉴 외부 클릭 시 메뉴 닫기
    document.addEventListener('click', function (e) {
      if (!barMenu.contains(e.target) && !subMenu.contains(e.target)) {
        subMenu.classList.remove('active');
      }
    });

    // ESC 키로 메뉴 닫기
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        subMenu.classList.remove('active');
      }
    });
  }

  // 검색 팝업창 기능
  const searchBtn = document.querySelector('.search_btn');
  const searchPopup = document.querySelector('.search_popup');
  const closeBtn = document.querySelector('.close_btn');
  const searchInput = document.querySelector('.search_input');
  const searchSubmit = document.querySelector('.search_submit');

  if (searchBtn && searchPopup) {
    // 검색 버튼 클릭 시 팝업 열기
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      searchPopup.classList.add('active');
      // 팝업이 열린 후 검색 입력창에 포커스
      setTimeout(() => {
        searchInput.focus();
      }, 300);
    });

    // 닫기 버튼 클릭 시 팝업 닫기
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        searchPopup.classList.remove('active');
        searchInput.value = '';
      });
    }

    // 검색 제출 버튼 클릭 시
    if (searchSubmit) {
      searchSubmit.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          // 여기에 실제 검색 로직 추가
          console.log('검색어:', searchTerm);
          alert(`"${searchTerm}" 검색 결과를 보여드립니다!`);
          searchPopup.classList.remove('active');
          searchInput.value = '';
        }
      });
    }

    // 팝업 외부 클릭 시 닫기
    searchPopup.addEventListener('click', function (e) {
      if (e.target === searchPopup) {
        searchPopup.classList.remove('active');
        searchInput.value = '';
      }
    });

    // ESC 키로 팝업 닫기
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && searchPopup.classList.contains('active')) {
        searchPopup.classList.remove('active');
        searchInput.value = '';
      }
    });

    // Enter 키로 검색 실행
    if (searchInput) {
      searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          const searchTerm = searchInput.value.trim();
          if (searchTerm) {
            console.log('검색어:', searchTerm);
            alert(`"${searchTerm}" 검색 결과를 보여드립니다!`);
            searchPopup.classList.remove('active');
            searchInput.value = '';
          }
        }
      });
    }
  }
});


// 장바구니 팝업창 요소들
const cartBtn = document.querySelector('.cart_btn');
const cartPopup = document.querySelector('.cart_popup');
const cartCloseBtn = cartPopup?.querySelector('.close_btn');

// 장바구니 팝업창 열기
if (cartBtn) {
  cartBtn.addEventListener('click', function () {
    cartPopup.classList.add('active');
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  });
}

// 장바구니 팝업창 닫기
if (cartCloseBtn) {
  cartCloseBtn.addEventListener('click', function () {
    cartPopup.classList.remove('active');
    document.body.style.overflow = ''; // 스크롤 복원
  });
}

// 장바구니 팝업창 외부 클릭 시 닫기
if (cartPopup) {
  cartPopup.addEventListener('click', function (e) {
    if (e.target === cartPopup) {
      cartPopup.classList.remove('active');
      document.body.style.overflow = ''; // 스크롤 복원
    }
  });
}

// ========================================
// 장바구니 상품 관리 기능 구현
// ========================================

// 장바구니 수량 조절 및 상품 관리 기능
document.addEventListener('DOMContentLoaded', function () {
  // 장바구니 내부 기능 관련 DOM 요소들을 선택
  const qtyBtns = document.querySelectorAll('.qty_btn');           // 수량 증가/감소 버튼들
  const removeBtns = document.querySelectorAll('.remove_btn');    // 상품 삭제 버튼들
  const cartClearBtn = document.querySelector('.cart_clear');     // 장바구니 비우기 버튼
  const cartCheckoutBtn = document.querySelector('.cart_checkout'); // 주문하기 버튼

  // ========================================
  // 수량 조절 기능 (증가/감소)
  // ========================================
  qtyBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // 현재 상품의 수량 표시 요소를 찾기
      const quantitySpan = this.parentNode.querySelector('.quantity');
      let quantity = parseInt(quantitySpan.textContent);

      // 버튼 클래스에 따라 수량 증가 또는 감소
      if (this.classList.contains('plus')) {
        quantity++; // 수량 증가
      } else if (this.classList.contains('minus') && quantity > 1) {
        quantity--; // 수량 감소 (최소 1개 유지)
      }

      // 수량 업데이트 및 총계 재계산
      quantitySpan.textContent = quantity;
      updateCartSummary(); // 장바구니 요약 정보 업데이트
    });
  });

  // ========================================
  // 개별 상품 삭제 기능
  // ========================================
  removeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // 클릭된 삭제 버튼이 속한 상품 아이템을 찾기
      const cartItem = this.closest('.cart_item');
      cartItem.remove(); // 상품 아이템을 DOM에서 제거

      // 장바구니 상태 업데이트
      updateCartSummary(); // 총계 재계산
      checkEmptyCart();    // 빈 장바구니 상태 체크
    });
  });

  // ========================================
  // 장바구니 전체 비우기 기능
  // ========================================
  if (cartClearBtn) {
    cartClearBtn.addEventListener('click', function () {
      // 모든 상품 아이템을 찾아서 제거
      const cartItems = document.querySelectorAll('.cart_item');
      cartItems.forEach(item => item.remove());

      // 장바구니 상태 업데이트
      updateCartSummary(); // 총계 재계산
      checkEmptyCart();    // 빈 장바구니 상태 체크
    });
  }

  // ========================================
  // 주문하기 기능
  // ========================================
  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', function () {
      alert('주문 페이지로 이동합니다.');
      // TODO: 여기에 실제 주문 페이지 이동 로직 추가
      // 예: window.location.href = '/checkout';
    });
  }

  // ========================================
  // 장바구니 요약 정보 업데이트 함수
  // ========================================
  function updateCartSummary() {
    // 모든 상품의 수량을 가져와서 총 상품수 계산
    const quantities = document.querySelectorAll('.quantity');
    const totalItems = Array.from(quantities).reduce((sum, qty) => sum + parseInt(qty.textContent), 0);

    // 총 상품수 표시 업데이트
    const totalInfo = document.querySelectorAll('.total_info strong');
    if (totalInfo[0]) totalInfo[0].textContent = totalItems + '개';

    // ========================================
    // 총 금액 계산 로직
    // ========================================
    let totalPrice = 0;
    const cartItems = document.querySelectorAll('.cart_item');

    cartItems.forEach(item => {
      // 상품 가격에서 숫자만 추출 (원, 쉼표 등 제거)
      const priceText = item.querySelector('.item_price').textContent;
      const price = parseInt(priceText.replace(/[^0-9]/g, ''));

      // 상품 수량 가져오기
      const quantity = parseInt(item.querySelector('.quantity').textContent);

      // 상품별 총액 = 가격 × 수량
      totalPrice += price * quantity;
    });

    // 총 금액 표시 업데이트 (천 단위 쉼표 포함)
    if (totalInfo[1]) totalInfo[1].textContent = totalPrice.toLocaleString() + '원';
  }

  // ========================================
  // 빈 장바구니 상태 체크 및 UI 업데이트 함수
  // ========================================
  function checkEmptyCart() {
    // 장바구니 관련 UI 요소들을 선택
    const cartItems = document.querySelector('.cart_items');
    const cartEmpty = document.querySelector('.cart_empty');
    const cartSummary = document.querySelector('.cart_summary');
    const cartActions = document.querySelector('.cart_actions');
  
    // 상품이 없는 경우
    if (cartItems && cartItems.children.length === 0) {
      if (cartEmpty) cartEmpty.style.display = 'block';
      if (cartSummary) cartSummary.style.display = 'none';
      if (cartActions) cartActions.style.display = 'none';
    } else {
      // 상품이 있는 경우
      if (cartEmpty) cartEmpty.style.display = 'none';
      if (cartSummary) cartSummary.style.display = 'block';
      if (cartActions) cartActions.style.display = 'flex';
    }
  }

  // ========================================
  // 초기 상태 설정
  // ========================================
  checkEmptyCart(); // 페이지 로드 시 장바구니 상태 체크
});



// ========================================
// Shop 페이지 전용 script ==================
// ========================================

// Shop 페이지 전용 변수들
let shopTopElement = null;
let shopHeaderElement = null;
let shopNavElement = null;

// Shop 페이지 전용 요소 초기화
function initShopElements() {
  shopTopElement = document.getElementById('top');
  shopHeaderElement = document.getElementById('header');
  shopNavElement = document.querySelector('.shop_nav');
  
  console.log('Shop 요소 초기화:', {
    top: shopTopElement,
    header: shopHeaderElement,
    shopNav: shopNavElement
  });
}

// 페이지 로드 시 shop nav 초기 위치 설정
function setShopNavPosition() {
  // 요소가 없으면 다시 초기화 시도
  if (!shopNavElement || !shopHeaderElement || !shopTopElement) {
    initShopElements();
  }
  
  if (shopNavElement && shopHeaderElement && shopTopElement) {
    // top 영역과 헤더 높이를 모두 계산
    const topHeight = shopTopElement.offsetHeight;
    const headerHeight = shopHeaderElement.offsetHeight;
    const totalHeight = topHeight + headerHeight;
    
    // top + 헤더 높이만큼 margin-top 설정
    shopNavElement.style.marginTop = totalHeight + 'px';
    console.log('Shop - Top height:', topHeight, 'Header height:', headerHeight, 'Total margin-top:', shopNavElement.style.marginTop);
  } else {
    console.error('Shop 요소를 찾을 수 없습니다:', {
      shopNav: shopNavElement,
      header: shopHeaderElement,
      top: shopTopElement
    });
  }
}

// Shop 페이지 전용 초기화 함수
function initShopPage() {
  initShopElements();
  setShopNavPosition();
}

// Shop 페이지 네비게이션 기능
function initShopNavigation() {
  // 요소 초기화 먼저 실행
  initShopElements();
  
  // shop nav 클릭 이벤트
  const navBoxes = document.querySelectorAll('.shop_nav .nav_list .nav_box');
  const sections = {
    '조명 / 캔들': document.getElementById('shop_light'),
    '장식 데코': document.getElementById('shop_deco'),
    '패브릭 소품': document.getElementById('shop_fabric'),
    '플라워 / 그린': document.getElementById('shop_flower')
  };

  navBoxes.forEach(navBox => {
    navBox.addEventListener('click', function() {
      const h3Text = this.querySelector('h3').textContent.trim();
      const targetSection = sections[h3Text];
      
      if (targetSection) {
        // 모든 nav_box에서 click 클래스 제거
        navBoxes.forEach(box => box.classList.remove('click'));
        
        // 클릭된 nav_box에 click 클래스 추가
        this.classList.add('click');
        
        // 해당 섹션으로 스크롤
        const headerHeight = shopHeaderElement ? shopHeaderElement.offsetHeight : 0;
        const shopNavHeight = shopNavElement ? shopNavElement.offsetHeight : 0;
        const sectionTop = targetSection.offsetTop;
        const scrollPosition = sectionTop - headerHeight - shopNavHeight - 20; // 20px 여백 추가
        
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 스크롤 시 활성 섹션 하이라이트
  window.addEventListener('scroll', function() {
    const headerHeight = shopHeaderElement ? shopHeaderElement.offsetHeight : 0;
    const shopNavHeight = shopNavElement ? shopNavElement.offsetHeight : 0;
    const scrollPosition = window.scrollY + headerHeight + shopNavHeight + 50; // 고정된 요소들 고려한 오프셋

    // 모든 섹션 확인
    Object.values(sections).forEach(section => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // 해당 섹션에 맞는 nav_box 찾기
          const sectionTitle = section.id.replace('shop_', '');
          const titleMap = {
            'light': '조명 / 캔들',
            'deco': '장식 데코',
            'fabric': '패브릭 소품',
            'flower': '플라워 / 그린'
          };
          
          const title = titleMap[sectionTitle];
          if (title) {
            // 모든 nav_box에서 click 클래스 제거
            navBoxes.forEach(box => box.classList.remove('click'));
            
            // 해당 nav_box에 click 클래스 추가
            const targetNavBox = Array.from(navBoxes).find(box => 
              box.querySelector('h3').textContent.trim() === title
            );
            if (targetNavBox) {
              targetNavBox.classList.add('click');
            }
          }
        }
      }
    });
  });
}

// 플로팅 버튼 기능 초기화
function initFloatingButtons() {
  // 요소 초기화 먼저 실행
  initShopElements();
  
  const floatingButtons = document.querySelectorAll('.floating_btn');
  const floatingContainer = document.querySelector('.shop_floating_buttons');
  
  // 플로팅 버튼이 없으면 실행하지 않음
  if (floatingButtons.length === 0) {
    console.log('플로팅 버튼을 찾을 수 없습니다.');
    return;
  }
  
  // 스크롤 이벤트로 플로팅 버튼 보이기/숨기기
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    
    if (scrollTop > 300) { // 300px 이상 스크롤하면 보이기
      if (floatingContainer) {
        floatingContainer.classList.add('show');
      }
    } else { // 300px 미만이면 숨기기
      if (floatingContainer) {
        floatingContainer.classList.remove('show');
      }
    }
  });
  
  floatingButtons.forEach(button => {
    button.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      
      if (sectionId) {
        // 섹션으로 이동
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          const headerHeight = shopHeaderElement ? shopHeaderElement.offsetHeight : 0;
          const shopNavHeight = shopNavElement ? shopNavElement.offsetHeight : 0;
          const sectionTop = targetSection.offsetTop;
          const scrollPosition = sectionTop - headerHeight - shopNavHeight - (-20);
          
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        }
      } else if (this.classList.contains('floating_top_btn')) {
        // 맨 위로 이동
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });
}

// 좋아요 기능 구현
function initLikeButtons() {
  const likeButtons = document.querySelectorAll('.like_btn');
  
  likeButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const icon = this.querySelector('i');
      const isLiked = this.classList.contains('liked');
      const productId = this.getAttribute('data-product-id');
      
      if (isLiked) {
        // 좋아요 취소
        this.classList.remove('liked');
        icon.className = 'fa-regular fa-heart';
        console.log(`상품 ${productId} 좋아요 취소`);
        
        // localStorage에서 제거
        removeFromLikedProducts(productId);
      } else {
        // 좋아요 추가
        this.classList.add('liked');
        icon.className = 'fa-solid fa-heart';
        console.log(`상품 ${productId} 좋아요 추가`);
        
        // localStorage에 저장
        addToLikedProducts(productId);
      }
    });
  });
  
  // 페이지 로드 시 저장된 좋아요 상태 복원
  loadLikedProducts();
}

// 좋아요 상품을 localStorage에 저장
function addToLikedProducts(productId) {
  let likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
  if (!likedProducts.includes(productId)) {
    likedProducts.push(productId);
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
  }
}

// 좋아요 상품을 localStorage에서 제거
function removeFromLikedProducts(productId) {
  let likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
  likedProducts = likedProducts.filter(id => id !== productId);
  localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
}

// 저장된 좋아요 상태 복원
function loadLikedProducts() {
  const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
  
  likedProducts.forEach(productId => {
    const likeBtn = document.querySelector(`[data-product-id="${productId}"]`);
    if (likeBtn) {
      likeBtn.classList.add('liked');
      const icon = likeBtn.querySelector('i');
      icon.className = 'fa-solid fa-heart';
    }
  });
}

// Shop 페이지 네비게이션 초기화
document.addEventListener('DOMContentLoaded', function() {
  // shop.html 페이지에서만 실행
  if (window.location.pathname.includes('shop.html')) {
    console.log('DOM 로드 완료 - Shop 초기화 시작');
    initShopPage();
    initShopNavigation();
    initFloatingButtons();
    initLikeButtons();
  }
});

// 윈도우 리사이즈 시
window.addEventListener('resize', function() {
  if (window.location.pathname.includes('shop.html')) {
    setTimeout(setShopNavPosition, 100);
  }
});
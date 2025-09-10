import React from 'react'

const Footer = () => {
  return (
    <section id='footer' role='contentinfo'>
      <div className="footer_inner">
        <div className="footer_text">
          <span>kim hye Ran</span>
          <span>love79hr@kakao.com</span>
        </div>
        <div className="footer_info">
          <div className="left">
            <div className="title">
              <a href="/">sign up</a>
            </div>
            <p className='desc'>회원가입을 하시면 댓글과 게시판 기능을 사용할 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              <li>
                <a href="/">1차 포트폴리오</a>
                <em>1포트폴리오를 확인해보세요.</em>
              </li>
              <li>
                <a href="/">2차 포트폴리오</a>
                <em>2포트폴리오를 확인해보세요.</em>
              </li>
              <li>
                <a href="/">3차 포트폴리오</a>
                <em>3포트폴리오를 확인해보세요.</em>
              </li>
              <li>
                <a href="/">4차 포트폴리오</a>
                <em>4포트폴리오를 확인해보세요.</em>
              </li>
              <li>
                <a href="https://github.com/">GitHub</a>
                <em>GitHub에서 코딩을 다운 받을 수있습니다.</em>
              </li>
              <li>
                <a href="https://gsap.com/">GSAP</a>
                <em>클릭하시면 GSAP 웹페이지로 이동합니다.</em>
              </li>
              <li>
                <a href="https://ko.legacy.reactjs.org/">REACT</a>
                <em>클릭하시면 REACT 웹페이지로 이동합니다.</em>
              </li>              
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          &copy; love79hr all rights reserved. <br />
          이 사이트는 포트폴리오로 제작되었으며, 상업적 목적이 없음을 알립니다. <br />
          이미지 및 컨텐츠의 무단 도용을 금합니다.
        </div>
      </div>
    </section>
  )
}

export default Footer
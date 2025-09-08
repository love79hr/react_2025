import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import port_img1 from "../assets/img/01.png"
import port_img2 from "../assets/img/02.png"
import port_img3 from "../assets/img/03.png"
import port_img4 from "../assets/img/04.png"
import port_img5 from "../assets/img/05.png"
import port_img6 from "../assets/img/06.png"

const PortText = [
  {
    code: "/",
    img: port_img1,
    alt: "포트폴리오 이미지1",
    title: "1차 포트폴리오_주제",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero odit sit quidem facere nam consequuntur non dolorum. Totam aliquid incidunt blanditiis iusto, amet praesentium molestias dolorum doloremque ipsa veritatis?",
    site: "/",
  },
  {
    code: "/",
    img: port_img2,
    alt: "포트폴리오 이미지2",
    title: "2차 포트폴리오_주제",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero odit sit quidem facere nam consequuntur non dolorum. Totam aliquid incidunt blanditiis iusto, amet praesentium molestias dolorum doloremque ipsa veritatis?",
    site: "/",
  },
  {
    code: "/",
    img: port_img3,
    alt: "포트폴리오 이미지3",
    title: "3차 포트폴리오_주제",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero odit sit quidem facere nam consequuntur non dolorum. Totam aliquid incidunt blanditiis iusto, amet praesentium molestias dolorum doloremque ipsa veritatis?",
    site: "/",
  },
  {
    code: "/",
    img: port_img4,
    alt: "포트폴리오 이미지4",
    title: "4차 포트폴리오_주제",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero odit sit quidem facere nam consequuntur non dolorum. Totam aliquid incidunt blanditiis iusto, amet praesentium molestias dolorum doloremque ipsa veritatis?",
    site: "/",
  },
  {
    code: "/",
    img: port_img5,
    alt: "포트폴리오 이미지5",
    title: "5차 포트폴리오_주제",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero odit sit quidem facere nam consequuntur non dolorum. Totam aliquid incidunt blanditiis iusto, amet praesentium molestias dolorum doloremque ipsa veritatis?",
    site: "/",
  },
  {
    code: "/",
    img: port_img6,
    alt: "포트폴리오 이미지6",
    title: "6차 포트폴리오_주제",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero odit sit quidem facere nam consequuntur non dolorum. Totam aliquid incidunt blanditiis iusto, amet praesentium molestias dolorum doloremque ipsa veritatis?",
    site: "/",
  },
]

const Port = () => {

  const horizontalRef = useRef(null);
  // horizontalRef라는 변수를 생성하고 useRef(null)로 초기화
  const sectionsRef = useRef([]);
  // sectionsRef라는 변수를 생성하고 useRef([])로 초기화

  // useRef() : react에서 변하는 값을 저장하는 명령어
  // useRef(null) : 빈상태의 값을 저장하라는 명령어
  // useRef([]) : 배열상태의 값을 저장하라는 명령어
  // useRef(0) : 숫자상태의 값을 저장하라는 명령어

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    // .current : useRef()로 생성된 변수의 실제 값을 가져올 때 사용하는 속성
    const sections = sectionsRef.current;

    let scorollTween = gsap.to(sections,{
      xPercent: -100 * (sections.length - 1), // 왼쪽으로 이동하는 넒이값
      ease: "none", // 속도를 일정하게 움직이게 해주는 옵션(easeIn, easeOut 등등이 있음)

      scrollTrigger : { // 스크롤트리거 시작 선언!
        trigger : horizontal, // 감시할 요소
        start : "top 80px", // 시작지점
        end : "+=3000", // 끝나는 지점 (3000px 스크롤을 내릴때까지, 생략가능)
        pin : true, // 고정시키는 옵션
        scrub : 1, // 스크롤 애니메이션을 1초 지연시간 적용(부드럽게 움직임)
      },
    });
      return () => {
        scorollTween.kill();
      }
  },[]);

  // ,[] : 맨처음에 한번만 실행하라는 뜻

  return (
    <section id='port' ref={horizontalRef}>
      <div className="port_inner">
        <div className="port_title" >
          portfolio <em>작품들</em>
        </div>
        <div className="port_wrap">

          {PortText.map((port, key) => (
            <div 
              className={`port_item p${key+1}`} 
              key={key}
              ref={(el)=>(sectionsRef.current[key] = el)}>

              <span className='num'>0{key+1}.</span>
              <a href={port.code} className='img'>
                <img src={port.img} alt={port.alt} />
              </a>
              <h3 className='title'>{port.title}</h3>
              <p className='desc'>{port.desc}</p>
              <a href={port.site} className='site' target='_blank' rel='noreferrer'>사이트보기</a>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Port
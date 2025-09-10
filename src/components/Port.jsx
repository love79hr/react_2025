import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import port_img1 from "../assets/img/01.png";
import port_img2 from "../assets/img/02.png";
import port_img3 from "../assets/img/03.png";
import port_img4 from "../assets/img/04.png";
import port_img5 from "../assets/img/05.png";
import port_img6 from "../assets/img/06.png";

const portText = [
  {
    url: "/",
    img: port_img1,
    alt: "1차 포트폴리오 이미지",
    title: "1차 포트폴리오",
    desc: "1차 프로젝트는 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia, vero voluptatum illo perferendis aspernatur assumenda fugiat unde consectetur quam nostrum laboriosam, facilis tempore nisi blanditiis, et neque inventore amet.",
  },
  {
    url: "/",
    img: port_img2,
    alt: "2차 포트폴리오 이미지",
    title: "2차 포트폴리오",
    desc: "2차 프로젝트는 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia, vero voluptatum illo perferendis aspernatur assumenda fugiat unde consectetur quam nostrum laboriosam, facilis tempore nisi blanditiis, et neque inventore amet.",
  },
  {
    url: "/",
    img: port_img3,
    alt: "3차 포트폴리오 이미지",
    title: "3차 포트폴리오",
    desc: "3차 프로젝트는 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia, vero voluptatum illo perferendis aspernatur assumenda fugiat unde consectetur quam nostrum laboriosam, facilis tempore nisi blanditiis, et neque inventore amet.",
  },
  {
    url: "/",
    img: port_img4,
    alt: "4차 포트폴리오 이미지",
    title: "4차 포트폴리오",
    desc: "4차 프로젝트는 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia, vero voluptatum illo perferendis aspernatur assumenda fugiat unde consectetur quam nostrum laboriosam, facilis tempore nisi blanditiis, et neque inventore amet.",
  },
  {
    url: "/",
    img: port_img5,
    alt: "5차 포트폴리오 이미지",
    title: "5차 포트폴리오",
    desc: "5차 프로젝트는 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia, vero voluptatum illo perferendis aspernatur assumenda fugiat unde consectetur quam nostrum laboriosam, facilis tempore nisi blanditiis, et neque inventore amet.",
  },
  {
    url: "/",
    img: port_img6,
    alt: "6차 포트폴리오 이미지",
    title: "6차 포트폴리오",
    desc: "6차 프로젝트는 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia, vero voluptatum illo perferendis aspernatur assumenda fugiat unde consectetur quam nostrum laboriosam, facilis tempore nisi blanditiis, et neque inventore amet.",
  },
]


const Port = () => {

  const horisontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horisontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {

      xPercent : -120 * (sections.length -1),
      ease : "none",

      scrollTrigger :{
        trigger : horizontal, // 감시할 요소
        start : "top 100px", // 시작지점
        end : "+=3000", // 종료지점
        pin : true, // 고정
        scrub : 1, // 스크롤과 애니메이션 동기화
      },
    });

    return () => {
        scrollTween.kill();
      }

  },[]);

  // useEffect() : 리액트 훅 명령어
  // useEffect(()=>{}) : 컴포넌트가 렌더링 될 때마다 특정 작업이 실행됨
  // useEffect(()=>{},[]) : 컴포넌트가 처음 렌더링 될 때만 실행됨
  // useEffect(()=>{},[value]) : value 값이 변경될 때마다 실행됨


  return (
    <section id='port' ref={horisontalRef}>
      <div className="port_inner">
        <div className="port_title">
          portfolio <em>나의 작업물</em>
        </div>
        <div className="port_wrap">

          {portText.map((port, key) => (
            <div
              className={`port_item p${key+1}`}
              key={key}
              ref={(el)=>(sectionsRef.current[key] = el)}
              >
              <div className="num">0{key+1}.</div>
              <a href={port.url} target='_blank' className='img'>
                <img src={port.img} alt={port.a1t} />
              </a>
              <h3 className='title'>{port.title}</h3>
              <p className='desc'>
                {port.desc}
              </p>
              <a href={port.url} target='_blank' className='site'>
                SITE VIEW
              </a>
            </div>
          ))}


        </div>
      </div>
    </section>
  )
}

export default Port
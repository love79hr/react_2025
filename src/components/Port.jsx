import React from 'react'

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
  return (
    <section id='port'>
      <div className="port_inner">
        <div className="port_title">
          portfolio <em>작품들</em>
        </div>
        <div className="port_wrap">

          {PortText.map((port, key) => (
            <div className={`port_item p${key+1}`} key={key}>
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
import React from 'react'
import { info } from 'sass'

const siteText = [
   {
      text: ["make", "site compliant with -1", "My Name"],
      title: "1. portfolio [name]",
      code: "https://www.naver.com/",
      view: "/",
      info: ["site coding", "제작 기간 : 3일", "프로그램 : html5, css3, javascript, react"],
   },
   {
      text: ["make", "site compliant with -2", "My Name"],
      title: "2. portfolio [name]",
      code: "https://www.daum.net/",
      view: "/",
      info: ["site coding", "제작 기간 : 5일", "프로그램 : html5, css3, javascript, react"],
   },
   {
      text: ["make", "site compliant with -3", "My Name"],
      title: "3. portfolio [name]",
      code: "https://www.nate.com/",
      view: "/",
      info: ["site coding", "제작 기간 : 7일", "프로그램 : html5, css3, javascript, react"],
   },
   {
      text: ["make", "site compliant with -4", "My Name"],
      title: "4. portfolio [name]",
      code: "https://www.google.com/",
      view: "/",
      info: ["site coding", "제작 기간 : 10일", "프로그램 : html5, css3, javascript, react"],
   },
   {
      text: ["make", "site compliant with -5", "My Name"],
      title: "5. portfolio [name]",
      code: "https://www.microsoft.com/ko-kr",
      view: "/",
      info: ["site coding", "제작 기간 : 15일", "프로그램 : html5, css3, javascript, react"],
   },
   {
      text: ["make", "site compliant with -6", "My Name"],
      title: "6. portfolio [name]",
      code: "https://www.adobe.com/home?acomLocale=kr",
      view: "/",
      info: ["site coding", "제작 기간 : 20일", "프로그램 : html5, css3, javascript, react"],
   },
]

const Site = () => {
   return (
      <section id='site'>
         <div className="site_inner">
            <div className="site_title">
               Site Coding <em>내 작품들</em>
            </div>
            <div className="site_wrap">

               {siteText.map((site,key) => (
                  <div className={`site_item s${key+1}`} key={key}>
                     <span className='num'>{key+1}.</span>
                     <div className="text">
                        <div>{site.text[0]}</div>
                        <div>{site.text[1]}</div>
                        <div>{site.text[2]}</div>
                     </div>
                     <h3 className='tltle'>{site.title}</h3>
                     <div className="btn">
                        <a href={site.code} target='blank'>code</a>
                        <a href={site.view}>view</a>
                     </div>
                     <div className="info">
                        <span>{site.info[0]}</span>                        
                        <span>{site.info[1]}</span>                        
                        <span>{site.info[2]}</span>                        
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Site
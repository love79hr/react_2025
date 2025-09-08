import React from 'react'

const contactText = [
  {
    link: "/",
    title: "KAKAO ID : love79hr",

  },
  {
    link: "/",
    title: "EMAIL : love79hr@kakao.com",
  },
  {
    link: "/",
    title: "LINE : iooi2510@naver.com",
  }
]

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact_inner">
        <div className="contact_title">Contact</div>
        <div className="contact_lines" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>

        <div className="contact_text">
          <div className="text">
            {contactText.map((contact, key) => (
              <div key={key}>
                <a href={contact.link} target='_blank' rel='noreferrer'>
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="contact_lines bottom" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </section>
  )
}

export default Contact
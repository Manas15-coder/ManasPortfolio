import React from 'react'

const Contact = () => {
  return (
    <>
    <section id='contact'>
    <div className="contact-form container-fluid">
                                <h2 className='contact-heading'>Get In Touch With Me</h2>
                                <form
                                    id="fs-frm"
                                    name="simple-contact-form"
                                    acceptCharset="utf-8"
                                    action="https://formspree.io/f/mjvdjoeg"
                                    method="post">
                                    <br />
                                    <input
                                        type="text"
                                        name="name"
                                        id="full-name"
                                        placeholder="Enter Your Name "
                                        required
                                    />
                                    <br />
                                    <br />
                                    <input
                                        type="text"
                                        name="_replyto"
                                        id="email-address"
                                        placeholder="abc@gmail.com"
                                        required
                                    />
                                    <br />
                                    <br />
                                    <textarea
                                        rows={5}
                                        name="message"
                                        id="message"
                                        placeholder="Leave a message here and click submit button. Your message will be received through e-mail."
                                        required
                                        defaultValue={""}
                                    />
                                    <br />
                                    <input className="btn" type="submit" defaultValue="Submit" />
                                </form>
                            </div>

    </section>
    </>
  )
}

export default Contact

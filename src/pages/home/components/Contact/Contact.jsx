import React from 'react'
import { ContactWrapper, DownloadNow, FirstWord, FormWrapper, Input, InputWrapper, P, ScoWord, SendNow, TextArea, Weapper } from './style_contact'

const Contact = () => {
  return (
    <ContactWrapper>
        <div className='container'>
            <Weapper>
            <div style={{width:"50%"}}>
                <FirstWord>New </FirstWord>
                <ScoWord>Event</ScoWord>
                <P>Proin sodales convallis urna eu condimentum. Morbi tincidunt augue eros, vitae pretium mi condimentum eget. Suspendisse eu turpis sed elit pretium congue.
                </P>
                <P>Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum. Praesent ullamcorper mauris fermentum turpis scelerisque rutrum eget eget turpis.
                </P>
                <P>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor.
                </P>
                <DownloadNow>Download Now</DownloadNow>
            </div>

            <FormWrapper>
                <div>
                    <FirstWord>KEEP IN </FirstWord>
                    <ScoWord>TOUCH</ScoWord>
                    <form action='' method=''>
                        <InputWrapper>
                            <Input type='name' placeholder='Name'/>
                            <Input type='email' placeholder='Email'/>
                            <TextArea  placeholder='Message'/>
                        </InputWrapper>
                        <div>
                        <SendNow>Send Now</SendNow>
                        </div>

                    </form>
                </div>
            </FormWrapper>
            </Weapper>
        </div>
    </ContactWrapper>
  )
}

export default Contact

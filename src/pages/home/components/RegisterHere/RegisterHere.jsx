import React from 'react'
import { ColoredTitle, FromWrapper, RegisterBtn, RegisterContainer, RegisterHereWrapper, RegisterInput, RegisterTitle ,Text, TextTwo} from './style_registerhere'

const RegisterHere = () => {
  return (
    <RegisterHereWrapper>
        <div className='container'>
            <RegisterContainer>
                <div style={{width:"60%"}}>
                    <RegisterTitle>Register</RegisterTitle>
                    <ColoredTitle>Here</ColoredTitle>
                    <Text>Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed pulvinar est sit amet tellus iaculis hendrerit.
                    </Text>
                    <TextTwo>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet consectetuer diam nonummy.
                    </TextTwo>
                </div>
                <FromWrapper>
                    <RegisterInput type='text' placeholder='First Name'/>
                    <RegisterInput type='text' placeholder='Last Name'/>
                    <RegisterInput type='number' placeholder='Phone Number'/>
                    <RegisterInput type='email' placeholder='Email Address'/>
                </FromWrapper>
                </RegisterContainer>
                <div style={{textAlign:"right",marginTop:"20px"}}>
                <RegisterBtn>Register</RegisterBtn>
                </div>
        </div>
    </RegisterHereWrapper>
  )
}

export default RegisterHere

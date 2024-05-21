import styled from 'styled-components'
import fotoperfilreal from '../../assets/png/perfilMejorado3.png'


export default function Banner() {
  return (
    <BannerCardContainer id='home'>
    <BannerCardText>
                <BannerDescription >
                <h1>Carlos Lichowski </h1>
                <h2>Web Developer</h2>
                FullStack ReactJs NodeJs</BannerDescription>
                <HireBtn >Hire Me</HireBtn>
    </BannerCardText>

  <BannerImgContainer>
            <Bannerimg src={fotoperfilreal}/>           
  </BannerImgContainer>

  </BannerCardContainer>

  
  )
}



const BannerCardContainer = styled.div`
  display:flex;
flex-direction:row;
align-content: start;
align-items: start;
justify-content: center;
text-align: center;
margin-top: 9rem;
width: 80%;
user-select: none;

@media screen and (max-width: 1600px) {
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: 90%;
     margin-top: 3rem;
  }
`

const BannerCardText = styled.div`
    margin-top: 9rem;
    letter-spacing: .0813rem;
    text-shadow:  .125rem .1875rem #000 ;

    @media screen and (max-width: 1600px) {
      margin-bottom: 4rem;
      
  }

    
    
`

const BannerDescription = styled.div`
    letter-spacing: .1875rem;
    line-height: 3.125rem;
    font-size: 1.2em;

    @media screen and (max-width: 1600px) {
      font-size: 1.8rem;
      
  }
`

const Bannerimg = styled.img `
    margin-left: 8rem;
  width: 35rem;
  border-radius: 10%;
  display:flex;
  flex-direction: column;
  
  filter:drop-shadow(0.3em 0.2em 0.01em #2512d126);
  
  


  @media screen and (max-width: 1600px) {
     width: 20rem ;
     margin-left: 0;
  }
`





const HireBtn = styled.button`

    margin: 3rem 0 0 0;
      display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #360327;
    background-image: -webkit-linear-gradient(top, #360327, #331ed0);
    background-image: -moz-linear-gradient(top, #360327, #1e1ed0);
    background-image: -ms-linear-gradient(top, #360327, #1e1ed0);
    background-image: -o-linear-gradient(top, #360327, #1e2ad0);
    background-image: -webkit-gradient(to bottom, #360327, #1e24d0);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    height: 2.5rem;
    color: #FFFFFF;
    width: 12.5rem;
    letter-spacing: 1.5px;
    font-size: 1.1em;
    font-weight: 100;
    padding: 3px;
    -webkit-box-shadow: 1px 1px 36px 11px #1512d1;
    -moz-box-shadow: 1px 1px 36px 11px #1f12d1;
    box-shadow: 1px 1px 36px 11px #2512d1;
    text-shadow: 1px 1px 20px #000000;
    border: solid #253348 1px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
`

const BannerImgContainer = styled.div`
  
`
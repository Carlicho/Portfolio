import styled from 'styled-components'


export default function About() {
  return (
    <Container id='about'>
        <AboutH1>
            About
            </AboutH1>


        <TextColumn>
            <Text1>
            As a developer, I strive create beautiful websites with stunning design and great performance. I enjoy creating extremely visual and interactive experiences using any technology that will deliver the best results.

            </Text1>

            <Text2>
            Having a background of 10 years experience in a hospital, I also developed my soft skills.
             I consider myself a proactive listener and a good team worker.
            </Text2>

        </TextColumn>

    </Container>
  )
}
 
const Container = styled.div`
    margin: 0 ;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 1600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
  }

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 80%;
    text-align: center;
    justify-content: center;
    padding:  2rem 0;

        
  }
`

const AboutH1 = styled.h1`
width: 70%;
text-align: center;
  padding-bottom:1rem;
  border-bottom: 2px solid grey;
   font-size: 1.1rem;
    letter-spacing: .125rem;
    margin: 0 0 3.125rem 0;

    @media screen and (max-width: 1600px) {
        font-size: 2rem;
        margin-bottom: 2rem;     
  }

`

const TextColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    font-size: 1.1rem;
    letter-spacing: .125rem;
    width: 80%;
    line-height: 2rem;

    @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
  }

  @media screen and (max-width: 800px) {
        font-size: 1rem;
        width: 80%;
  }
`
const Text1 = styled.p`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
text-align: start;
    font-size: 1.1rem;
    width: 50rem;
    margin: 0 0 1.25rem 0;

    @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
  }

  @media screen and (max-width: 800px) {
        font-size: 1rem;
        margin: 0;
        width: 100%;
  }
`
const Text2 = styled.p`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
text-align: start;
    font-size: 1.1rem;
    width: 50rem;

    @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
  }

  @media screen and (max-width: 800px) {
        font-size: 1rem;
        margin: 0;
        width: 100%;
  }
`

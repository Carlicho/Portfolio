import styled from 'styled-components'


export default function About() {
  return (
    <Container id='about'>
        <AboutH1>
            About
            </AboutH1>


        <TextColumn>
            <Text1>
            As a developer, i strive to deliver to create beautiful, performance websites
            from stunning desing. I enjoy creating extremely visual and interactive experiences
            using any technology that will deliver the best rest.
            </Text1>

            <Text2>
            With the background of working almost 10 years in a hospital, I have develop a great
            my soft skills by working in team and having an Active listening actitud. 
            </Text2>

        </TextColumn>

    </Container>
  )
}
 
const Container = styled.div`
    margin: 8rem 0 0 0;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: start;

    @media screen and (max-width: 1600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
  }
`

const AboutH1 = styled.h1`
   font-size: 1.2em;
    letter-spacing: .125rem;

    @media screen and (max-width: 1600px) {
        font-size: 2rem;
        margin-bottom: 2rem;     
  }

`

const TextColumn = styled.div`
    font-size: 1.2em;
    letter-spacing: .125rem;
    width: 50rem;
    line-height: 2rem;

    @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
  }
`
const Text1 = styled.p`
    font-size: 1.2em;
    width: 50rem;
    margin: 0 0 1.25rem 0;

    @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
  }
`
const Text2 = styled.p`
    font-size: 1.2em;
    width: 50rem;

    @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
  }
`

import styled from "styled-components"

import Rickandmorty from '../../assets/img/MyWork/rickandmorty CleanImage.png'
import Innova from '../../assets/img/MyWork/Innova.png'
import Spotify from '../../assets/img/MyWork/Spotify CleanImage.png'
import NotificationsApi from '../../assets/img/MyWork/NotificationsApi CleanImage.png'


export default function MyWorks() {

  

  return (
    <Container id="myworks">

      <WorksContainer>

      <Workimage src={Innova} alt="Innova" />                   

      <WorkDescription>
      <Descriptionh2>Innova</Descriptionh2>

      <DescriptionP>Team Proyect Made of part as a Full Stack M.E.R.N. bootcamp on SoyHenry</DescriptionP>

      <a href="https://github.com/Carlicho/Innova-Render" target="new_blank">
          <RepositoryBtn>Repository</RepositoryBtn>
          
      </a>

      </WorkDescription>

      </WorksContainer>



<WorksContainer>

<Workimage src={Spotify} alt="Spotify" />                   

<WorkDescription>
    <Descriptionh2>Spotify Clone</Descriptionh2>

    <DescriptionP>Clone of spotify using Spotify Api</DescriptionP>

    <a href="https://github.com/Carlicho/SpotifyClone2" target="new_blank">
          <RepositoryBtn>Repository</RepositoryBtn>
          
      </a>
</WorkDescription>

</WorksContainer>


<WorksContainer>

<Workimage src={Rickandmorty} alt="Rickandmorty" />                   

<WorkDescription>
      <Descriptionh2>RickandMorty Api</Descriptionh2>

      <DescriptionP>Team Proyect Made of part as a Full Stack M.E.R.N. bootcamp on SoyHenry</DescriptionP>

      <a href="https://github.com/Carlicho/RickandMorty" target="new_blank">
          <RepositoryBtn>Repository</RepositoryBtn>
          
      </a>
      </WorkDescription>

</WorksContainer>

<WorksContainer>

<Workimage src={NotificationsApi} alt="Rickandmorty" />                   

<WorkDescription>
      <Descriptionh2>Notifation Api</Descriptionh2>

      <DescriptionP>Api that allow you administrate your notifications</DescriptionP>

      <a href="https://gitlab.com/lichos-ideas/notifications-service" target="new_blank">
          <RepositoryBtn>Repository</RepositoryBtn>
          
      </a>
      </WorkDescription>

</WorksContainer>




    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2em;

@media screen and (max-width: 1600px) {
      flex-direction: column;
      
  }

`

const WorksContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 user-select:none;
  max-width: 18.75rem;
  margin: 12rem 2rem;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(0deg, rgba(40,44,52,1) 0%, rgba(17,0,32,.5) 100%);
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: .7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: .5s all;

  @media screen and (max-width: 1600px) {
    max-width: 28.75rem;  
    margin: 5rem 1rem;
  }
`

const WorkDescription = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
min-height: 19rem;
  height: 18.75rem;
  width: 20rem;
  padding: 1rem 1rem 0 1rem;

  @media screen and (max-width: 1600px) {
    max-width: 28.75rem;  
    text-align: center;
    width: auto;
  }
  
`

const Descriptionh2 = styled.h2`
  display: flex;
  padding: 0 1.25em;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  

  
`


const DescriptionP = styled.p`
  display: flex;
  padding: 20px;
  margin-top: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Workimage = styled.img`
      border-radius: .5rem;
      max-width: fit-content;
      height: 13rem;
      object-fit: cover;
`



const RepositoryBtn = styled.button`
color:#fff;
font-size:1rem;
-webkit-box-shadow: 0.5px 0.5px 23px 6px #1512d1bc;
    -moz-box-shadow: 0.5px 0.5px 23px 6px #1f12d1bc;
    box-shadow: 0.5px 0.5px 23px 6px #2512d1bc;
    text-shadow: 0.5px 0.5px 0.5px #000000;

border:1px solid  #31223d;
border-radius: 20px;
margin:1.3rem ;
padding:0.2rem;
   background: #360327;
    background-image: -webkit-linear-gradient(top, #360327, #331ed0);
    background-image: -moz-linear-gradient(top, #360327, #1e1ed0);
    background-image: -ms-linear-gradient(top, #360327, #1e1ed0);
    background-image: -o-linear-gradient(top, #360327, #1e2ad0);
    background-image: -webkit-gradient(to bottom, #360327, #1e24d0);
    
    

`

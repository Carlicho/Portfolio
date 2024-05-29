// import styled from "styled-components"
// export default function MyCareer() {
//   return (     
//         <Courses >
//            <div>

//            </Courses>
//   )
// }
import styled from "styled-components"

export default function MyCareer() {
  return (
    <Courses id="mycareer">
      
                <Coursestitle>Courses</Coursestitle>
              
          <Coursesdescription>   
          <Courseli>2023 SoyHenry Bootcamp Fullstack Reactjs NodeJs MongoDb</Courseli>
          <Courseli>2022 Codo a Codo ReactJs</Courseli>
          <Courseli>2022 EducacionIt ReactJs</Courseli>
          <Courseli>2021 EducacionIt Html Css Javascript</Courseli>
            </Coursesdescription>

    </Courses>
  )
}




const Courses = styled.div`
      margin: 8rem 0 8rem 0;
      letter-spacing: 1.5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 80%;
      

      @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
  }

  @media screen and (max-width: 800px) {
        font-size: 1rem;
        margin: 0;
        width: 80%;
        letter-spacing: 1px;
  }
      `


const Coursestitle = styled.h2`
      letter-spacing: 1.25px;
      font-size: 1.2em;
      border-bottom: 2px solid grey;
      width: 70%;
      text-align: center;
      padding-bottom:1rem;
      

      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        letter-spacing: 1px;
        margin: 0;
        width: 70%;
        margin: 0 0 2rem 0;
  }
      `

const Coursesdescription = styled.div`
display: flex;
flex-direction: column;
align-items: start;
    letter-spacing: .0938rem;
    font-size: 1.2em;
    line-height: 1.25rem;
    width: 50rem;
    margin: 1.25rem 0 1.25rem 0;

    @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
  }

  @media screen and (max-width: 800px) {
        font-size: 1em;
        margin: 0;
        width: 100%;
        letter-spacing: 1px;
  }
    
      
    
`

const Courseli = styled.p`
  line-height: 2rem;

  @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
        font-weight: 300;
        
  }

  @media screen and (max-width: 800px) {
        font-size: 1rem;
        font-weight: 300;
        
  }
`

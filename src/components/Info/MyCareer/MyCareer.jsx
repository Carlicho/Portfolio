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
      
                <Coursestitle>Courses:</Coursestitle>
              
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
      margin: 8rem 0 0 0;
      letter-spacing: 1.5px;
      display: flex;
      align-items: start;
      justify-content: space-around;
      width: 80%;
      margin-bottom: 8rem;

      @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
  }
      `

const Coursestitle = styled.h2`
      letter-spacing: 1.25px;
      font-size: 1.2em;

      
      `

const Coursesdescription = styled.div`
    letter-spacing: .0938rem;
    font-size: 1.2em;
    line-height: 1.25rem;
    width: 800px;
    margin: 1.25rem 0 1.25rem 0;

    @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
        
  }
    
      
    
`

const Courseli = styled.p`
  line-height: 2rem;

  @media screen and (max-width: 1600px) {
        font-size: 1.8rem;
        font-weight: 300;
        
  }
`

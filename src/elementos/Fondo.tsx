// @ts-ignore
import styled from "styled-components";
// import PuntosIcon from "../images/puntos.svg";

  const Svg = styled.svg`
      height: 50vh;
      width: 100%;
      position: fixed;
      bottom: 0;
      z-index: 0;
      path {
          fill: rgba(18, 132, 160, 0.3);
      }
  `;
  
  // const PuntosArriba = styled(PuntosIcon)`
  //     position: fixed;
  //     z-index: 1;
  //     top: 2.5rem; /* 40px */
  //     left: 2.5rem; /* 40px */
  // `;
  
  // const PuntosAbajo = styled(PuntosIcon)`
  //     position: fixed;
  //     z-index: 1;
  //     bottom: 2.5rem; /* 40px */
  //     right: 2.5rem; /* 40px */
  // `;

  const Fondo = () => {
    return (
      <>
        {/* <PuntosArriba />
        <PuntosAbajo /> */}
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            // fill="#0099ff" 
            fillOpacity="1" 
            d="M0,0L288,128L576,32L864,32L1152,128L1440,32L1440,320L1152,320L864,320L576,320L288,320L0,320Z">
          </path>
        </Svg>
      </>
    )
  }

  export default Fondo;
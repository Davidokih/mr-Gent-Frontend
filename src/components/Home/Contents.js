import React from "react";
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Contents = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container>
            <h2> Collection </h2>
            <Carosel {...settings}>
                <Image>
                    <img src='/images/IMG-20220512-WA0005.jpg' />
                </Image>
                <Image>
                    <img src='/images/IMG-20220512-WA0006.jpg' />
                </Image>
                <Image>
                    <img src='/images/IMG-20220512-WA0007.jpg' />
                </Image>
                <Image>
                    <img src='/images/IMG-20220512-WA0008.jpg' />
                </Image>
                <Image>
                    <img src='/images/IMG-20220512-WA0009.jpg' />
                </Image>
                <Image>
                    <img src='/images/IMG-20220512-WA0010.jpg' />
                </Image>
                <Image>
                    <img src='/images/IMG-20220512-WA0011.jpg' />
                </Image>
                <Image>
                    <img src='/images/IMG-20220512-WA0021.jpg' />
                </Image>
                <Image>
                    <img src='/images/IMG-20220512-WA0015.jpg' />
                </Image>
            </Carosel>
        </Container>
    );
}

export default Contents

const Container = styled.div`

    width: 100%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* position: relative; */
    
    h2{
        font-size: 40px;
        font-weight: 800;
    }
`
const Carosel = styled(Slider)`
    width: 85%;

  & > button{
    height: 100%;
    width: 5vw;
    z-index: 1;
    opacity: 0;

    color: black;
    /* :hover{
      opacity: 1;
    } */
  }
  ul li button{
      &::before{
        font-size: 10px;
        color: rgb(150, 158, 171);
      }
  }
  li.slick-active{
    color: white;
  }

  /* background-color: red; */
  margin-left: 20px;
  display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Image = styled.div`
    /* width: 50px; */
    /* height: 300px; */
    /* border: 1px solid black; */
    /* margin-bottom: 20px; */

    img{
        width: 250px;
        height: 350px;
        border: 4px solid black;
        border-radius: 5px;
    }

    @media (max-width: 800px){
    margin: 10px;
        
        img{
            width: 180px;
            height: 300px;
        }
    }
`
import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = () => {
    const SliderData = [
        {
            bg: "red",
            Title: "Slide One",
            content: "problem"
        },
        {
            bg: "blue",
            Title: "Slide Two",
            content: "problem"
        },
        {
            bg: "green",
            Title: "Slide Three",
            content: "problem"
        }
    ];

    const [ currentSlide, setCurrentSlide ] = useState(0);
    return (
        <Container>
            <button>Next</button>
            <button>Previous</button>

            { SliderData?.map((slide, index) => {
                return (
                    <Hold>
                        { index === currentSlide && (
                            <>
                                <Back style={ { backgroundColor: `${slide.bg}` } }></Back>
                                <Box>
                                    <h2>{ slide.Title }</h2>
                                    <p>{ slide.content }</p>
                                </Box>
                            </>
                        ) }
                    </Hold>
                );
            }) }
        </Container>
    );
};

export default Slider;

// const Container = styled.div``
const Box = styled.div``;
const Back = styled.div``;
const Hold = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateX(-50%);
    transition: all .5s ease;
`;
const Container = styled.div`
    width: 100%;
    height: 90%;
    position: relative;
    overflow: hidden;
`;
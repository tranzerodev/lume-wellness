import styled from 'styled-components';

export const TestimonialContainer = styled.div`
  background-color: ${p => p.theme.bg.dark};
  padding: 50px 0px;
  max-width: 100%;
  overflow: hidden;
  .slick-dots {
    bottom: -10px;
    li button {
      padding: 0;
      width: 15px;
      height: 15px;
    }
    li.slick-active button:before {
      background-color: #fff;
    }
    li button:before {
      font-size: 0;
      content: '';
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid #fff;
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0px;
    .slick-dots {
      li button {
        width: 10px;
        height: 10px;
      }

      li button:before {
        width: 10px;
        height: 10px;
        border: 1px solid #fff;
      }
    }
  }
`;

export const Testimonial = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  padding: 0 30px 30px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TestimonialText = styled.span`
  font-family: calluna-sans;
  font-size: 21px;
`;

export const TestimonialIcon = styled.div`
  background-image: url(${p => p.bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40px;
  width: 120px;
  margin: 20px auto;
  display: block;
`

export const TestimonialGuest = styled.div`
  font-family: calluna-sans;
  margin: 20px 0px 0px 0px;
  font-weight: 700;
`;

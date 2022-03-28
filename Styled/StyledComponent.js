import styled, { css, keyframes } from "styled-components"

export const Titulo = styled.h1`
color: hsl(0, 0%, 100%);
letter-spacing: 7px;
margin-top: 84.3px;
font-size: 22px;
text-transform: uppercase;
text-align: center;

@media (min-width: 768px) {
  margin-top: 253px;
}
`;

export const Contenido_principal = styled.main`
  align-items: center;
  background-color: rgb(33, 30, 43);
  background-repeat: no-repeat, repeat;
  background-position: bottom center;
  background-size: contain;
  color: hsl(237, 18%, 59%);
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    display: none;
    width: 100%;
  }
`;

export const Contenido_Pie_Pagina= styled.footer`
    color: white;
  font-size: 12px;
  bottom: 0;
  left: 0;
  margin-bottom: 1em;
  position: fixed;
  right: 0;
  text-align: center;

 
.bottom {
  width: 100%;
  height: 197px;
  background: #211A29;
  overflow: hidden;
}

.bottom .bottom-bg {
  width: 100%;
  height: 197px;
  background-image: url("");
  background-position: 0px 0;
  -webkit-animation: animate-bg linear 60s infinite alternate;
          animation: animate-bg linear 60s infinite alternate;
}

@media only screen and (min-width: 768px) {
  .bottom .bottom-bg {
    width: 200%;
    background-size: 100%;
    background-position: 0px 0;
  }
}

.bottom .social-icons {
  width: 100%;
  height: 197px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 0 0 3rem 0;
}

@media only screen and (min-width: 768px) {
  .bottom .social-icons {
    width: 50%;
  }
}

.bottom .social-icons .icon {
  padding: 0 1rem;
}

.bottom .social-icons .icon svg path {
  -webkit-transition: background .4s ease-in-out;
  transition: background .4s ease-in-out;
}

.bottom .social-icons .icon svg path:hover {
  fill: #fb6087;
}


`;

export const Contenido_contador = styled.article`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 75px;

  .mobile {
    display: block;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .desktop {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  > div {
    margin: 1em 1em 0;
    position: relative;
    text-align: center;
    width: 50px;
    z-index: 1;

    @media (min-width: 768px) {
      width: 150px;
    }

    > div:first-child {
      color: hsl(345, 95%, 68%);
      font-size: 29.3px;
      line-height: 47px;
      height: 45.7px;
      width: 50px;

      @media (min-width: 768px) {
        font-size: 88px;
        height: 137px;
        line-height: 137px;
        width: 150px;
      }
    }

    > div.desktop,
    div.mobile {
      letter-spacing: 5px;
      margin-top: 28px;
      text-transform: uppercase;
    }
  }
`;

export const flip = keyframes`
  0% {
    transform: rotateX(0);
  }

  100% {
    border-bottom: 1px solid black;
    transform: rotateX(-0.5turn);
    z-index: 1;
  }
`;

export const show = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Contenido_Voltear_Numero = styled.div`
  perspective: 500px;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;

    &:not(.flipper) {
      overflow: hidden;
    }

    &:not(.bottom.current) {
      top: 0;
    }

    &.top {
      backface-visibility: hidden;
      background: linear-gradient(to bottom, rgb(44, 43, 70), rgb(59, 60, 95));
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      box-shadow: 0px -2px 5px rgb(26, 26, 37), inset 0 2px rgba(0, 0, 0, 0.9),
        inset 0 3px 0 rgba(255, 255, 255, 0.4);
      height: 50%;

      &.next {
        &:before {
          animation: ${({ animationDuration, shouldAnimate }) =>
            shouldAnimate
              ? css`
                  ${show} ${animationDuration /
                  2}ms ease-in reverse forwards ${animationDuration / 2}ms
                `
              : "none"};
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          content: "";
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }

    &.bottom {
      align-items: flex-end;
      background: linear-gradient(
          rgba(188, 167, 216, 0.1),
          rgba(72, 66, 95, 0.1) 50%,
          rgb(52, 53, 81)
        ),
        rgb(52, 53, 81);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0px 7px 2px rgb(26, 26, 37);

      &.current {
        height: 50%;
        border-top: 2px solid black;
        bottom: 0;
        transform: rotateX(5deg);

        &:before {
          animation: ${({ animationDuration, shouldAnimate }) =>
            shouldAnimate
              ? css`
                  ${show} ${animationDuration * 0.85}ms ease-in forwards
                `
              : "none"};
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          content: "";
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }

    &.flipper {
      animation: ${({ animationDuration, shouldAnimate }) =>
        shouldAnimate
          ? css`
              ${flip} ${animationDuration}ms ease-in forwards
            `
          : "none"};
      height: 50%;
      transform-origin: bottom;
      transform-style: preserve-3d;

      .bottom,
      .top {
        backface-visibility: hidden;
        height: 100%;
      }

      .bottom {
        transform: rotateX(0.5turn);
      }

      .top {
        transform: rotateX(0deg);

        &:before {
          animation: ${({ animationDuration, shouldAnimate }) =>
            shouldAnimate
              ? css`
                  ${show} ${animationDuration}ms ease-in forwards
                `
              : "none"};
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          content: "";
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 100;
        }
      }
    }
  }
`;
import { css } from "@emotion/react";

export const GlobalStyles = css`
  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: white;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
  }

  .next {
    right: 10px;
  }

  .prev {
    left: 10px;
    transform: scale(-1);
  }

  .rec-arrow{
    border-radius: 50%;
  }

  /* square buttons */
  /* .rec.rec-arrow {
    border-radius: 0;
  } */
  /* round buttons on hover */
  /* .rec.rec-arrow:hover {
    border-radius: 50%;
  } */
  /* hide disabled buttons */
  /* .rec.rec-arrow:disabled {
    visibility: hidden;
  } */
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  /* .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  } */
`;

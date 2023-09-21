import React from 'react';
import { styled } from 'styled-components';

const PaginationButton = ({
  page,
  maxPage,
  prevButtonHandler,
  nextButtonHandler,
}) => {
  return (
    <div className="section-pagination">
      <div className="page-count">
        {page}/{maxPage}
      </div>
      <PrevButton
        onClick={prevButtonHandler}
        disabled={page === 1 ? true : false}
      />
      <NextButton
        onClick={nextButtonHandler}
        disabled={page === maxPage ? true : false}
      />
    </div>
  );
};

export default PaginationButton;

const PrevButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' /%3E%3C/svg%3E%0A");
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebeef3;
  background-color: white;
  cursor: pointer;

  &:disabled {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none'  viewBox='0 0 24 24' stroke-width='1.5' stroke='gray' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' /%3E%3C/svg%3E%0A");
    cursor: auto;
  }
`;
const NextButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' /%3E%3C/svg%3E%0A");
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebeef3;
  background-color: white;
  cursor: pointer;

  &:disabled {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='gray' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' /%3E%3C/svg%3E%0A");
    cursor: auto;
  }
`;

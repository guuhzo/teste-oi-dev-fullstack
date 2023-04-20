import React, { useCallback, useEffect, useState } from 'react'

import './style.css'

interface PaginationProps {
  totalItems: number
  currentPage: number
  onPageChange: (value: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / 10)
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const aditionalSibling =
    currentPage - 1 === 1 || currentPage + 1 === totalPages ? 1 : 0
  const siblingCount = (isFirst || isLast ? 4 : 2) + aditionalSibling
  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  const mountRange = (start: number, end: number) => {
    const length = end - start + 1

    setPageNumbers(Array.from({ length }, (_, idx) => idx + start))
  }

  const handlePaginate =
    useCallback((action: 'next' | 'prev' | 'first' | 'last') => {
      switch (action) {
        case 'next':
          onPageChange(currentPage + 1)
          break
        case 'prev':
          onPageChange(currentPage - 1)
          break
        case 'first':
          onPageChange(1)
          break
        case 'last':
          onPageChange(totalPages)
          break
        default:
      }
    }, [currentPage, onPageChange, totalPages])

  useEffect(() => {
    const rangeStart = isFirst || (currentPage - siblingCount) < 1
      ? 1
      : (currentPage - siblingCount)
    const rangeEnd = isLast || (currentPage + siblingCount) > totalPages
      ? totalPages
      : (currentPage + siblingCount)

    mountRange(rangeStart, rangeEnd)
  }, [currentPage, isFirst, isLast, siblingCount, totalPages])

  return (
    <div id="pagination-container">
      <div>
        <button
          className="pagination-button"
          onClick={() => { handlePaginate('first') }}
          disabled={isFirst}
        >
          {'<<'}
        </button>
        <button
          className="pagination-button"
          onClick={() => { handlePaginate('prev') }}
          disabled={isFirst}
        >
          {'<'}
        </button>
      </div>
      <ul id="pagination-list">
        {pageNumbers.map(number => (
          <li
            id="pagination-page-item"
            className={number === currentPage ? 'selected' : ''}
            key={number}
          >
            {number}
          </li>
        ))}
      </ul>
      <div>
        <button
          className="pagination-button"
          onClick={() => { handlePaginate('next') }}
          disabled={isLast}
        >
          {'>'}
        </button>
        <button
          className="pagination-button"
          onClick={() => { handlePaginate('last') }}
          disabled={isLast}
        >
          {'>>'}
        </button>
      </div>
    </div>
  )
}

export default Pagination

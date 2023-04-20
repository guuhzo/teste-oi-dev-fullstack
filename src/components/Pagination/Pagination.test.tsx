import React from 'react'
import { render, screen, within } from '@testing-library/react'
import Pagination from '.'

class Items {
  public total: number
  constructor(total: number) {
    this.total = total
  }

  public setTotalItems(value: number) {
    this.total = value
  }
}

describe('Pagination Component', () => {
  it('renders 4 items to the rigth when the current page is first', () => {
    const items = new Items(100)

    render(
      <Pagination
        currentPage={1}
        totalItems={items.total}
        onPageChange={items.setTotalItems}
      />)

    const list = screen.getByRole('list')
    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    const itemsContent = listItems.map(item => item.textContent)
    const currentIndex = itemsContent.findIndex(item => item === '1')
    const siblings = itemsContent.slice(currentIndex + 1).length

    expect(currentIndex).toBe(0)
    expect(siblings).toBe(4)
  })

  it('renders 3 items to the rigth when the current page is second', () => {
    const items = new Items(100)

    render(
      <Pagination
        currentPage={2}
        totalItems={items.total}
        onPageChange={items.setTotalItems}
      />)

    const list = screen.getByRole('list')
    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    const itemsContent = listItems.map(item => item.textContent)
    const currentIndex = itemsContent.findIndex(item => item === '2')
    const siblings = itemsContent.slice(currentIndex + 1).length

    expect(siblings).toBe(3)
  })

  it('renders 4 items to the left when the current page is last', () => {
    const items = new Items(100)

    render(
      <Pagination
        currentPage={10}
        totalItems={items.total}
        onPageChange={items.setTotalItems}
      />)

    const list = screen.getByRole('list')
    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    const itemsContent = listItems.map(item => item.textContent)
    const currentIndex = itemsContent.findIndex(item => item === '10')

    itemsContent.reverse()

    const currentIndexAfterReverse =
      itemsContent.findIndex(item => item === '10')
    const siblings = itemsContent.slice(currentIndexAfterReverse + 1).length

    expect(currentIndex).toBe(4)
    expect(siblings).toBe(4)
  })

  it('renders 3 items to the left when the current page is before last', () => {
    const items = new Items(100)

    render(
      <Pagination
        currentPage={9}
        totalItems={items.total}
        onPageChange={items.setTotalItems}
      />)

    const list = screen.getByRole('list')
    const { getAllByRole } = within(list)
    const listItems = getAllByRole('listitem')
    const itemsContent = listItems.map(item => item.textContent)

    itemsContent.reverse()

    const currentIndexAfterReverse =
      itemsContent.findIndex(item => item === '9')
    const siblings = itemsContent.slice(currentIndexAfterReverse + 1).length

    expect(siblings).toBe(3)
  })

  it(
    'renders 2 items on each side when the current page is in the middle',
    () => {
      const items = new Items(100)

      render(
        <Pagination
          currentPage={6}
          totalItems={items.total}
          onPageChange={items.setTotalItems}
        />)

      const list = screen.getByRole('list')
      const { getAllByRole } = within(list)
      const listItems = getAllByRole('listitem')
      const itemsContent = listItems.map(item => item.textContent)

      const currentIndex = itemsContent.findIndex(item => item === '6')
      const siblingsOnRigth = itemsContent.slice(currentIndex + 1).length

      itemsContent.reverse()

      const currentIndexAfterReverse =
        itemsContent.findIndex(item => item === '6')
      const siblingsOnLeft =
        itemsContent.slice(currentIndexAfterReverse + 1).length

      expect(siblingsOnLeft).toBe(2)
      expect(siblingsOnRigth).toBe(2)
    })

  it('have selected class when is current', () => {
    const items = new Items(100)

    render(
      <Pagination
        currentPage={2}
        totalItems={items.total}
        onPageChange={items.setTotalItems}
      />)

    const currentItem =
      screen.getAllByRole('listitem').find(item => item.textContent === '2')

    expect(currentItem).toHaveClass('selected')
  })
})

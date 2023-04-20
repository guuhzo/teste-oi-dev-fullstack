import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import PaginatedResponse from './services/api/types/paginatedResponse'
import CardList from './components/CardList'
import Pagination from './components/Pagination'
import { findAll } from './services/api'
import Header from './components/Header'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [apiResponse, setApiResponse] =
    useState<PaginatedResponse>({} as PaginatedResponse)

  const loadData = useCallback(async () => {
    const response = await findAll(currentPage)
    setApiResponse(response.data)

    setIsLoading(false)
  }, [currentPage])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <div className="container">
      <Header />
      <div className="content">
        {!isLoading &&
          <>
            <CardList items={apiResponse.results} />
            <Pagination
              totalItems={apiResponse.count}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </>
        }
      </div>
    </div>
  )
}

export default App

import { createContext, useState } from 'react'

export const BlogContext = createContext()
export const BlogProvider = ({ children }) => {
  const [all, setAll] = useState(false)

  return (
    <BlogContext.Provider value={{ all, setAll }}>
      {children}
    </BlogContext.Provider>
  )
}

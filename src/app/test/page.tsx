'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function TestPage() {
  const {data} = useQuery({
    queryKey: ['findAllPersons'],
    queryFn: async () => {
      try {
        const {data} = await axios.get('/api/persons')
    
        return JSON.stringify(data.data)
      } catch (err) {
        return JSON.stringify(err)
      }
    }
  })

  return <>{data}</>
}
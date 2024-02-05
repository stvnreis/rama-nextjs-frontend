'use client'

import { Api } from "@/app/lib/api"
import { UserCard } from "@/components/user/user-card/user-card"
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { getCookie } from "cookies-next"
import { useState } from "react"

export const MeusDadosTab = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState({})
  
  useQuery({
    queryKey: ['MeusDadosTabQuery'],
    queryFn: async () => {
      try {
        const {data} = await Api.get('/my-account', {
          headers: {
            auth: getCookie('auth') as string
          }
        })
  
        setData(data.data)
      } catch (error) {
        if(error instanceof AxiosError)
          setError(error.response?.data.message)
      }
      
    }
  })

  return data ? <UserCard user={data} /> : <></>
  
}
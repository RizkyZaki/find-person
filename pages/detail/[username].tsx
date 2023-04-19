import { useRouter } from 'next/router'
import React from 'react'

export default function Detail() {
  const router = useRouter()
  const {username} = router.query
  return (
    <div>
      <h1>Detail User : {username}</h1>
    </div>
  )
}

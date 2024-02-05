'use client'

import { Card, CardBody, Divider } from "@nextui-org/react"

export const UserCard = ({user}: {user: any}) => {
  return <Card>
    <CardBody>
      {user.name}
      <Divider />
      {user.email}
    </CardBody>
  </Card>
}
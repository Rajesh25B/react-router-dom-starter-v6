import { useParams } from "react-router-dom"

function Users() {
    const {userId} = useParams()
  return (
    <div>User with id: {userId}</div>
  )
}

export default Users
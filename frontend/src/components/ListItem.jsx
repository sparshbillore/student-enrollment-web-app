import React from 'react'
import { Link } from 'react-router-dom'

function ListItem({item}) {
  return (
<>
<td>{item.enrollment_id}</td>
        <td>{item.name}</td>
        <td>{item.class_name}</td>
        <td>{item.section}</td>
        <Link to={`/students/${item.enrollment_id}`} >
            click to see details
        </Link>
        </>

  )
}

export default ListItem
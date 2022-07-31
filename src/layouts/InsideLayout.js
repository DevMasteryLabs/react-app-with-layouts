import React from 'react'
import Sidebar from '../components/Sidebar'

function InsideLayout(props) {
  return (
    <div>
        <Sidebar />
        <main>
            {props.children}
        </main>
    </div>
  )
}

export default InsideLayout
import React from 'react'
import bootstrap from 'bootstrap'

export default function Inventory() {
  return (
    <div>
        <table className='table table-striped'>
           <thead>
            <tr className>
                <th>sn</th>
                <th>name</th>
                <th>quantity</th>
                <th>price</th>
            </tr>
            </thead>
            <tbody>
                <td>1</td>
                <td>chamal</td>
                <td>10</td>
                <td>200</td>
            </tbody>
        </table>
        
    </div>
  )
}

import React from 'react'

const ListItem = (props: any) => {
  const { name, text, created_at } = props
  return (
    <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black'}}>
      <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
        <div>{name}</div>
        <div>{created_at}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <div>{text}</div>
      </div>
    </div>
  )
}

const List = (props: any) => {
  const { listData = [] } = props
  return (
    <div style={{border: '1px solid red', flexGrow: 1}}>
      {
        listData.map ((item: any) => {
          return <ListItem {...item} />
        })
      }
    </div>
  )
}

export default List

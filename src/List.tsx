import React from 'react'

const ListItem = (props: any) => {
  const { name, text, created_at } = props
  return (
    <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', border: '1px solid lightgrey', borderRadius: '5px', padding: 10, margin: 10, boxShadow: '1px 1px 10px 1px darkgrey', maxWidth: '30em' }}>
      <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', padding: 5}}>
        <div style={{fontWeight: 'bold'}}>{name}</div>
        <div style={{fontStyle: 'italic'}}>{created_at}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', padding: 5}}>
        <div >{text}</div>
      </div>
    </div>
  )
}

const List = (props: any) => {
  const { listData = [] } = props
  return (
    <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {
        listData.map ((item: any) => {
          return <ListItem {...item} />
        })
      }
    </div>
  )
}

export default List

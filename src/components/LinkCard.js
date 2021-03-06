import React from 'react'

const LinkCard = ({link, refreshLinks}) => {

  const toggleArchiveLink = async () => {
    link.archived = !link.archived
    try {
      await fetch('/api/updateLink', {
        method: 'PUT',
        body: JSON.stringify(link)
      })
      refreshLinks()
    } catch (err) {
      console.error('Update error', err)
    }
  }

  const deleteLink = async () => {
    const id = link._id
    try {
      await fetch('/api/deleteLink', {
        method: 'DELETE',
        body: JSON.stringify({id})
      })
      refreshLinks()
    } catch (err) {
      console.error('Delete error', err)
    }
  }

  return (
    <div className="card">
      <div className=".card-header"> {link.name} </div>
      <div className="card-body">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-warning mr-2" onClick={toggleArchiveLink}> {link.archived?'UnArchive':'Archive'} </button>
        <button className="btn btn-danger" onClick={deleteLink}> Delete </button>
      </div>
    </div>
  )
}

export default LinkCard

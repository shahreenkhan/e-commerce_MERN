import React from 'react'
import { Helmet } from 'react-helmet'

function Metadata({ title }) {
  return (
    <>
      <Helmet>
        <title>{`${title}-FirstShop`}</title>
      </Helmet>
    </>
  )
}

export default Metadata

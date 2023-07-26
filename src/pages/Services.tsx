import React from 'react'
import { useParams } from 'react-router-dom'
import Service from '../components/Service'
import ServicesList from '../components/Service/ServicesList'

const Services = () => {
  const { slug } = useParams<{ slug: string }>()

  if (slug !== undefined && typeof slug === 'string') {
    return (
      <>
        <Service content={{ id: slug }} />
      </>
    )
  }

  return <ServicesList />
}

export default Services

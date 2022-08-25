import React from 'react'
import './services.css'
import ServicesList from './ServicesList'

const TECHSTACK = {

}

const PROFESSIONAL = {
  header: "Professional Experience? -> Broadening My Experience in the Field",
  items: [
    "Test"
  ]
}

const BUILDING = {
  header: "Building Products People Will Use",
  items: []
}

const data = [
  {
    header: "eSolutions",
    position: "Website Configuration Specialist",
    items: [
      "LOREM IPSUM",
      "LOREUM IPSUM2",
    ]
  },
  {
    header: "Infor",
    position: "Software Developer",
    items: [
      "LOREM IPSUM",
      "LOREUM IPSUM2",
    ]
  },
  {
    header: "Peel District School Board",
    position: "Camp Explore Leader",
    items: [
      "LOREM IPSUM",
      "LOREUM IPSUM2",
    ]
  }
]
const Services = () => {
  return (
    // technically, this would be services provided by a freelancer.
    <section id="services">
      <h5>My Past Employment</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        {
          data.map(({header, position, items}) => {
            return (
              <ServicesList header={header} position={position} items={items}></ServicesList>
            )
          })
        }

      </div>
    </section>
  )
}

export default Services
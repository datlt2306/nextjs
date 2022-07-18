import React from 'react'
import Layout from '../components/Layout'
import LayoutAdmin from '../components/Layout/admin'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
        <h1>About</h1>
    </div>
  )
}

About.Layout = LayoutAdmin

export default About
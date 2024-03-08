import React from "react"
import Card from "../shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <h1>About this Project</h1>
      <p>This is a React app to leave feedback for a location</p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage

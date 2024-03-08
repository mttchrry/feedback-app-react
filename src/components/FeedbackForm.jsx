import React from "react"
import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [msg, setMsg] = useState("")
  const [rating, setRating] = useState(10)

  const handleTextChange = (e) => {
    const v = e.target.value

    if (v === "") {
      setBtnDisabled(true)
      setMsg("")
    } else if (v.trim().length < 10) {
      setBtnDisabled(true)
      setMsg("Need at least 10 chars")
    } else {
      setBtnDisabled(false)
      setMsg("")
    }
    setText(v)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      handleAdd(newFeedback)
      setText("")
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating)
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { React, useContext, useState, UseEffect, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm({ handleAdd }) {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [msg, setMsg] = useState("")
  const [rating, setRating] = useState(10)

  useEffect(() => {
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text)
      setBtnDisabled(false)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

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
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        newFeedback.id = feedbackEdit.item.id
        updateFeedback(newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      // handleAdd(newFeedback)
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
            id="inputText"
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

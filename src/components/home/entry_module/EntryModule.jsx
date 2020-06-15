import React from "react"
import "./EntryModule.scss"
import Thumbnail from "../../../assets/images/thumbnail.jpeg"

const EntryModule = ({ setEntryModuleOpen }) => {
  return (
    <div className="entry-module">
      <i
        className="fas fa-times close fa-2x"
        onClick={() => setEntryModuleOpen(false)}
      ></i>
      <a href="https://www.etsy.com/shop/QwQiuting">Shop</a>
      <span onClick={() => setEntryModuleOpen(false)}>Website</span>
      <a href="https://www.instagram.com/qiuting.w.jewelry/">
        Jewelry Instagram
      </a>
      <a href="https://www.instagram.com/qwqiuting/">Illustration Instagram</a>
    </div>
  )
}

export default EntryModule

import React from "react";
import styles from "./textarea.module.css";

function Textarea({ isUnicode }) {
  const placeholder = isUnicode
    ? "ئەو نووسینەی بە کیبۆردی کوردی نووسیوتە یان بە فۆنتێکی یونیکۆد نووسیوتە لێرە دایبنێ تا بیگۆڕین بە ئەلیکەی"
    : "ئەو نووسینەی بە کیبۆردی عەرەبی نووسیوتە یان بە فۆنتێکی ئەلیکەی نووسیوتە لێرە دایبنێ تا بیگۆڕین بە یونیکۆد";
  
  const title = isUnicode ? "Unicode" : "AliK"; 

  return (
    <span className={styles.textareaContainer}>
      <div className={styles.textareaTitle}>{title}</div>
      <textarea className={styles.textarea} placeholder={placeholder}></textarea>
    </span>
  );
}

export default Textarea;

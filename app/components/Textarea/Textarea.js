"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateConversion } from "<styles>/lib/slices/conversionSlice";
import styles from "./textarea.module.css";
import { convertToUnicode, convertToAlik } from "<styles>/app/helper";

function Textarea({ isUnicode }) {
  const placeholder = isUnicode
    ? "ئەو نووسینەی بە کیبۆردی کوردی نووسیوتە یان بە فۆنتێکی یونیکۆد نووسیوتە لێرە دایبنێ تا بیگۆڕین بە ئەلیکەی"
    : "ئەو نووسینەی بە کیبۆردی عەرەبی نووسیوتە یان بە فۆنتێکی ئەلیکەی نووسیوتە لێرە دایبنێ تا بیگۆڕین بە یونیکۆد";
  
  const title = isUnicode ? "Unicode" : "AliK"; 

  const [textareaValue, setTextareaValue] = useState({ unicode: "", alik: "" });

  const storeValue = useSelector(state => state.conversion);
  const dispatch = useDispatch();
  // const resultString = convertTextFormat(inputString, replacements);

  console.log(storeValue);

  const onTextareaChangehandler = ({ target: { value } }) => {
    console.log("RECEIVED VALUE", value);
    let updatedValue = value;
    if (isUnicode) {
      updatedValue = { "unicode": value, "alik": convertToUnicode(value, false) };
    } else {
      updatedValue = { "alik": value, "unicode": convertToAlik(value, true) };
    }
    dispatch(updateConversion(updatedValue));

    setTextareaValue(updatedValue);
  } 

  return (
    <span className={styles.textareaContainer}>
      <div className={styles.textareaTitle}>{title}</div>
      <textarea
        value={isUnicode ? storeValue.unicode : storeValue.alik}
        onChange={onTextareaChangehandler}
        className={styles.textarea}
        placeholder={placeholder}
      ></textarea>
    </span>
  );
}

export default Textarea;

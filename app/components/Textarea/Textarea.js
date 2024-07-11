import React from 'react';
import styles from "./textarea.module.css";

function Textarea({ isUnicode }) {
  const placeholder = isUnicode 
            ? "ئەو نووسینەی بە کیبۆردی کوردی نووسیوتە یان بە فۆنتێکی یونیکۆد نووسیوتە لێرە دایبنێ تا بیگۆڕین بە ئەلیکەی"
            : "ئەو نووسینەی بە کیبۆردی عەرەبی نووسیوتە یان بە فۆنتێکی ئەلیکەی نووسیوتە لێرە دایبنێ تا بیگۆڕین بە یونیکۆد"
  return (
    <textarea className={styles.textarea} placeholder={isUnicode 
        ? "ئەو نووسینەی بە کیبۆردی کوردی نووسیوتە یان بە فۆنتێکی یونیکۆد نووسیوتە لێرە دایبنێ تا بیگۆڕین بە ئەلیکەی"
        : "ئەو نووسینەی بە کیبۆردی عەرەبی نووسیوتە یان بە فۆنتێکی ئەلیکەی نووسیوتە لێرە دایبنێ تا بیگۆڕین بە یونیکۆد"}/>
  );
}

export default Textarea;
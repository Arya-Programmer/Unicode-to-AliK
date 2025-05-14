"use client"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateConversion } from "@/lib/slices/conversionSlice"
import { convertToUnicode, convertToAlik } from "@/app/helper"
import styles from "./textarea.module.css"

const Textarea = ({ isUnicode }) => {
    const placeholder = isUnicode
        ? "ئەو نووسینەی بە کیبۆردی کوردی نووسیوتە یان بە فۆنتێکی یونیکۆد نووسیوتە لێرە دایبنێ تا بیگۆڕین بە ئەلیکەی"
        : "ئەو نووسینەی بە کیبۆردی عەرەبی نووسیوتە یان بە فۆنتێکی ئەلیکەی نووسیوتە لێرە دایبنێ تا بیگۆڕین بە یونیکۆد"

    const title = isUnicode ? "Unicode" : "AliK"
    const [isCopied, setIsCopied] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [charCount, setCharCount] = useState(0)

    const storeValue = useSelector((state) => state.conversion)
    const dispatch = useDispatch()

    useEffect(() => {
        setCharCount(isUnicode ? storeValue.unicode.length : storeValue.alik.length)
    }, [storeValue, isUnicode])

    const onTextareaChangehandler = ({ target: { value } }) => {
        let updatedValue = value
        if (isUnicode) {
            updatedValue = { unicode: value, alik: convertToUnicode(value, false) }
        } else {
            updatedValue = { alik: value, unicode: convertToAlik(value, true) }
        }
        dispatch(updateConversion(updatedValue))
    }

    const copyTextareaValue = () => {
        navigator.clipboard.writeText(isUnicode ? storeValue.unicode : storeValue.alik)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
    }

    const pasteTextareaValue = () => {
        navigator.clipboard.readText().then((data) => {
            onTextareaChangehandler({ target: { value: data } })
        })
    }

    return (
        <div className={styles.textareaContainer}>
            <div className={`${styles.textareaTitle} ${isUnicode ? styles.unicodeTitle : styles.alikTitle}`}>
                <span>{title}</span>
            </div>

            <div className={`${styles.textareaWrapper} ${isFocused ? styles.focused : ""}`}>
                <textarea
                    value={isUnicode ? storeValue.unicode : storeValue.alik}
                    onChange={onTextareaChangehandler}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={styles.textarea}
                    placeholder={placeholder}
                ></textarea>

                <div className={styles.textareaInfo}>
                    <span className={styles.charCount}>{charCount} characters</span>
                </div>
            </div>

            <div className={styles.actionsContainer}>
                <button
                    onClick={copyTextareaValue}
                    className={`${styles.actionButton} ${styles.copyIcon} ${isCopied ? styles.copied : ""}`}
                >
                    {isCopied ? <span className={styles.iconText}>✓ Copied</span> : <span className={styles.iconText}>Copy</span>}
                </button>

                <button onClick={pasteTextareaValue} className={`${styles.actionButton} ${styles.pasteIcon}`}>
                    <span className={styles.iconText}>Paste</span>
                </button>
            </div>
        </div>
    )
}

export default Textarea

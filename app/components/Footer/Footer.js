"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./footer.module.css"

const Footer = () => {
    const { push } = useRouter()
    const [hoverState, setHoverState] = useState({
        github: false,
        website: false,
        contact: false,
    })

    const currentYear = new Date().getFullYear()

    const handleMouseEnter = (link) => {
        setHoverState((prev) => ({ ...prev, [link]: true }))
    }

    const handleMouseLeave = (link) => {
        setHoverState((prev) => ({ ...prev, [link]: false }))
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerGlow}></div>

            <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                    <div className={styles.logoText}>AliK</div>
                    <div className={styles.logoIcon}>⟷</div>
                    <div className={styles.logoText}>Unicode</div>
                </div>

                <div className={styles.footerDescription}>
                    <p>ئامرازێکی سادە و خێرا بۆ گۆڕینی نووسین لە نێوان فۆرماتەکانی AliK و Unicode</p>
                </div>

                <div className={styles.footerLinks}>
                    <div
                        className={`${styles.footerLink} ${hoverState.github ? styles.linkHovered : ""}`}
                        onMouseEnter={() => handleMouseEnter("github")}
                        onMouseLeave={() => handleMouseLeave("github")}
                        onClick={() => push("https://github.com/arya-programmer")}
                    >
                        <div className={styles.linkIcon}>
                            <svg className={styles.githubIcon} viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                        <span className={styles.linkText}>GitHub</span>
                        <div className={styles.linkHighlight}></div>
                    </div>

                    <div
                        className={`${styles.footerLink} ${hoverState.website ? styles.linkHovered : ""}`}
                        onMouseEnter={() => handleMouseEnter("website")}
                        onMouseLeave={() => handleMouseLeave("website")}
                        onClick={() => push("https://aryakurdo.com")}
                    >
                        <div className={styles.linkIcon}>
                            <svg className={styles.websiteIcon} viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z" />
                            </svg>
                        </div>
                        <span className={styles.linkText}>aryakurdo.com</span>
                        <div className={styles.linkHighlight}></div>
                    </div>

                    <div
                        className={`${styles.footerLink} ${hoverState.contact ? styles.linkHovered : ""}`}
                        onMouseEnter={() => handleMouseEnter("contact")}
                        onMouseLeave={() => handleMouseLeave("contact")}
                        onClick={() => push("mailto:aryakurdo@gmail.com")}
                    >
                        <div className={styles.linkIcon}>
                            <svg className={styles.emailIcon} viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        <span className={styles.linkText}>پەیوەندی</span>
                        <div className={styles.linkHighlight}></div>
                    </div>
                </div>
            </div>

            <div className={styles.footerDivider}>
                <div className={styles.dividerLine}></div>
                <div className={styles.dividerDot}></div>
                <div className={styles.dividerLine}></div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.copyright}>
                    <span>© {currentYear} AliK-Unicode Converter</span>
                    <span className={styles.copyrightDot}>•</span>
                    <span>All Rights Reserved</span>
                </div>

                <div className={styles.footerNote}>
                    <span>Made with</span>
                    <div className={styles.heartIcon}>❤</div>
                    <span>for Kurdish language</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer


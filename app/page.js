import Navbar from "./components/Navbar"
import Textarea from "./components/Textarea"
import Footer from "./components/Footer"

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container-custom py-16">
                <div className="text-center mb-12">
                    <h1 className="font-peshang mb-4">
                        گۆڕینی نووسین لە نێوان <span className="text-primary font-gill">AliK</span> و{" "}
                        <span className="text-primary font-gill">Unicode</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300">
                        ئەم ئامرازە یارمەتیت دەدات بۆ گۆڕینی نووسین لە نێوان فۆرماتەکانی AliK و Unicode بە شێوەیەکی خێرا و ئاسان
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
                    <Textarea isUnicode={true} />
                    <Textarea isUnicode={false} />
                </div>

                <div className="mt-16 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                    <h2 className="text-xl font-bold mb-4 font-peshang">چۆن بەکاری بهێنین؟</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                        <li>دەقەکەت لە یەکێک لە خانەکان دابنێ</li>
                        <li>بە شێوەیەکی خۆکار دەگۆڕێت بۆ فۆرماتی تر</li>
                        <li>دەتوانیت دەقە گۆڕاوەکە کۆپی بکەیت بە کلیک کردن لەسەر دوگمەی کۆپی</li>
                    </ol>
                </div>
            </main>
            <Footer />
        </>
    )
}

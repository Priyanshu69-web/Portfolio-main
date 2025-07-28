
import { mySocials } from "../constants"
const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[10px] w-full" />
            <div className="flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                {mySocials.map((mySocials, index) => (
                    <a href={mySocials.href} target="_blank" key={index}>
                        <img src={mySocials.icon} className="w-5 h-5" alt={mySocials.name} />
                    </a>
                ))}
            </div>
            <p>© 2025 Ali. All rights reserved.</p>
        </section >
    )
}

export default Footer

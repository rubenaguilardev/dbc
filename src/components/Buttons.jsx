import { Mail, Linkedin } from "lucide-react"

const Buttons = () => {
    return (
        <section className="flex gap-4 bg-content-bg pt-1 pb-8 justify-center">
            <button 
                className="flex items-center gap-2 py-2.25 px-7 bg-white border rounded-md text-[14px] cursor-pointer"
            >
                <Mail className="h-4"/> Email
            </button>
            <button 
                className="flex items-center gap-2 py-2.25 px-7 text-white bg-[#5093E2] rounded-md text-[14px] cursor-pointer"
            >
                <Linkedin className="h-4"/> Linkedin
            </button>
        </section>
    )
}

export default Buttons
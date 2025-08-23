import { Send } from "lucide-react";

export function Contact(){
    return (
        <div>
            <div>Contact Me</div>
            <div>
                <div>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</div>
                <div>Your Name:</div>
                <input type="text" />
                <div>Your Email:</div>
                <input type="text" />
                <div>Your Message:</div>
                <textarea name="" id=""></textarea>
                <div>
                    <button>Send Message</button>
                    <Send />
                </div>
            </div>
        </div>
    )
}
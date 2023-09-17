'use client'
import Style from "@/app/all_resume_templates/elements/Contact/contact.module.css";
import { TiContacts } from "react-icons/ti";

export default function Contact() {


    return (
        <div className={Style.container}>
            <div className={Style.title_wrap}>
                <div className={Style.title}><TiContacts size={35} className={Style.icon} /> CONTACT</div>
            </div>
        </div>
    )
}
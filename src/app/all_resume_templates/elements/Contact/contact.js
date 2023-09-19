'use client'
import Style from "@/app/all_resume_templates/elements/Contact/contact.module.css";
import { TiContacts } from "react-icons/ti";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import Home_Style from "@/app/all_resume_templates/elements/elements.module.css";


export default function Contact() {


    return (
        <div className={Style.container}>
            <div className={Style.title_wrap}>
                <div className={Home_Style.title}>
                    <TiContacts size={35} className={Style.icon} /> CONTACT</div>
            </div>
            <div className={Style.email}>
                <div className={Style.icon}>
                    <MdOutlineAlternateEmail size={20} />

                </div>
                <div className={Style.inner_text}>Email</div>


            </div>
            <div className={Style.phone}>
                <div className={Style.icon}>
                    <FaSquarePhone size={20} />

                </div>
                <div className={Style.inner_text}>Phone</div>


            </div>
        </div>
    )
}
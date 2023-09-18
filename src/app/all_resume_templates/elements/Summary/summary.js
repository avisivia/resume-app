'use client'
import Style from "@/app/all_resume_templates/elements/Summary/summary.module.css";
import { IoIosContact } from "react-icons/io";

export default function Summary() {


    return (
        <div className={Style.container}>
            <div className={Style.title_wrap}>
                <div className={Style.title}>
                    <IoIosContact size={35} className={Style.icon} />
                    ABOUT ME</div>
            </div>
            <div className={Style.summary}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
            </div>
        </div>
    )
}
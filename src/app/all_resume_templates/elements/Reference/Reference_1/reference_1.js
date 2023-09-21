'use client'
import Style from "@/app/all_resume_templates/elements/Reference/Reference_1/reference_1.module.css";
import { GoCrossReference } from "react-icons/go";
import { FaSquarePhone } from "react-icons/fa6";
import Home_Style from "@/app/all_resume_templates/elements/elements.module.css";
export default function Reference_1(props) {


    return (
        <div className={Style.container} style={{ color: props.color_change }}>
            <div className={Style.title_wrap}>
                <div className={Home_Style.title}>
                    <GoCrossReference size={25} className={Style.icon} />
                    REFERENCES</div>
            </div>
            <div className={Style.work_content_wrap}>
                <div className={Style.position}>Name of the Person | Your Position</div>
                <div className={Style.company}><FaSquarePhone size={20} className={Style.icon} />Phone</div>
            </div>
        </div>
    )
}
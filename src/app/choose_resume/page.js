
import Style from "./select.module.css"
import Image from "next/image";
import Edit from "../edit_resume/[tag]/page";
import { BsPersonVcardFill } from "react-icons/bs";

const Select = () => {


    return (
        <div className={Style.container}>
            <div className={Style.header}>
                <a href="/">
                    <div className={Style.logo}>

                        <div className={Style.logo_image}>
                            < BsPersonVcardFill size={30} color={"white"} />
                        </div>
                        <div className={Style.logo_text}>Resume Builder</div>

                    </div>
                </a>
                <div className={Style.head_text}></div>
            </div>
            <div className={Style.body}>
                <div className={Style.body_title}>These resume templates are great for your role.
                    Which one would you like to start with?</div>
                <div className={Style.templates}>
                    <a href="/edit_resume/Resume_1">

                        <img
                            src="/resume.png"
                            alt="Resume builder"
                        />
                    </a>
                    <a href="/edit_resume/Resume_2">
                        <img
                            src="/resume_2.png"
                            alt="Resume builder"
                        />
                    </a>
                    {/* <img
                        src="/home_page_image.webp"
                        alt="Resume builder"
                    />
                    <img
                        src="/home_page_image.webp"
                        alt="Resume builder"
                    /> */}

                </div>




            </div>
        </div>)
}

export default Select;
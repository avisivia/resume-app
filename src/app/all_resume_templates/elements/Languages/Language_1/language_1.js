'use state'

import Style from "@/app/all_resume_templates/elements/Languages/Language_1/language_1.module.css";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import Home_Style from "@/app/all_resume_templates/elements/elements.module.css";

export default function Language_1() {




    return (
        <div className={Style.container}>
            <div className={Style.title_wrap}>
                <div className={Home_Style.title}>
                    <BsFillChatSquareTextFill size={22} className={Style.icon} />LANGUAGES
                </div>
            </div>
            <div className={Style.language_wrap}>
                <div className={Style.language}>
                    <li>English</li>
                    <li>Spanish</li>
                    <li>Hindi</li>
                    <li>Punjabi</li>
                </div>

            </div>
        </div>
    )
}
import Style from "@/app/all_resume_templates/resume_1/content_page.module.css";
import Education from "@/app/all_resume_templates/elements/Education/education";
import Achievements from "@/app/all_resume_templates/elements/Achievements/achievements";
import Title from "@/app/all_resume_templates/elements/Resume_title/title_1/title";
import Contact from "../elements/Contact/contact";
import Summary from "../elements/Summary/summary";
import Skill_1 from "../elements/Skills/Skill_1/skill_1";
import Language_1 from "../elements/Languages/Language_1/language_1";
import Work_1 from "../elements/Work_experience/Work_1/work_1";
import Reference_1 from "../elements/Reference/Reference_1/reference_1";
import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

const Content_page = React.forwardRef((props, ref) => {
    const handle_color = (color) => {
        console.log(color)
    }


    return (
        <div className={Style.page_wrap}>
            <div className={Style.color}>
                <li className={Style.black} onClick={() => handle_color("black")}><BsFillCircleFill size={25} /></li>
                <li className={Style.gray} onClick={() => handle_color("rgb(50, 50, 50)")}><BsFillCircleFill size={25} /></li>
                <li className={Style.blue} onClick={() => handle_color("rgb(0, 0, 102)")}><BsFillCircleFill size={25} /></li>
                <li className={Style.orange} onClick={() => handle_color("rgb(207, 59, 0)")}><BsFillCircleFill size={25} /></li>
                <li className={Style.green} onClick={() => handle_color("rgb(7, 66, 0)")}><BsFillCircleFill size={25} /></li>
            </div>

            <div className={Style.page_container} ref={ref}>

                <div><Title /></div>
                <div className={Style.container}>

                    <div className={Style.make_it_parallel}>
                        <div><Contact /></div>
                        <div><Skill_1 /></div>
                        <div><Achievements /></div>
                        <div><Language_1 /></div>
                    </div>
                    <div className={Style.make_it_parallel}>
                        <div><Summary /></div>
                        <div><Education /></div>
                        <div><Work_1 /></div>
                    </div>
                </div>
                <Reference_1 />
            </div>
        </div>

    );
});

Content_page.displayName = 'Content_page';

export default Content_page;

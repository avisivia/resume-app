'use state'

import Style from "@/app/all_resume_templates/elements/Skills/Skill_1/skill_1.module.css";
import { GiSkills } from "react-icons/gi";
import Home_Style from "@/app/all_resume_templates/elements/elements.module.css";
export default function Skill_1(props) {




    return (
        <div className={Style.container} style={{ color: props.color_change }}>
            <div className={Style.title_wrap}>
                <div className={Home_Style.title}>
                    <GiSkills size={30} className={Style.icon} />SKILLS
                </div>
            </div>
            <div className={Style.skills_wrap}>
                <div className={Style.skills}>
                    <li>Programming Languages</li>
                    <li>Database Management</li>
                    <li>Cybersecurity</li>
                    <li>Cloud Computing</li>
                    <li>DevOps and Automation</li>

                </div>

            </div>
        </div>
    )
}
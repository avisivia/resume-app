'use state'

import Style from "@/app/all_resume_templates/elements/Achievements/achievements.module.css";
import { GiAchievement } from "react-icons/gi";
import Home_Style from "@/app/all_resume_templates/elements/elements.module.css";
export default function Achievements() {




    return (
        <div className={Style.container}>
            <div className={Style.title_wrap}>
                <div className={Home_Style.title}>
                    <GiAchievement size={35} className={Style.icon} />ACHIEVEMENTS
                </div>
            </div>
            <div className={Style.achievement_wrap}>
                <div className={Style.achievements}>
                    <li>Project Successes</li>
                    <li>Certifications and Training</li>
                    <li>Process Improvements</li>
                    <li>Team Contributions</li>
                    <li>Awards and Recognitions</li>
                </div>

            </div>
        </div>
    )
}
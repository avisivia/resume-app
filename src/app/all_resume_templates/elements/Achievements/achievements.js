'use state'

import Style from "@/app/all_resume_templates/elements/Achievements/achievements.module.css";
import { GiAchievement } from "react-icons/gi";

export default function Achievements() {




    return (
        <div className={Style.container}>
            <div className={Style.title_wrap}>
                <div className={Style.title}>
                    <GiAchievement size={35} className={Style.icon} />ACHIEVEMENTS
                </div>
            </div>
        </div>
    )
}
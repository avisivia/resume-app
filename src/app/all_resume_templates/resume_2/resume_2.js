import Style from "@/app/all_resume_templates/resume_2/resume_2.module.css";
import Education from "@/app/all_resume_templates/elements/Education/education";
import Achievements from "@/app/all_resume_templates/elements/Achievements/achievements";
import Title_2 from "@/app/all_resume_templates/elements/Resume_title/title_2/title_2";
import Contact from "../elements/Contact/contact";
import Summary from "../elements/Summary/summary";

export default function Resume_2() {












    return (
        <div className={Style.page_container}>
            <div className={Style.container}>
                <div><Title_2 /></div>
                <div className={Style.make_it_parallel}>
                    <div><Contact /></div>
                    <div><Summary /></div>
                </div>


            </div>
        </div>
    );
};

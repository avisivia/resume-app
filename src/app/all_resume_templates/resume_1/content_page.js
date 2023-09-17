import Style from "@/app/all_resume_templates/resume_1/content_page.module.css";
import Education from "@/app/all_resume_templates/elements/Education/education";
import Achievements from "@/app/all_resume_templates/elements/Achievements/achievements";
import Title from "@/app/all_resume_templates/elements/Resume_title/title";
import Contact from "../elements/Contact/contact";
import Summary from "../elements/Summary/summary";

const Content_page = () => {












    return (
        <div className={Style.page_container}>
            <div className={Style.container}>
                <div><Title /></div>
                <div className={Style.make_it_parallel}>
                    <div><Contact /></div>
                    <div><Summary /></div>
                </div>
                <div className={Style.make_it_parallel}>
                    <div><Achievements /></div>
                    <div><Education /></div>
                </div>


            </div>
        </div>
    );
};

export default Content_page;

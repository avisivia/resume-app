import Style from "@/app/all_resume_templates/resume_2/resume_2.module.css";
import Title_3 from "../elements/Resume_title/title_3/title_3";
import Contact from "../elements/Contact/contact";
import React from 'react';

const Resume_2 = React.forwardRef((props, ref) => {

    return (
        <div className={Style.page_container} ref={ref}>
            <div className={Style.container}>

                <div className={Style.make_it_parallel}>
                    <div><Title_3 /></div>
                    <div className={Style.contact}><Contact /></div>


                </div>
                <div className={Style.about_me}>
                    {/* About Me */}
                </div>

            </div>
        </div>
    );
});


export default Resume_2;
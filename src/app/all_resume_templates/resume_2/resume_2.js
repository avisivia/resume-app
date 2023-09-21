import Style from "@/app/all_resume_templates/resume_2/resume_2.module.css";
import Title_3 from "../elements/Resume_title/title_3/title_3";
import Contact from "../elements/Contact/contact";
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { BsFillCircleFill } from "react-icons/bs";


const Resume_2 = React.forwardRef((props, ref) => {

    const [color, setColor] = useState("");
    const colorRef = useRef();


    const handle_color = useCallback((color) => {
        setColor(color);
        colorRef.current = color;
    })



    return (
        <div className={Style.page_wrap}>

            <div className={Style.color}>
                <li className={Style.black} onClick={() => handle_color("black")}><BsFillCircleFill size={25} /></li>
                <li className={Style.gray} onClick={() => handle_color("rgb(50, 50, 50)")}><BsFillCircleFill size={25} /></li>
                <li className={Style.blue} onClick={() => handle_color("rgb(0, 0, 102)")}><BsFillCircleFill size={25} /></li>
                <li className={Style.green} onClick={() => handle_color("rgb(7, 66, 0)")}><BsFillCircleFill size={25} /></li>
            </div>


            <div className={Style.page_container} ref={ref}>
                <div className={Style.container}>


                    <div className={Style.make_it_parallel}>
                        <div><Title_3 color_change={colorRef.current} /></div>
                        <div className={Style.contact} style={{ backgroundColor: colorRef.current }}><Contact /></div>


                    </div>
                    <div className={Style.about_me}>
                        {/* About Me */}
                    </div>

                </div>
            </div>
        </div>
    );
});

Resume_2.displayName = 'Resume_2';
export default Resume_2;
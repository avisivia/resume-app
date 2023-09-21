'use client'
import Style from "./edit.module.css";
import Resume_1 from "../../all_resume_templates/resume_1/resume_1";
import Resume_2 from "@/app/all_resume_templates/resume_2/resume_2";
import { useParams } from 'next/navigation';
import { BsPersonVcardFill, BsFillCircleFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import React, { useState } from "react";
import ReactToPrint from "react-to-print";



const Edit = () => {

    const colorRef = React.useRef();
    const [color, setColor] = useState()



    const componentRef = React.useRef();

    const params = useParams()

    let Edit_component

    if (params.tag == "Resume_1") {
        Edit_component = Resume_1
    } else if (params.tag == "Resume_2") {
        Edit_component = Resume_2
    } else {
        return (<>this page is not avalable yet</>)
    }
    const handle_color = (event) => {
        setColor(event)
        if (event != "undefined") {
            colorRef.current = event

        }

    }



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
                <div className={Style.head_line}></div>
            </div>
            <div className={Style.edit_heading}>
                <li className={Style.black} onClick={() => handle_color("black")}><BsFillCircleFill size={25} /></li>
                <li className={Style.gray} onClick={() => handle_color("rgb(50, 50, 50)")}><BsFillCircleFill size={25} /></li>
                <li className={Style.blue} onClick={() => handle_color("rgb(0, 0, 102)")}><BsFillCircleFill size={25} /></li>
                <li className={Style.orange} onClick={() => handle_color("rgb(194, 81, 0)")}><BsFillCircleFill size={25} /></li>
                <li className={Style.green} onClick={() => handle_color("rgb(7, 66, 0)")}><BsFillCircleFill size={25} /></li>
            </div>
            <div className={Style.body}>
                <div className={Style.menu}>
                    {/* menu */}
                </div>
                <div className={Style.edit_component}>
                    <div className={Style.download_button}>
                        <ReactToPrint
                            trigger={() => <FaFileDownload size={30} />}
                            content={() => componentRef.current}
                        />

                    </div>
                    <div className={Style.component} >
                        <Edit_component ref={componentRef} change_color={colorRef} />
                    </div>

                </div>
                <div className={Style.options} >
                    {/* options */}

                </div>



            </div>
        </div>

    )
}





export default Edit;
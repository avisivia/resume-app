'use client'
import Style from "./edit.module.css";
import Content_page from "../../all_resume_templates/resume_1/content_page";
import Resume_2 from "@/app/all_resume_templates/resume_2/resume_2";
import { useParams } from 'next/navigation'
import { Component } from "react";
const Edit = () => {
    const params = useParams()

    let Edit_component

    if (params.tag == "Content_page") {
        Edit_component = Content_page
    } else if (params.tag == "Resume_2") {
        Edit_component = Resume_2
    } else {
        return (<>this page is not avalable yet</>)
    }

    return (
        <div className={Style.container}>

            <div className={Style.header}>
                <a href="/">
                    <div className={Style.logo}>

                        <div className={Style.logo_image}><img src="/vercel.svg" alt="Picture of the author" /></div>
                        <div className={Style.logo_text}>Resume Builder</div>

                    </div>
                </a>
                <div className={Style.head_line}></div>
            </div>
            <div className={Style.edit_heading}>A4 Size CV</div>
            <div className={Style.body}>
                <div className={Style.menu}>menu</div>
                <div><Edit_component /></div>
                <div className={Style.options}>options</div>

            </div>
        </div>

    )
}

export default Edit;
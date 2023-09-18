'use state'
import Style from "@/app/all_resume_templates/elements/Resume_title/title_1/title.module.css";
import { useEffect, useState } from "react";
import { Editor } from 'react-editor'


export default function Title() {
    const [title, setTitle] = useState("")
    const placeholder = "YOUR NAME";

    useEffect(() => {
        let old_user_data = JSON.parse(localStorage.getItem("TITLE"))
        if (old_user_data == null) {
            localStorage.setItem("TITLE", JSON.stringify("YOUR NAME"))
        } else {
            setTitle(old_user_data)
        }

    }, [1])

    const handle_title = (event) => {
        let old_user_data = JSON.parse(localStorage.getItem("TITLE"))
        old_user_data = event
        localStorage.setItem("TITLE", JSON.stringify(old_user_data))
    }

    return (
        <div className={Style.container}>
            <div className={Style.name}>
                <Editor
                    title={title}
                    placeholder={placeholder}
                    value={title}
                    onChange={handle_title}
                />
            </div>
            <div className={Style.position}>TEACHER (IT / ENGLISH)</div>
        </div>
    )
}
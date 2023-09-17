'use client'
import Style from "@/app/all_resume_templates/elements/Education/education.module.css";
import { Editor } from 'react-editor'
import { useEffect, useState } from "react"
import { PiStudentFill } from "react-icons/pi";


export default function Education() {

    let [content, setContent] = useState([

        {
            "key": "EDUCATION",
            "place_holder": "EDUCATION"
        },
        {
            "field_content": "",
            "field_place_holder": "Write your study field",
            "university_content": "",
            "university_place_holder": "School or University Name"
        },
    ])

    useEffect(() => {                                                 // useEffect will check if there is any data in localstorage. If there is any data in the local storage, useEffect will get it and reflect that on the CV. Other wise will create a default data.
        try {
            let user_old_data = JSON.parse(localStorage.getItem("EDUCATION"))
            if (user_old_data == null) {
                localStorage.setItem('EDUCATION', JSON.stringify(content))
            }
            else {
                setContent(user_old_data)
            }
        } catch (error) {
            console.log(error)

        }

    }, [1])

    const handleHeading = (event) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("EDUCATION"))   // Getting data from local storage
            let new_value = event
            user_old_data[0].key = new_value
            localStorage.setItem("EDUCATION", JSON.stringify(user_old_data))   // Storing new data to local storage
        } catch (error) {
            console.log(error)
        }
    }


    const handle_heading_blur = (event) => {
        let value = event.target.innerHTML
        try {
            if (value == "") {
                let user_old_data = JSON.parse(localStorage.getItem("EDUCATION"))   // Getting data from local storage
                user_old_data[0].key = "EDUCATION"
                localStorage.setItem("EDUCATION", JSON.stringify(user_old_data))   // Storing new data to local storage
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handle_education_field = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("EDUCATION"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].field_content = new_value
            localStorage.setItem("EDUCATION", JSON.stringify(user_old_data))   // Storing new data to local storage


        } catch (error) {
            console.log(error)
        }
    }


    const handle_University = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("EDUCATION"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].university_content = new_value
            localStorage.setItem("EDUCATION", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_add_element = () => {
        let user_old_data = JSON.parse(localStorage.getItem('EDUCATION'))
        let newField =
        {
            "field_content": "",
            "field_place_holder": "Write your study field",
            "university_content": "",
            "university_place_holder": "School or University Name"
        }
        user_old_data.push(newField)                        // Pushing new fields in local storage variable
        setContent(user_old_data)                           // Pushing new fieds in useState
        localStorage.setItem('EDUCATION', JSON.stringify(user_old_data));   // Updateing local storage
    }



    const handle_delete_element = (index) => {
        let user_old_data = JSON.parse(localStorage.getItem('EDUCATION'))
        user_old_data.splice(index, 1)                        // Deleting the element according to the index value
        setContent(user_old_data)                           // Pushing new fieds in useState
        localStorage.setItem('EDUCATION', JSON.stringify(user_old_data));   // Updateing local storage

    }




    return (
        <div className={Style.container}>
            <div className={Style.title_wrap}>
                <div className={Style.title}>
                    <PiStudentFill size={35} className={Style.icon} /><Editor
                        title={content[0].key}
                        placeholder={content[0].place_holder}
                        className={Style.title}
                        value={content[0].key}
                        onChange={handleHeading}
                        onBlur={handle_heading_blur}

                    />

                </div>
                <button className={Style.button}
                    onClick={handle_add_element}
                >+
                </button>

            </div>


            {content.map((item, index) => (
                <div key={index} className={index > 1 ? (Style.content_with_border) : (Style.content)}>
                    {index != 0 ? (
                        <div className={Style.content_inside_wrap}>
                            <div className={Style.inner_content}>
                                <Editor
                                    title={item.field_content}
                                    placeholder={item.field_place_holder}
                                    className={Style.field}
                                    value={item.field_content}
                                    onChange={(e) => handle_education_field(e, index)}
                                />

                                <Editor
                                    title={item.university_content}
                                    placeholder={item.university_place_holder}
                                    className={Style.university}
                                    value={item.university_content}
                                    onChange={(e) => handle_University(e, index)}
                                />
                            </div>
                            <div><button onClick={() => handle_delete_element(index)} className={Style.delete_button}>-</button></div>

                        </div>



                    ) : (<></>)}

                </div>

            ))}






        </div>
    )
}

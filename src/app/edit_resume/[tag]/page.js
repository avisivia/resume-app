'use client'
import Style from "./edit.module.css";
import Resume_1 from "../../all_resume_templates/resume_1/resume_1";
import Resume_2 from "@/app/all_resume_templates/resume_2/resume_2";
import { useParams } from 'next/navigation';
import { BsPersonVcardFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";


function Edit() {

    const params = useParams()

    let Edit_component

    if (params.tag == "Resume_1") {
        Edit_component = Resume_1
    } else if (params.tag == "Resume_2") {
        Edit_component = Resume_2
    } else {
        return (<>this page is not avalable yet</>)
    }

    const handleprint = () => {
        let printContent = document.getElementById('print').innerHTML;
        var originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;

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
                {/* A4 Size CV */}


            </div>
            <div className={Style.body}>
                <div className={Style.menu}>
                    {/* menu */}
                </div>
                <div className={Style.edit_component}>
                    <div className={Style.download_button} onClick={() => handleprint()}>
                        <FaFileDownload size={30} />
                    </div>
                    <div className={Style.component} id="print">
                        <Edit_component />
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
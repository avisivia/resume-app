import Style from "./select.module.css"
import Image from "next/image";
const Select = () => {

    return (
        <div className={Style.container}>
            <div className={Style.header}>
                <a href="/">
                    <div className={Style.logo}>

                        <div className={Style.logo_image}><img src="/vercel.svg" alt="Picture of the author" /></div>
                        <div className={Style.logo_text}>Resume Builder</div>

                    </div>
                </a>
                <div className={Style.head_text}></div>
            </div>
            <div className={Style.body}>
                <div className={Style.body_title}>These resume templates are great for your role.
                    Which one would you like to start with?</div>
                <div className={Style.templates}>
                    <a href="/edit_resume">
                        <img
                            src="/home_page_image.webp"
                            alt="Resume builder"
                        />
                    </a>
                    <img
                        src="/home_page_image.webp"
                        alt="Resume builder"
                    />
                    <img
                        src="/home_page_image.webp"
                        alt="Resume builder"
                    />
                    <img
                        src="/home_page_image.webp"
                        alt="Resume builder"
                    />

                </div>




            </div>
        </div>)
}

export default Select;
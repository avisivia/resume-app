import Style from "./homepage.module.css"
import { BsPersonVcardFill } from "react-icons/bs";
const Homepage = () => {
    return (
        <div className={Style.container}>

            <div className={Style.header}>
                <div className={Style.logo}>
                    <div className={Style.logo_image}>< BsPersonVcardFill size={30} /></div>
                    <div className={Style.logo_text}>Resume Builder</div>
                </div>
                <div className={Style.webbutton}><a href="/choose_resume"><button>Create Resume</button></a></div>
            </div>
            <div className={Style.body}>
                <div className={Style.landingtext}>Resume Builder assists you in securing positions at leading enterprises.<div className={Style.home_page_button2}><a href="/choose_resume"><button>Get Started</button></a></div></div>

                <div className={Style.home_image}>
                    <img
                        src="/resume_2.png"
                        alt="Resume builder"
                    />
                </div>



            </div>
        </div>
    )
}

export default Homepage;
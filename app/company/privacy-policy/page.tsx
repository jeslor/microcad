"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const page = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Privacy policy</h1>
            <p>
            Microcad Computer Corporation is committed to protecting your privacy and developing technology that gives you the most powerful and safe online experience. This Statement of Privacy applies to the website microcad.ca and governs data collection and usage. By using the website, you consent to the data practices described in this statement.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/privacypolicy.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
    <h2 className="text-primayColor ">Collection of your Personal Information</h2>

        <ul className="text-primarymedium">
            <li>
                <Icon icon="dashicons:privacy" />
            <span>
            Microcad Computer Corporation collects personally identifiable information, such as your e-mail address, name, home or work address or telephone number.
            </span>
            </li>
            <li>
                <Icon icon="dashicons:privacy" />
                <span>
                Microcad Computer Corporation collects personally identifiable information, such as your e-mail address, name, home or work address or telephone number.
                </span>
            </li>
            <li>
                <Icon icon="dashicons:privacy" />
                <span>
                Microcad Computer Corporation collects and uses your personal information to operate the Web site and deliver the services you have requested. Microcad Computer Corporation also uses your personally identifiable information to inform you of other products or services.
                </span>
            </li>
            <li>
                <Icon icon="dashicons:privacy" />
                <span>
                Microcad Computer Corporation Web sites will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Microcad Computer Corporation or the site; (b) protect and defend the rights or property of Microcad Computer Corporation; and, (c) act under exigent circumstances to protect the personal safety of users of Microcad Computer Corporation, or the public.
                Use of Cookies
                </span>
            </li>
            <li>
                <Icon icon="dashicons:privacy" />
                <span>
                The Microcad Computer Corporation Web site use “cookies” to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a Web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
                </span>
            </li>
        </ul>
    </section>

   </div>
  )
}

export default page
"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Digital Signage</h1>
            <p>
            Digital Signage (utilized technologies such as LCD, LED, PLASMA DISPLAYS, or PROJECTED IMAGES to display content) can be found in both public and private environments, including retail stores, hotels, restaurants, corporate buildings, and other locations.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/digitalsignage.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Why busineses love It?</h2>
        <ul className="text-primarymedium">
            <li>
                <Icon icon="ant-design:setting-outlined" />
            <span>
              You control your message.
            </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                  Digital Signage is all about getting the right message to the right people at the right place and time                
                </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                  It is 52% more memorable compared to other forms of advertisement like Magazines, TV, Radio, and Newspapers.
                </span>
            </li>
        </ul>
    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`mt-7 pb-7 ${styles.category}`}>
            <h3 className="pb-1 text-primayColor">Choosing the right solution</h3>
            <p className="text-primarymedium
            pb-3">
              Our vision with Digital Signage is far more than pretty pictures on screens, but it forms part of a company's visual communication strategy and reaches out to cus-tomers, visitors, employees and thus shaping the image of your company.            
            </p>
            <p className="text-primarymedium">
            From outdoor notice boards and outdoor displays to indoor digital signage to the content that plays on them, Microcad has the unique products the multimedia designers and our state of the art software that has no equal.            </p>
       </div>
      </section>
      <section className={styles.signageTypes}> 
        <h3 className="text-primayColor"> Available types</h3>
        <div>
          <article className="border-solid border-2 border-slate-300 shadow-lg">
            <h6 className="text-primarymedium pb-2">
              Ultra stretched Display
            </h6>
            <p className="text-primaryLight pb-4">
            The ullrs strelch signage combines strelched display and digilal signage lo creale a powerful. Mexible and affordable solution. We offer many different configuralions and Tealures, as well as professional installation advice and aller-sales service allowing you lo deploy your project quickly and easik
            </p>
            <img src="/static/media/images/ultrawideSignage.webp" alt="" />
          </article>
          <article className="border-solid border-2 border-slate-300 shadow-lg">
            <h6 className="text-primarymedium pb-2">
              Bus Digital Signage
            </h6>
            <p className="text-primaryLight pb-4">
            This bus digital signage is designed for buses and other similar vehicles. It has all the standard features of a common digital signage and the advantages of adapting to the bus environ-ment, such as adapting to bumps, adapting to bus power and wireless network updates. We also offer advanced features such as passenger counting and location-based advertising            </p>
            <img src="/static/media/images/busSignage.webp" alt="" />
          </article>
          <article className="border-solid border-2 border-slate-300 shadow-lg">
            <h6 className="text-primarymedium pb-2">
              Wall Mounted Signage
            </h6>
            <p className="text-primaryLight pb-4">
            As a classic style, the wall-mounted digital
            signage has a strong vitallty. It can easlly
            adapt to application needs and Is widely used In varlous Industries, such as retall.
            finance, corporate, transportation, medical
            and education.            
            </p>
            <img src="/static/media/images/wallmountedSignage.webp" alt="" />
          </article>
          <article className="border-solid border-2 border-slate-300 shadow-lg">
            <h6 className="text-primarymedium pb-2">
              Floor stand Signage
            </h6>
            <p className="text-primaryLight pb-4">
            The floor-standing digital signage has been widely welcomed because of its good advertising effect and its ease of move ment. Coupled with touch screens and well-crafted software, it can provide query navigation service for a variety of places, such as shopping malls, hospitals, schools. and more.            </p>
            <img src="/static/media/images/standingSignage.webp" alt="" />
          </article>
          <article className="border-solid border-2 border-slate-300 shadow-lg">
            <h6 className="text-primarymedium pb-2">
              Portable Digital poster
            </h6>
            <p className="text-primaryLight pb-4">
            The porTable digital poster is an alternative and upgrade lo the more traditional LED writing board. It's display is clearer than handwriting, it can play videos, and it can automatically update menus and prices. incressing service efficiency and appeal.            </p>
            <img src="/static/media/images/portableSignage.webp" alt="" />
          </article>
        </div>
      </section>

   </div>
  )
}

export default Page
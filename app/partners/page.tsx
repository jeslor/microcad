
import styles from "@/styles/partners.module.css"
const page = () => {
  return (
    <div className={styles.pageHeight}>
        <div className={`${styles.header} bg-primayColor text-slate-200`}>
            <div className={styles.layer1}>
                <img src="/static/media/backgrounds/partners.webp" alt="" />
            </div>
            <div className="layer2"></div>
            <div className={` ${styles.title} customwidth`}>
                <h1>Partners</h1>
                <p>Microcad has developed many deep partnerships and strategic alliances within the Information Technology industry. Whether it's servers, desktops, laptops, network components or any number of other peripheral devices, Microcad can acquire, configure and deploy hardware from practically any manufacturer to meet your requirements. We have made it a "best practice" within our organization to help customers achieve the best possible solution by lending our expertise when it comes to negotiating with their chosen vendor partners.</p>
                <div className={styles.imageHolder}>
                    <img src="/static/media/images/partners.webp" alt="partners" />
                </div>
            </div>
        </div>
        <section className="customwidth mx-auto">
            <div className={styles.partnerbarner}>
                <h5>Microcad is an "Authorized Service Partner" for:</h5>
                <div className={styles.partnerbarnerCompanies}>
                    <div className={`${styles.logoHolder} bg-slate-300`}>
                        <img src="/static/media/icons/lenovo.png" alt="" />
                    </div>
                    <div className={`${styles.logoHolder} bg-slate-300`}>
                        <img src="/static/media/icons/toshiba.png" alt="" />
                    </div>
                    <div className={`${styles.logoHolder} bg-slate-300`}>
                        <img src="/static/media/icons/acer.png" alt="" />
                    </div>
                    <div className={`${styles.logoHolder} bg-slate-300`}>
                        <img src="/static/media/icons/xerox.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
   
  )
}

export default page
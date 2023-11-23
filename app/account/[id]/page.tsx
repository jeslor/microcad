"use client"
import {useEffect, useState} from "react";
import styles from "@/styles/account.module.css"
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Spinner from "@/components/single/spinner/spinner";
import PersonalInformation from "@/components/account/personalInformation";
import BillingInformation from "@/components/account/billingInformation";
import GiftcardInformation from "@/components/account/giftcardInfrmation";
import OrderHistory from "@/components/account/orderHistoryInformation";
import { getLoggedInUser } from "@/lib/actions/user.actions";


const page = () => {
  const [sections, setSections] = useState<any>({
    personalInformation: true,
    billingInformation: false,
    orderHistory: false,
    giftCards: false,
  });
    const [user, setUser] = useState<any>(null);
    const session = useSession();

    const {id} = useParams();
    const getUser = async () => {
      console.log('reached');
      
      const res = await getLoggedInUser(id as string);
      setUser(res);
    }

    useEffect(()=>{
      getUser();
    }, [id])
    

    const handleSwitchSection = (section: string) => {
      const newSections = {...sections};
      Object.keys(newSections).forEach(key => {
        if(key === section){
          newSections[key] = true;
        }else{
          newSections[key] = false;
        }
      })
      setSections(newSections);
    }


    const sectionClasses = (section: string) => {
      return sections[section] ? styles.activeSection : "";
    }
    
    
    
  return  <h1>{user.firstName}</h1>
}

export default page












// user === null?(
//   <Spinner />
// ):(

// <div className={styles.accountContent}>
//   <div className={styles.accountLeft}>
//     <div className={styles.profilePhoto}>
//       <img src="/static/media/icons/user.svg" alt="" />
//     </div>
//     <h2 className={styles.userName}>
//         {`${user?.firstName} ${user?.lastName}`}
//     </h2>
//       <p className={styles.userEmail}> {user?.email}</p>

//     <div className={styles.accountDetails}>
//         <ul>
//           <li className={`${sectionClasses('personalInformation')}`}  onClick={()=>handleSwitchSection("personalInformation")}>
//             Persional Information
//           </li>
//           <li className={`${sectionClasses('billingInformation')}`}  onClick={()=>handleSwitchSection("billingInformation")}>
//             Billing & Payments
//           </li>
//           <li className={`${sectionClasses('orderHistory')}`}  onClick={()=>handleSwitchSection("orderHistory")}>
//             Oreder history
//           </li >
//           <li className={`${sectionClasses('giftCards')}`}  onClick={()=>handleSwitchSection("giftCards")}>
//             Gift Cards
//           </li>
          
//         </ul>
//     </div>


//   </div>
//   <div className={styles.accountRight}>
//     {
//       sections.personalInformation && <PersonalInformation user={user} />
//     }
//     {
//       sections.billingInformation && <BillingInformation user={user} />
//     }
//     {
//       sections.orderHistory && <OrderHistory user={user} />
//     }
//     {
//       sections.giftCards && <GiftcardInformation user={user} />
//     }
//   </div>
// </div>
// )
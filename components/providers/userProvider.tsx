"use client"
import { getServerSession } from "next-auth";
import { useState, createContext, useEffect } from "react";

export const UserContext = createContext({ user: null });

export const UserProvider =  ({ children }:any) => {
  const [user, setUser] = useState<any>(null);
    let currUser:any = null;


const gettingSession = async () => {
    const session = await getServerSession();
     currUser = session?.user ?? null;
    console.log(currUser);
}


   

    useEffect(() => {
        gettingSession();
        setUser(currUser);
        }
    , [currUser]);

  

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
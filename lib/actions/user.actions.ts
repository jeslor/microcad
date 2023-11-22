import User from '../models/user.model';


export const getUser = async (id: string) => {
    const res  =  await User.findById(id);
    console.log(res);
    
    const user = JSON.parse(JSON.stringify(res));
    return user;

}
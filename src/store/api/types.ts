export interface IUser {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: Date;
    city: string;

}

export interface IGetUserResponse {
    status: number,
    message: IUser
   
}

export interface ILoginUserResponse{
    status: number;
    message: IUser;
}
export interface ILoginUserPayload{
    email: string;
    password: string;
}

export interface IRegisterUserResponse{

}

export interface IRegisterUserPayload{
    name: string;
    email: string;
    phone_number: string;
    password: string;
    user_city: string;

}

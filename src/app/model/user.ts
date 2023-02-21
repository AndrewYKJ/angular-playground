export interface User{
    userName: String,
    passWord: String,
    displayName: String
}

export interface CompanyProfile {
    id: number | undefined;
    companyName?: string;
    phoneNo?: string;
    email?: string;
    website?: string;
    socialmedia?: Socialmedia[];
   
}

export interface Socialmedia {
    type?: string;
    link?: string;
}

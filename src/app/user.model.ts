export interface AuthModel{
    username: string;
    password: string;
}
export interface UserModel {
    gender: string;
    name: NameOfUser;
    location: Loaction;
    email: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
    registered: number;
    dob: number;
    phone: string;
    cell: string;
    AVS: string;
    picture: Picture;
}
export interface NameOfUser {
    title: string;
    first: string;
    last: string;
}
export interface Loaction {
    street: string;
    city: string;
    state: string;
    zip: number;
}
export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

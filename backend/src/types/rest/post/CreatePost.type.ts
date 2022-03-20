import { Status } from "../../post/Status.enum";

export interface ICreatePost{
    title:string,
    description?:string,
    contact?:string,
    status:Status,
    tags?:string[]
}
import axios from "axios";
import MDT from "../Models/ModelTour";
import id from "../Models/ModelTour";
import { IRepository } from "./IRepository";
import { userData } from "../helper";

const user = userData()


export class CampRepository implements IRepository <MDT> {
    urlPrefix = "http://localhost:1337/api/activities?populate=*"
    token = user.jwt

    async getAll(): Promise<MDT[] | null> {
        const resp = await fetch(`${this.urlPrefix}`);
        const data = await resp.json();
        return data.data;
    }
    async get(): Promise<MDT[] | null>{
        const resp = await fetch(`${this.urlPrefix}/MDT/`)
        const data = await resp.json();
        return data.data
    }
}


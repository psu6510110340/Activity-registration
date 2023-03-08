import axios from "axios";
import MDT from "../Models/ModelTour";
import id from "../Models/ModelTour";
import { IRepository } from "./IRepository";
import { userData } from "../helper";
import conf from "../conf";

const user = userData()


export class CampRepository implements IRepository <MDT> {
    urlPrefix = `${conf.apiPrefix}/api/activities?populate=*`
    token = user.jwt

    async getAll(): Promise<MDT[] | null> {
        const resp = await fetch(`${this.urlPrefix}`);
        const data = await resp.json();
        return data.data;
    }
    async get(id: string): Promise<MDT[] | null>{
        const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`);
        const data = await resp.json();
        return data.data

    }
    async delete(id: string): Promise<MDT[] | null>{
        const resp = await fetch(`${conf.apiPrefix}/api/activities/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        });
        const data = await resp.json();
        return data.data
    }
    }




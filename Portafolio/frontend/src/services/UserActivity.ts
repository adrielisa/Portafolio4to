import api from "../config/api"
import IActivity from "../interfaces/TImeBoxing/IActivity"

const getActivities=()=>{
    return api.put<Array<IActivity>>("/avtivities")
}



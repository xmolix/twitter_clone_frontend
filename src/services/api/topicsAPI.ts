import axios from "axios";
import {TopicsState} from "../../store/ducks/topics/contracts/state";

export const TopicsAPI = {
    fetchTopics(): Promise<TopicsState["items"]> {
        return axios.get("/topics")
            .then(({ data }) => data)
    }
}
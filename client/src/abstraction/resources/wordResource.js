import { SetQueriesObject } from "@/utils/setQueriesObject";
export const getJson = (data) => ({
    _id: data._id,
    title: data.title,
    description: data.description,
    relations: data.relations,
    created_at: data.created_at,
    update_at: data.update_at,
});
export const getArray = ({ meta, data }) => {
    const pagination = meta;
    data = data.map((word) => getJson(word));
    return { data, pagination };
};
export const setData = (data) => ({
    title: data.title,
    description: data.description,
    relations: data.relations,
});
export const setQuery = (data) => {
    return SetQueriesObject(data);
};
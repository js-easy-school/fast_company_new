import httpService from "./http.service";

const professionEndpoint = "profession/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(professionEndpoint);
        return data;
    }
};
export default userService;

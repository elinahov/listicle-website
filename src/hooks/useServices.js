import { ErrorContext, ServicesContext } from "@/app/providers";
import { getServices, updateService } from "@/http/services";
import { useContext } from "react";

export const useServices = () => {
    const { services, setServices } = useContext(ServicesContext);
    const { setError } = useContext(ErrorContext);

    const getServiceList = async () => {
        try {
            const res = await getServices()
            setServices(res.data);
        } catch (e) {
            setError('Failed to fetch services')
        }
    }


    const onFavorite = async (service) => {
        try {
            await updateService(service?._id, { liked: !service?.liked });
            getServiceList();
        } catch (err) {
            setError('Unable to save the item')
        }
    }

    return ({
        services,
        getServices: getServiceList,
        saveService: onFavorite,
    })
}
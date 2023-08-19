import { ErrorContext, ServicesContext } from "@/app/providers";
import { addService, deleteService, getServices, updateService } from "@/http/services";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export const useServices = () => {
    const router = useRouter();
    const { services, setServices } = useContext(ServicesContext);
    const { setError } = useContext(ErrorContext);
    const [buttonDisabled, setButtonDisabled] = useState(false);

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

    const postService = async (data) => {
        try {
            setButtonDisabled(true);
            const formData = new FormData();
            const formKeys = Object.keys(data);
            formKeys.forEach(key => {
                formData.append(key, data[key])
            })
            await addService(formData);
            getServiceList();
            router.push('/home');
            setButtonDisabled(false);
        } catch (e) {
            setButtonDisabled(false);
            setError('Unable to add the service')
        }

    }

    const removeService = async (id) => {
        try {
            await deleteService(id);
            getServiceList();
        } catch (e) {
            setError('Unable to delete the service');
        }
    }

    return ({
        services,
        getServices: getServiceList,
        saveService: onFavorite,
        addService: postService,
        removeService,
        buttonDisabled,
    })
}
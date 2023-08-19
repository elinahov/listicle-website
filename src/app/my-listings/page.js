'use client'
import Header from "@/components/Header";
import styles from './page.module.scss';
import { useContext, useEffect, useState } from "react";
import Card from "@/components/Card";
import ProtectedRoute from "@/hoc/ProtectedRoute";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/http";
import { useServices } from "@/hooks/useServices";
import { getProfile } from "@/http/auth";
import { ErrorContext } from "../providers";

const MyListings = () => {
    const router = useRouter();
    const { setError } = useContext(ErrorContext);
    const { services, getServices, removeService } = useServices();
    const [profile, setProfile] = useState();
    const [myListings, setMyListings] = useState([]);

    useEffect(() => {
        fetchProfile();
        getServices();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await getProfile()
            setProfile(res.data)
        } catch(e) {
            setError('Unable to fetch profile')
        }
    }

    useEffect(() => {
        const filtered = services.filter(item => item.owner === profile?._id);
        setMyListings(filtered);
    }, [services, profile])

    const onDelete = (e, service) => {
        e.stopPropagation();
        removeService(service?._id)
    }

    return (
        <div className={styles.myListingsContainer}>
            <Header />

            <h2 className={styles.title}>My Listings</h2>

            <div className={styles.listings}>
                {myListings.map(item => (
                    <Card
                        key={item._id}
                        title={item.title}
                        subtitle={`$${item.price.toLocaleString('en-US') }`}
                        image={`${BASE_URL}/${item.image?.path}`}
                        isFavorite={item?.liked}
                        isDeletable
                        onClick={() => {
                            router.push(`/services/${item?._id}`)
                        }}
                        onActionClick={(e) => onDelete(e, item)}
                    />
                ))}

                {!myListings?.length && (
                    <p className={styles.notFound}>No matches found.</p>
                )}
            </div>
    
        </div>
    )
}

export default ProtectedRoute(MyListings);
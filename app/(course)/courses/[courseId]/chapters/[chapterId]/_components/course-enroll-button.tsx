"use client"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/format"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export const CourseEnrollButton = ({
    price,
    courseId
}:{
    price: number,
    courseId: string
}) => {

    const router = useRouter();

    const onClick = async()=>{
        toast.success

        try {
            await axios.post(`/api/courses/${courseId}/purchase`);
            toast.success("payment successfull")

            router.refresh();

        } catch(error){
            toast.error(`Something went wrong`)
        }
    }

    return (
        <Button onClick={onClick} size="sm" className="w-full md:w-auto">
            Enroll for {formatPrice(price)}
        </Button>
    )
}
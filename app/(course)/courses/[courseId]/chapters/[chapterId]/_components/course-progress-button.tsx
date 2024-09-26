"use client"

import { Button } from "@/components/ui/button";
import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseProgressButtonProps{
    chapterId: string;
    courseId : string;
    isCompleted?: boolean;
    nextChapterId?: string
}

export const CourseProgressButton = ({
    chapterId,
    courseId,
    nextChapterId,
    isCompleted
}:CourseProgressButtonProps) => {

    const Icon = isCompleted? XCircle : CheckCircle;
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onClick = async() => {
        try {
            setLoading(true);

            await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`,{
                isCompleted : !isCompleted
            }); 

            if(!isCompleted && nextChapterId){
                router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
            }

            toast.success("progress updated");
            router.refresh();

            
        } catch (error) {
            toast.error("something went wrong")
        }
        finally{
            setLoading(false);
        }
    }


    return (
        <Button
        type="button"
        onClick={onClick}
        disabled={loading}
        variant={isCompleted? "outline" : "success"}
        className="w-full md:w-auto"
        >
            {isCompleted? "Not completed" : "Mark as complete"}
            <Icon className="h-4 w-4 ml-2 "/>
        </Button>
    )
}
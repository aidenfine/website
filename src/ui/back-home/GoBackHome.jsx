import { useNavigate } from "react-router-dom"

export const GoBackHome = () => {
    const navigate = useNavigate()
    const goBack = () => {

        navigate(-1);
    }
    return (
        <div className="flex justify-center pt-10">
            <p className="underline text-xs text-blue-500 cursor-pointer" onClick={goBack}>
                Go Back
            </p>
        </div>
    )
}
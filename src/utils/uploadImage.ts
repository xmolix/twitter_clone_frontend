import { axios } from "../core/axios"

type UploadImageReturnProps = {
    url: string,
    size: string,
    height: number,
    width: number,
}

export const uploadImage = async (images: File): Promise<UploadImageReturnProps> => {
    const formData = new FormData()
    formData.append("images", images)

    const { data } = await axios.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })

    return data
}
import {TRekoHandler} from "./type";

export const onChangeHandler = (event : React.ChangeEvent<HTMLInputElement>, setState : React.Dispatch<React.SetStateAction<TRekoHandler>>) => {
    if (event.target.files !== null) {
        const image = getByteArray(event.target.files[0]);
        setState(e => ({
            ...e,
            image,
        }));
    }
}

export function getByteArray(file: File) {
    const imageUrl = URL.createObjectURL(file);
    return imageUrl;
    // return await new Response(file).arrayBuffer();
}
import { photoType } from "./type";

export function showRandomPhoto(photoArr: photoType[]) {
    const randomNumber = Math.floor(Math.random() * photoArr?.length!)

    return photoArr[randomNumber].url
}
import { Work } from "./types";
// ちょっといったんこれは使わない
export const getAllWorks = async (): Promise<Work[]> => {
    const res = await fetch(`http://localhost:3001/posts`)
    return res.json();
}
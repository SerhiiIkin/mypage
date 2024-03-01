import jwt from "jsonwebtoken";
import { tokenT } from "../../../modules/modules";

export default function userLogin(req: any, res: any) {
    const secret = process.env.NEXT_PUBLIC_SECRET;
    const letters = /^[A-Za-zØøÅåÆæ\s]+$/;

    if (letters.test(req.body.usernameInput)) {
        const roomId = `${req.body.usernameInput}${new Date()
            .toDateString()
            .replace(/ /g, "")}${new Date()
            .toLocaleTimeString()
            .replace(/ /g, "")}`;
        const token: tokenT = {
            value: jwt.sign(roomId, secret),
            expiry: new Date().getTime() + 24 * 60 * 60 * 1000,
            message: "Success",
        };
        return res.status(200).json({ token });
    } else {
        const token: tokenT = {
            value: "",
            expiry: null,
            message: "fejl med  login",
        };
        return res.status(500).json({ token });
    }
}

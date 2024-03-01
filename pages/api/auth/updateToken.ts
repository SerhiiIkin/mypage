import jwt from "jsonwebtoken";
import { tokenT } from "../../../modules/modules";

export default function userLogin(req: any, res: any) {
    const secret = process.env.NEXT_SECRET;

    const token: tokenT = {
        value: jwt.sign(req.body.roomId, secret),
        expiry: new Date().getTime() + 24 * 60 * 60 * 1000,
        message: "Updated",
    };

    return res.status(200).json({ token });
}

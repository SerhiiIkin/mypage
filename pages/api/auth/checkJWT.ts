import jwt from "jsonwebtoken";

export default function checkJWT(req: any, res: any) {
    const loginName = process.env.NEXT_PUBLIC_MYLOGIN;
    const secret = process.env.NEXT_PUBLIC_SECRET;

    const token = jwt.verify(req.body.localToken, secret);
    if (token === loginName) {
        return res.status(200).json({ token });
    }

    return res.status(500).json("fejl login");
}

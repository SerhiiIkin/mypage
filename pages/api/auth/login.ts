import jwt from "jsonwebtoken";

export default function login(req: any, res: any) {
    const loginName = process.env.NEXT_PUBLIC_MYLOGIN;
    const pass = process.env.NEXT_PUBLIC_MYPASSWORD;
    const secret = process.env.NEXT_PUBLIC_SECRET;

    if (req.body.usernameInput === loginName && req.body.password === pass) {
        const token = jwt.sign(loginName, secret);
        return res.status(200).json({ token });
    }

    return res.status(500).json("fejl login");
}

import { messageT, userT } from "../../../modules/modules";
import { Server } from "socket.io";

export default function SocketHandler(req: any, res: any) {
    if (res.socket.server.io) {
        res.end();
        console.log("Socket server already started!");

        return;
    }

    let users: userT[] = [];

    const io = new Server(res.socket.server, {
        connectionStateRecovery: {},
        cors: { origin: "*", methods: ["GET", "POST"] },
    });
    res.socket.server.io = io;

    io.on("connection", (socket) => {
        socket.on("join_room", (user) => {
            socket.join(user.roomId);

            const isUser = users.find((u) => u.id === user.id);

            if (!isUser) {
                user.id = socket.id;
                users.push(user);
                socket.broadcast.emit("new_user_joined", users);
            }
        });

        socket.on("online", () => {
            socket.broadcast.emit("online");
        });
        socket.on("offline", () => {
            socket.broadcast.emit("offline");
        });

        socket.on("typing", (user: userT) => {
            socket.to(user.roomId).emit("typing", user);
        });

        socket.on("stopTyping", (user: userT) => {
            socket.to(user.roomId).emit("stopTyping");
        });

        socket.on("get_user", (token) => {
            const currentUser = users.find(
                (user) => user.token === token.value
            );

            if (!currentUser) return;
            socket.emit("current_user", currentUser);
            socket.join(currentUser.roomId);
        });

        socket.on("send_msg", (data: messageT) => {
            users = users.map((user) => {
                if (user.roomId === data.roomId) {
                    user.messages = [...user.messages, data];
                    return user;
                }
                return user;
            });
            socket.to(data.roomId).emit("receive_msg", data);
        });

        socket.on("get_users", () => {
            socket.emit("receive_users", users);
        });

        socket.on("disconnect", () => {
            const leavedUser = users.find((user) => user.id === socket.id);

            setTimeout(() => {
                users = users.filter((user) => user.id !== socket.id);

                socket.to(leavedUser?.roomId).emit("leaved_user", users);
            }, 24 * 60 * 60 * 1000);
        });
    });

    console.log("Socket server was started!");

    res.end();
}

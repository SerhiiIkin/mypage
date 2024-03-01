import Image from "next/image";
import { MutableRefObject, useEffect,  } from "react";
import { userT } from "../../modules/modules";

function MessagesContainer({
    user,
    containerRef,
}: {
    user?: userT;
    containerRef: MutableRefObject<HTMLDivElement>;
}) {
    

    return (
        <div ref={containerRef} className="overflow-y-auto">
            {user?.messages.map((msg) => {
                const { id, username, time, message, imgAlt, img, dato } = msg;
                return (
                    <div key={id} className="flex gap-4 pb-4 pr-1">
                        <div>
                            <div className="sticky top-0 flex flex-col items-center">
                                <Image
                                    className="max-w-5 mx-auto rounded-full aspect-square"
                                    src={img}
                                    alt={imgAlt}
                                    width={20}
                                    height={20}
                                />
                                {username}
                            </div>
                        </div>
                        <span className="text-sm break-all">{message}</span>

                        <span className="text-sm ml-auto">
                            {dato} <p> {time} </p>
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default MessagesContainer;

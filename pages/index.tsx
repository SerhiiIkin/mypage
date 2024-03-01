import LayoutIndex from "../components/LayoutIndex/LayoutIndex";
import Hello from "../Sections/Hello/Hello";
import Skills from "../Sections/Skills/Skills";
import Portfolio from "../Sections/Portfolio/Portfolio";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { RootState } from "../store/store";
import { changeStatus } from "../store/Slices/initSocketSlice";

function Index() {
    const socketInit = useAppSelector(
        (state: RootState) => state.socket.isInit
    );
    const dispatch = useAppDispatch();
    async function init() {
        if (!socketInit) {
            try {
                const res = await fetch("/api/chat/socket");
                console.log(res);
                
                if (!res.ok) {
                    console.log(`Error fetching /api/chat/socket: ${res.statusText}`);
                    throw new Error(res.statusText);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };
        dispatch(changeStatus());
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <LayoutIndex>
            <Hello />
            <Skills />
            <Portfolio />
        </LayoutIndex>
    );
}

export default Index;

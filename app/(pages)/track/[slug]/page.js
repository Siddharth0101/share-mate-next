"use client"
import { usePathname } from "next/navigation";
import SludDes from "@/components/slugDes/slugDes";

export default function Slug() {
    const path = usePathname();
    const showSludDes = path.startsWith("/track/") && path !== "/track";
    const data={
        category:"nuts",
        amount:"500",
        description:"some random description"
    }
    return (
        <div>
            {showSludDes && <SludDes dataDis={data} />}
        </div>
    );
}

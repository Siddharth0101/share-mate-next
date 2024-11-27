"use client";
import { useEffect, useState } from "react";

export default function Suggestion() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyapi.online/api/todos");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error)
            } 
        };

        fetchData();
    }, []);
    return (
        <div>
            <ul>
                {data.map((task) => (
                    <li key={task.id} className="py-2">
                        <h3 className="font-semibold">{task.title}</h3>
                        <p>Status: {task.completed ? "Completed" : "Not Completed"}</p>
                        <p>Priority: {task.priority}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

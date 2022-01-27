import Queue from "./Queue.js";
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";

export default function Temp({items}) {
    return (
        <div>
            <ul>
                {
                    items.map((reptile) => <li>{reptile}</li>)
                }
            </ul>
        </div>
    )
}
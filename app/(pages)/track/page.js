"use client"
import Form from "@/components/track/track form/form";
import TrackList from "@/components/trackList/trackList";
import { useState } from "react";

export default function Track() {
    const [isList,setIsList]=useState([])
    return <div>
        <Form setIsList={setIsList}/>
        <TrackList isList={isList}/>
    </div>
}
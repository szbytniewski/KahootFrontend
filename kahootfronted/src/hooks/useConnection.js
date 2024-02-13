import {useEffect, useState} from "react"
import * as signalr from "@microsoft/signalr"

const useConnection = () => {
    const [connection, setConnection] = useState(null)
    
    useEffect(() => {
        const newConnection = new signalr.HubConnectionBuilder()
            .withUrl("http://localhost:5161/game", 
                {
                    skipNegotiation: true,
                    transport: signalr.HttpTransportType.WebSockets})
            .withAutomaticReconnect()
            .build();
        
        setConnection(newConnection);
    }, []);
    
    return [connection, setConnection]
}

export default useConnection;
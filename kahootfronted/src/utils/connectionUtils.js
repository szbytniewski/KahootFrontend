import * as signalr from '@microsoft/signalr';

export const isConnected = (connection) => {
    return connection.state === signalr.HubConnectionState.Connected;
}
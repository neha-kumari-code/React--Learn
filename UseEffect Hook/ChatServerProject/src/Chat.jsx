import React from 'react'

export function createConnection(selectval, serverId) {
    return {
        connect() {
            console.log("connected");
        },
        disconnect() {
            console.log("disconnect");
        }
    }
}
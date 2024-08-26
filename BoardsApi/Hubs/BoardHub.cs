using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace BoardsApi.Hubs
{
    public class BoardHub : Hub
    {
        public async Task SendCanvasUpdate(string boardId, string canvasState)
        {
            // Broadcast the updated canvas state to all clients except the sender
            await Clients.OthersInGroup(boardId).SendAsync("ReceiveCanvasUpdate", canvasState);
        }

        public async Task JoinBoardGroup(string boardId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, boardId);
        }

        public async Task LeaveBoardGroup(string boardId)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, boardId);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoardsApi.Models
{
    public class Board
    {
        public int BoardId {get; set;}
        public string BoardName {get;set;}
        public string CanvasState {get;set;}
        public DateTime LastModified{get;set;}

    }
}
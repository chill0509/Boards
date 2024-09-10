using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace BoardsApi.Models
{
    public class Board
    {
        [Key]
        public int BoardId {get; set;}
        public string BoardName {get;set;}
        public string OwnerId {get;set;}
        public string CanvasState {get;set;}
        public DateTime Created {get; set;}
        public DateTime LastModified{get;set;}
        public ApplicationUser Owner {get;set;}

        public ICollection<BoardPermission> Permissions {get;set;}
    }
}
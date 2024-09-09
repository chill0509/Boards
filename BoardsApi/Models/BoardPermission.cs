using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace BoardsApi.Models
{
    public class BoardPermission
    {
        [Key]
        public int PermissionId {get;set;}
        public int BoardId {get;set;}
        public string UserId {get;set;}
        public bool CanEdit {get;set;}

        public Board Board {get;set;}
        public ApplicationUser User {get;set;}
    }
}
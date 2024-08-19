using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BoardsApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BoardsApi.Data
{
    public class BoardContext : DbContext
    {
        public BoardContext(DbContextOptions<BoardContext> options) : base(options) {

        }

        public DbSet<Board> Boards {get;set;}

    }
}
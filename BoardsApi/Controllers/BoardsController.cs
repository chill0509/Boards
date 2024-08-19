using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BoardsApi.Data;
using BoardsApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BoardsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardsController : ControllerBase
    {
        private readonly BoardContext _context;

        public BoardsController(BoardContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateBoard([FromBody] Board board)
        {
            board.LastModified = DateTime.Now;
            _context.Boards.Add(board);
            await _context.SaveChangesAsync();
            return Ok(board.BoardId);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBoard(int id, [FromBody] Board board)
        {
            var existingBoard = await _context.Boards.FindAsync(id);

            if(existingBoard == null)
            {
                return NotFound();
            }

            existingBoard.CanvasState = board.CanvasState;
            existingBoard.LastModified = DateTime.Now;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet]
        public async Task<IActionResult> GetBoards()
        {
            var boards = await _context.Boards.ToListAsync();
            return Ok(boards);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBoard(int id)
        {
            var board = await _context.Boards.FindAsync(id);

            if(board == null)
            {
                return NotFound();
            }

            return Ok(board);
        }

    }
}
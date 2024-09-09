using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BoardsApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // migrationBuilder.CreateTable(
            //     name: "Boards",
            //     columns: table => new
            //     {
            //         BoardId = table.Column<int>(type: "int", nullable: false)
            //             .Annotation("SqlServer:Identity", "1, 1"),
            //         BoardName = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //         CanvasState = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //         LastModified = table.Column<DateTime>(type: "datetime2", nullable: false)
            //     },
            //     constraints: table =>
            //     {
            //         table.PrimaryKey("PK_Boards", x => x.BoardId);
            //     });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Boards");
        }
    }
}

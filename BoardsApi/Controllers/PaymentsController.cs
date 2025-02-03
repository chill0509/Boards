using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using System.Threading.Tasks;
using BoardsApi.Models;

[Route("api/payments")]
[ApiController]
public class PaymentsController : Controller
{
    private readonly UserManager<ApplicationUser> _userManager;

    public PaymentsController(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;
    }

    [HttpPost("subscribe")]
    public async Task<IActionResult> Subscribe([FromBody] PaymentRequest request)
    {
        var user = await _userManager.GetUserAsync(User);
        if (user == null) return Unauthorized();

        // Process Stripe payment here...

        // If successful, update user
        user.IsPaidUser = true;
        await _userManager.UpdateAsync(user);

        return Ok(new { message = "Subscription successful!" });
    }

}

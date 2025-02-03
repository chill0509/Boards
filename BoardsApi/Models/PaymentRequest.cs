
using System.ComponentModel.DataAnnotations;

public class PaymentRequest
{
    // TODO: finish this class

    [Key]
    public int Id { get; set; } // Primary key in the db

    [Required]
    public required string UserId { get; set; } // User making the payment
    
    [Range(0.01, double.MaxValue)]
    public decimal Amount { get; set; } // Amount to be charged
    [Required]
    public required string Currency { get; set; } // Currency for the transaction (USD, EUR, etc.)
    public required string PaymentMethod { get; set; } // Payment method type (credit card, PayPal, etc.)
    public required string PaymentGateway { get; set; } // Payment gateway used (e.g. Stripe, PayPal, etc.)
    public required string Description { get; set; } // Description for the payment (e.g. subscription for a service)
    [Required]
    public DateTime PaymentDate { get; set; } // DateTime of the payment request
    public bool IsRecurring { get; set; } // Whether the payment is a recurring subscription
    [Required]
    public required string Status { get; set; } // Status of the payment request (Pending, Completed, Failed, etc)
    public required string TransactionReference { get; set; } // A unique transaction reference for tracking 
}

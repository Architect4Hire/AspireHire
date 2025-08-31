namespace Architect4Hire.AspireHire.Shared.Models.Domain.Sql
{
    public class Audit:Entity
    {
        public string TableName { get; set; }
        public string Action { get; set; }
        public string KeyValues { get; set; }
        public string? Changes { get; set; } 
    }
}

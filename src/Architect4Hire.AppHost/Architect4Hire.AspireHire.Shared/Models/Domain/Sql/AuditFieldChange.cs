namespace Architect4Hire.AspireHire.Shared.Models.Domain.Sql
{
    public class AuditFieldChange
    {
        public string Field { get; set; }
        public string OldValue { get; set; }
        public string NewValue { get; set; }
    }
}

using Architect4Hire.AspireHire.Shared.Enumerations;

namespace Architect4Hire.AspireHire.Shared.Models.Domain.Cosmos
{
    public class Entity
    {
        public Guid Id { get; set; }
        public DocumentType DocumentType { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}

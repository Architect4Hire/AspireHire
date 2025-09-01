using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Architect4Hire.AspireHire.Shared.Enumerations
{
    public enum DocumentType
    {
        ClientProfile,
        TalentProfile
    }

    public enum Error
    {
        None,
        NotFound,
        InvalidInput,
        Unauthorized,
        Forbidden,
        InternalServerError,
        DuplicateEmail,
        DuplicateUserName,
        UserNotFound,
        EmailNotConfirmed,
        ProcessingError
    }
}

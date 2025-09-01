using Architect4Hire.AspireHire.Shared.Enumerations;
using Architect4Hire.AspireHire.Shared.Models.Service;
using Architect4Hire.AspireHire.Shared.Result;
using Microsoft.AspNetCore.Mvc;

namespace Architect4Hire.AspireHire.Shared.Extensions
{
    public static class ResultExtensions
    {
        public static IActionResult Match<TModel>(this Result<TModel> result) where TModel : ServiceBaseModel
        {
            if (result == null)
            {
                throw new ArgumentNullException(nameof(result));
            }

            if (result.IsSuccess)
            {
                return new OkObjectResult(result);
            }

            return result.Error switch
            {
                Error.NotFound => new NotFoundObjectResult(result),
                Error.InvalidInput => new BadRequestObjectResult(result),
                Error.Unauthorized => new UnauthorizedObjectResult(result),
                Error.Forbidden => new ForbidResult(),
                Error.InternalServerError => new ObjectResult(result) { StatusCode = 500 },
                Error.DuplicateEmail => new ObjectResult(result) { StatusCode = 432 },
                Error.DuplicateUserName => new ObjectResult(result) { StatusCode = 431 },
                Error.UserNotFound => new ObjectResult(result) { StatusCode = 404 },
                Error.EmailNotConfirmed => new ObjectResult(result) { StatusCode = 430 },
                Error.ProcessingError => new ObjectResult(result) { StatusCode = 400 },
                _ => new ObjectResult(result) { StatusCode = 500 }
            };
        }
    }
}

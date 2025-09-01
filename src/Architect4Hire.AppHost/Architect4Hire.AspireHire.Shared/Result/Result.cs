using Architect4Hire.AspireHire.Shared.Enumerations;
using Architect4Hire.AspireHire.Shared.Models.Service;

namespace Architect4Hire.AspireHire.Shared.Result
{
    public class Result<T> where T : ServiceBaseModel
    {
        public Result() { }
        private Result(bool isSuccess, Error error, List<string>? messages, T? data)
        {
            if (isSuccess && error != Error.None ||
                !isSuccess && error == Error.None)
            {
                throw new ArgumentException("Invalid error", nameof(error));
            }

            IsSuccess = isSuccess;
            IsFailure = !isSuccess;
            Error = error;
            ErrorCode = error.ToString();
            Messages = messages ?? new List<string>();
            Data = data;
        }

        public bool IsSuccess { get; }

        public bool IsFailure { get; }

        public List<string> Messages { get; set; }

        public Error Error { get; }
        public string ErrorCode { get; set; }

        public T? Data { get; set; }

        public static Result<T> Success(T data) => new(true, Error.None, null, data);

        public static Result<T> Success() => new(true, Error.None, null, null);

        public static Result<T> Failure(Error error, List<string>? messages) => new(false, error, messages, null);
    }
}

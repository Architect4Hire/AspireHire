# List of service project directories (relative to $root)
$serviceProjects = @(
    "Architect4Hire.AspireHire.TokenService",
    "Architect4Hire.AspireHire.UserService",
    "Architect4Hire.AspireHire.ContractService",
    "Architect4Hire.AspireHire.JobService",
    "Architect4Hire.AspireHire.MessageService",
    "Architect4Hire.AspireHire.PaymentService",
    "Architect4Hire.AspireHire.ProfileService",
    "Architect4Hire.AspireHire.ProposalService",
    "Architect4Hire.AspireHire.UtilityService"
)

# Standard folders to create (supports nested folders)
$folders = @(
    "Managers",
    "Managers/HostedServices"
)

# Absolute root path to your projects
$root = "D:\architect4hiresource\aspirehire\src\Architect4Hire.AppHost"

foreach ($project in $serviceProjects) {
    $projectPath = Join-Path $root $project
    if (-not (Test-Path $projectPath)) {
        Write-Host "Project folder missing, creating: $projectPath"
        New-Item -ItemType Directory -Path $projectPath -Force | Out-Null
    }
    foreach ($folder in $folders) {
        $folderPath = Join-Path $projectPath $folder
        if (-not (Test-Path $folderPath)) {
            Write-Host "Creating folder: $folderPath"
            New-Item -ItemType Directory -Path $folderPath -Force | Out-Null
        }
        # Create a default class file in the deepest folder only
        $parts = $folder -split '[\\/]' # Handles both / and \
        $className = $parts[-1] -replace 's$',''  # e.g., Managers -> Manager
        $filePath = Join-Path $folderPath "$className.cs"
        if (-not (Test-Path $filePath)) {
            Write-Host "Creating file: $filePath"
            $namespace = "$project." + ($folder -replace '[\\/]', '.')
            $classContent = @"
namespace $namespace
{
    public class $className
    {
        // TODO: Implement $className logic
    }
}
"@
            Set-Content -Path $filePath -Value $classContent
        }
    }
}
Write-Host "Nested folders and default classes created."
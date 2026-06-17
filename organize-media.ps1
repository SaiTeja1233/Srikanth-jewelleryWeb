Write-Host "Organizing Media Files..." -ForegroundColor Green
Write-Host "=" * 50

# Create folders
$folders = @(
    "public\media\images\home-cards",
    "public\media\images\logos", 
    "public\media\videos"
)

foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force
        Write-Host "Created: $folder" -ForegroundColor Yellow
    }
}

# Files to move
$filesToMove = @(
    @{Pattern = "public\homeimg*.jpg"; Destination = "public\media\images\home-cards"},
    @{Pattern = "public\homeimg*.png"; Destination = "public\media\images\home-cards"},
    @{Pattern = "public\logo*.png"; Destination = "public\media\images\logos"},
    @{Pattern = "public\stroke.png"; Destination = "public\media\images"},
    @{Pattern = "public\homevid.mp4"; Destination = "public\media\videos"}
)

# Move files
foreach ($move in $filesToMove) {
    $files = Get-ChildItem -Path $move.Pattern -ErrorAction SilentlyContinue
    if ($files) {
        foreach ($file in $files) {
            $destPath = Join-Path $move.Destination $file.Name
            Move-Item -Path $file.FullName -Destination $destPath -Force
            Write-Host "Moved: $($file.Name) → $($move.Destination)" -ForegroundColor Green
        }
    }
}

# Show results
Write-Host "`nNew Structure:" -ForegroundColor Cyan
Write-Host "=" * 50
Get-ChildItem public\media -Recurse | Format-Table FullName, Length -AutoSize

Write-Host "`nOld public folder:" -ForegroundColor Cyan
Get-ChildItem public\* -Exclude media | Format-Table Name, Length -AutoSize
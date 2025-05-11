# update-supabase-key.ps1
# Atualiza o .env com nova chave do Supabase e testa conexão

$supabaseUrl = "https://gchuinhzdrcrckhiwxtk.supabase.co "
$newAnonKey = "COLE_AQUI_SUA_ANON_KEY_COMPLETA"

$envFilePath = ".env"

# 1. Cria ou atualiza o .env
if (-Not (Test-Path $envFilePath)) {
    Write-Host ".env não encontrado. Criando arquivo..." -ForegroundColor Yellow
    New-Item -Path $envFilePath -ItemType File
}

$lines = Get-Content -Path $envFilePath -Encoding UTF8

$updatedLines = @()
$foundSupabaseUrl = $false
$foundSupabaseAnonKey = $false

foreach ($line in $lines) {
    if ($line -like "VITE_SUPABASE_URL=*") {
        $updatedLines += "VITE_SUPABASE_URL=$supabaseUrl"
        $foundSupabaseUrl = $true
    }
    elseif ($line -like "VITE_SUPABASE_ANON_KEY=*") {
        $updatedLines += "VITE_SUPABASE_ANON_KEY=$newAnonKey"
        $foundSupabaseAnonKey = $true
    }
    else {
        $updatedLines += $line
    }
}

# Adiciona caso não tenha
if (-Not $foundSupabaseUrl) { $updatedLines += "VITE_SUPABASE_URL=$supabaseUrl" }
if (-Not $foundSupabaseAnonKey) { $updatedLines += "VITE_SUPABASE_ANON_KEY=$newAnonKey" }

# Salva o .env atualizado
Set-Content -Path $envFilePath -Value $updatedLines -Encoding UTF8
Write-Host "✅ Chave do Supabase atualizada no .env" -ForegroundColor Green

# 2. Teste de Conexão via API REST
Write-Host "🔍 Testando conexão com o Supabase..." -ForegroundColor Cyan

$headers = @{
    "apikey"        = $newAnonKey
    "Authorization" = "Bearer $newAnonKey"
}

$url = "$supabaseUrl/rest/v1/projects?select=*" 

try {
    $response = Invoke-WebRequest -Uri $url -Headers $headers -Method GET -UseBasicParsing
    
    if ($response.StatusCode -eq 200) {
        Write-Host "🟢 Conexão bem-sucedida!" -ForegroundColor Green
        Write-Host "📦 Resposta: $($response.Content)" -ForegroundColor White
    }
    else {
        Write-Host "🔴 Erro na conexão. Status: $($response.StatusCode)" -ForegroundColor Red
        Write-Host "Resposta: $($response.Content)" -ForegroundColor Yellow
    }
}
catch {
    Write-Host "❌ Falha ao conectar. Erro: $_" -ForegroundColor Red
}